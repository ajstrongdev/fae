import type { Editor } from "./editor.ts";

export class Renderer {
  render(editor: Editor) {
    process.stdout.write("\x1b[2J"); // CLS
    process.stdout.write("\x1b[H");
    for (const line of editor.buffer.lines) {
      process.stdout.write(line);
      process.stdout.write("\r\n");
    }
    process.stdout.write(`\x1b[${editor.cursor.y + 1};${editor.cursor.x + 1}H`);
  }
}
