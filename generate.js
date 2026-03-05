const fs = require('fs');
const path = require('path');

const source = fs.readFileSync('/mnt/user-data/outputs/java-developer-wissensmap.md', 'utf-8');
const lines = source.split('\n');

const docsDir = path.join(__dirname, 'docs');
const topicsDir = path.join(docsDir, 'topics');

// Parse the markdown into groups and topics
const groups = [];
let currentGroup = null;
let currentSubGroup = null;

for (const line of lines) {
  if (line.startsWith('## ')) {
    currentGroup = { name: line.replace('## ', '').trim(), subGroups: [], topics: [] };
    currentSubGroup = null;
    groups.push(currentGroup);
  } else if (line.startsWith('### ')) {
    currentSubGroup = { name: line.replace('### ', '').trim(), topics: [] };
    if (currentGroup) currentGroup.subGroups.push(currentSubGroup);
  } else if (line.startsWith('- ') && currentGroup) {
    const topic = line.replace('- ', '').trim();
    if (currentSubGroup) {
      currentSubGroup.topics.push(topic);
    } else {
      currentGroup.topics.push(topic);
    }
  }
}

// Helper: slugify
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Create directories
fs.mkdirSync(docsDir, { recursive: true });
fs.mkdirSync(topicsDir, { recursive: true });
fs.mkdirSync(path.join(docsDir, '.vitepress'), { recursive: true });

// Generate topic pages and collect sidebar + index data
const sidebar = [];
let totalTopics = 0;

for (const group of groups) {
  const groupSlug = slugify(group.name);
  const groupDir = path.join(topicsDir, groupSlug);
  fs.mkdirSync(groupDir, { recursive: true });

  const sidebarGroup = { text: group.name, collapsed: true, items: [] };

  // Direct topics
  for (const topic of group.topics) {
    const slug = slugify(topic);
    const filePath = path.join(groupDir, `${slug}.md`);
    const content = `---
outline: deep
---

# ${topic}

<span class="status">📝 Noch nicht bearbeitet</span>

---

## Notizen

*Hier deine Notizen eintragen...*

## Code-Beispiele

\`\`\`java
// Dein Code hier...
\`\`\`

## Wichtige Punkte

- ...

## Interview-Fragen

- ...

<style>
.status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  background: #2a2a2a;
  color: #aaa;
  font-size: 0.85em;
}
</style>
`;
    fs.writeFileSync(filePath, content);
    sidebarGroup.items.push({ text: topic, link: `/topics/${groupSlug}/${slug}` });
    totalTopics++;
  }

  // Subgroups
  for (const sub of group.subGroups) {
    const subItems = [];
    for (const topic of sub.topics) {
      const slug = slugify(topic);
      const filePath = path.join(groupDir, `${slug}.md`);
      const content = `---
outline: deep
---

# ${topic}

<span class="status">📝 Noch nicht bearbeitet</span>

---

## Notizen

*Hier deine Notizen eintragen...*

## Code-Beispiele

\`\`\`java
// Dein Code hier...
\`\`\`

## Wichtige Punkte

- ...

## Interview-Fragen

- ...

<style>
.status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  background: #2a2a2a;
  color: #aaa;
  font-size: 0.85em;
}
</style>
`;
      fs.writeFileSync(filePath, content);
      subItems.push({ text: topic, link: `/topics/${groupSlug}/${slug}` });
      totalTopics++;
    }
    sidebarGroup.items.push({ text: sub.name, collapsed: true, items: subItems });
  }

  sidebar.push(sidebarGroup);
}

console.log(`Generated ${totalTopics} topic pages in ${groups.length} groups.`);

// Generate VitePress config
const configContent = `import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Java Wissensmap',
  description: 'Mein persönliches Java-Interview Lernportal',
  lang: 'de-DE',
  themeConfig: {
    nav: [
      { text: 'Übersicht', link: '/' },
    ],
    sidebar: ${JSON.stringify(sidebar, null, 6)},
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
          modal: {
            noResultsText: 'Keine Ergebnisse für',
            resetButtonTitle: 'Suche zurücksetzen',
            footer: { selectText: 'Auswählen', navigateText: 'Navigieren', closeText: 'Schließen' }
          }
        }
      }
    },
    outline: { label: 'Auf dieser Seite' },
    docFooter: { prev: 'Zurück', next: 'Weiter' },
  }
})
`;
fs.writeFileSync(path.join(docsDir, '.vitepress', 'config.mjs'), configContent);

// Generate index page
let indexContent = `---
layout: home
hero:
  name: Java Wissensmap
  text: Interview-Vorbereitung
  tagline: "${totalTopics} Themen — Jeden Tag ein Stück besser werden."
---

<div class="overview">

# Themenübersicht

Klicke auf ein Thema um deine Notizen zu beginnen.

`;

for (const group of groups) {
  const groupSlug = slugify(group.name);
  indexContent += `\n## ${group.name}\n\n`;

  if (group.topics.length > 0) {
    for (const topic of group.topics) {
      const slug = slugify(topic);
      indexContent += `- [${topic}](/topics/${groupSlug}/${slug})\n`;
    }
  }

  for (const sub of group.subGroups) {
    indexContent += `\n### ${sub.name}\n\n`;
    for (const topic of sub.topics) {
      const slug = slugify(topic);
      indexContent += `- [${topic}](/topics/${groupSlug}/${slug})\n`;
    }
  }
}

indexContent += `
</div>

<style>
.overview {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
.overview h2 {
  margin-top: 2.5rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--vp-c-divider);
}
.overview h3 {
  margin-top: 1.5rem;
  color: var(--vp-c-text-2);
}
.overview ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
}
.overview li {
  flex: 0 0 auto;
}
.overview li a {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9em;
  text-decoration: none;
  transition: all 0.2s;
}
.overview li a:hover {
  background: var(--vp-c-brand-1);
  color: white;
}
</style>
`;

fs.writeFileSync(path.join(docsDir, 'index.md'), indexContent);

console.log('Done! VitePress project generated.');
