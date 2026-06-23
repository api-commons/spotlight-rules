#!/usr/bin/env node
// Pull living content from the project repos so the site isn't hand-maintained:
//   - roadmap.md   <- canonical ROADMAP.md in api-commons/spotlight-cli
//   - _data/releases.json <- published npm versions of @spotlight-rules/* packages
// Run by .github/workflows/sync.yml on a schedule (and manually). Safe to run
// locally too. Only writes files; the workflow commits any diffs.

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const RAW = 'https://raw.githubusercontent.com/api-commons/spotlight-cli/main/planning/spectral/ROADMAP.md';
const ROADMAP_SRC_URL = 'https://github.com/api-commons/spotlight-cli/blob/main/planning/spectral/ROADMAP.md';

async function syncRoadmap() {
  const res = await fetch(RAW);
  if (!res.ok) throw new Error(`roadmap fetch: HTTP ${res.status}`);
  let md = await res.text();
  // Make repo-relative links absolute so they work off-repo.
  md = md.replace(/\]\(\.\//g, '](https://github.com/api-commons/spotlight-cli/blob/main/planning/spectral/');
  // Drop the canonical H1 (the page adds its own title) and any leading blank lines.
  md = md.replace(/^#\s+.*\n/, '').replace(/^\s+/, '');
  const front =
    '---\n' +
    'layout: default\n' +
    'nav: roadmap\n' +
    'title: Roadmap\n' +
    'description: The Spotlight Rules roadmap across the CLI, the specification, and the VS Code extension.\n' +
    '---\n\n' +
    '# Roadmap\n\n' +
    `<p class="text-muted small">Synced automatically from the canonical <a href="${ROADMAP_SRC_URL}">ROADMAP.md</a> in spotlight-cli. Edit it there.</p>\n\n` +
    '{% raw %}\n' +
    md.trim() +
    '\n{% endraw %}\n';
  writeFileSync(join(ROOT, 'roadmap.md'), front);
  process.stdout.write('synced roadmap.md\n');
}

async function syncReleases() {
  // spotlight-cli is the headline install; track its published versions as the
  // release spine. The npm registry document is public (no auth needed).
  const pkg = '@spotlight-rules/spotlight-cli';
  const res = await fetch(`https://registry.npmjs.org/${pkg.replace('/', '%2F')}`);
  const releases = [];
  if (res.ok) {
    const doc = await res.json();
    const time = doc.time || {};
    for (const [version, date] of Object.entries(time)) {
      if (version === 'created' || version === 'modified') continue;
      releases.push({
        package: pkg,
        version,
        date,
        url: `https://www.npmjs.com/package/${pkg}/v/${version}`,
      });
    }
    releases.sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
  } else {
    process.stdout.write(`releases: registry HTTP ${res.status} (writing empty list)\n`);
  }
  mkdirSync(join(ROOT, '_data'), { recursive: true });
  writeFileSync(join(ROOT, '_data', 'releases.json'), JSON.stringify(releases, null, 2) + '\n');
  process.stdout.write(`synced _data/releases.json (${releases.length} releases)\n`);
}

await syncRoadmap();
await syncReleases();
process.stdout.write('done\n');
