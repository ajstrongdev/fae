import type { Cursor } from "./cursor";

export class Viewport {
  x = 0;
  y = 0;

  constructor(
    public width: number,
    public height: number,
  ) {}

  followCursor(cursor: Cursor) {
    if (cursor.x < this.x) {
      this.x = cursor.x;
    }

    if (cursor.x >= this.x + this.width) {
      this.x = cursor.x - this.width + 1;
    }

    if (cursor.y < this.y) {
      this.y = cursor.y;
    }

    if (cursor.y >= this.y + this.height) {
      this.y = cursor.y - this.height + 1;
    }
  }
}
