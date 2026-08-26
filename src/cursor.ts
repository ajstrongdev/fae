import type { TextBuffer } from "./buffer";

export class Cursor {
  x = 0;
  y = 0;

  moveLeft() {
    if (this.x > 0) {
      this.x--;
    }
  }

  moveRight(buffer: TextBuffer) {
    const line = buffer.lines[this.y];
    if (line === undefined) return; // Assert line is a number.
    if (this.x < line.length) {
      this.x++;
    }
  }

  moveUp() {
    if (this.y > 0) {
      this.y--;
    }
  }

  moveDown(buffer: TextBuffer) {
    if (this.y < buffer.lines.length - 1) {
      this.y++;
    }
  }
}
