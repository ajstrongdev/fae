import type { BufferType, InsertType } from "../types";

export class TextBuffer {
  lines: string[] = [""];
  insert({ x, y, text }: InsertType) {
    const line = this.lines[y];
    if (line === undefined) return; // Handles "possibly" undefined by asserting type.
    this.lines[y] = line.slice(0, x) + text + line.slice(x);
  }

  backspace({ x, y }: BufferType) {
    const line = this.lines[y];
    if (line === undefined) return;
    if (x > 0) {
      this.lines[y] = line.slice(0, x - 1) + line.slice(x);
      return;
    }
    if (y === 0) return;
    const previousLine = this.lines[y - 1];
    if (previousLine === undefined) return;
    this.lines[y - 1] = previousLine + line;
    this.lines.splice(y, 1);
  }

  newline({ x, y }: BufferType) {
    const line = this.lines[y];
    if (line === undefined) return;
    const before = line.slice(0, x);
    const after = line.slice(x);

    this.lines[y] = before;
    this.lines.splice(y + 1, 0, after);
  }
}
