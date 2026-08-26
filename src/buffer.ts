import type { BufferType, InsertType } from "./types";

export class TextBuffer {
  lines: string[] = [""];
  insert({ x, y, text }: InsertType) {
    const line = this.lines[y];
    if (line === undefined) return; // Handles "possibly" undefined by asserting type.
    this.lines[y] = line.slice(0, x) + text + line.slice(x);
  }

  backspace({ x, y }: BufferType) {
    const line = this.lines[y];
    if (line === undefined || x === 0) return;
    this.lines[y] = line.slice(0, x - 1) + line.slice(x);
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
