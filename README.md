# Files Name Detector

An Obsidian plugin that automatically renames files by replacing spaces with dashes.

## Features

- Renames newly created files that contain spaces (e.g. `my note.md` → `my-note.md`)
- On plugin load, scans and renames any existing files in the vault that have spaces in their names
- Shows a notice for each file renamed

## Installation

### Manual

1. Download `main.js` and `manifest.json` from the [latest release](../../releases/latest)
2. Copy them to your vault: `VaultFolder/.obsidian/plugins/files-name-detector/`
3. Enable the plugin in Obsidian Settings → Community Plugins

### Community Plugin List

Coming soon.

## Development

```bash
npm i
npm run dev     # watch mode
npm run build   # production build
```

## Author

Harris Hussain
