import type { Editor } from "./editor.ts";
import type { Terminal } from "./terminal.ts";
import type { Viewport } from "./viewport.ts";

export class Renderer {
  constructor(
    private terminal: Terminal,
    private viewport: Viewport,
  ) {}
  render(editor: Editor) {
    this.terminal.clear();
    for (let y = this.viewport.y; y < this.viewport.y + this.viewport.height; y++) {
      const line = editor.buffer.lines[y];
      if (line === undefined) break;
      const visibleLines = line.slice(this.viewport.x, this.viewport.x + this.viewport.width);
      process.stdout.write(visibleLines);
      process.stdout.write("\r\n");
    }
    this.terminal.moveCursor(editor.cursor.x - this.viewport.x, editor.cursor.y - this.viewport.y);
  }
}
