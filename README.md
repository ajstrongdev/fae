# ✨ Fae ✨

Fae is a ✨ magically simple ✨ opinionated text editor inspired by [Helix](https://helix-editor.com), [Micro](https://micro-editor.github.io) and [GNU Nano](https://nano-editor.org).

> **Note:** Fae is currently in active development. Nothing is feature complete or stabilised. Please see our issues tab for a list of features we are still working on.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```

To build:

First ensure you have `scriptc` installed globally:

```bash
bun install -g scriptc
```

Then:

```bash
bun run build && mv ./build/fae /usr/bin/fae  
```

## Development:

As mentioned previously, Fae is currently under active development with no planned estimate on when it will be considered "stable". 

**Contributions:**
- Please add a disclaimer in your Pull Request if any code provided is AI-generated.
- Please see the "issues" tab for a list of open issues that either need triaging or actioning.
