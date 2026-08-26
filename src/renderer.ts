import type { Editor } from "./editor.ts";
import type { Terminal } from "./terminal.ts";

export class Renderer {
  constructor(private terminal: Terminal) {}
  render(editor: Editor) {
    this.terminal.clear();
    for (const line of editor.buffer.lines) {
      process.stdout.write(line);
      process.stdout.write("\r\n");
    }
    this.terminal.moveCursor(editor.cursor.x, editor.cursor.y);
  }
}
