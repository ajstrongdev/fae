import { Cursor } from "./cursor.ts";
import { TextBuffer } from "./buffer.ts";
import type { BufferType, InsertType } from "./types";

export class Editor {
  readonly buffer: TextBuffer;
  readonly cursor: Cursor;

  constructor() {
    this.buffer = new TextBuffer();
    this.cursor = new Cursor();
  }

  insert(text: string) {
    this.buffer.insert({ x: this.cursor.x, y: this.cursor.y, text: text } as InsertType);
    this.cursor.x += text.length;
  }

  backspace() {
    if (this.cursor.x === 0) return;
    this.buffer.backspace({ x: this.cursor.x, y: this.cursor.y } as BufferType);
    this.cursor.moveLeft();
  }

  newline() {
    this.buffer.newline({ x: this.cursor.x, y: this.cursor.y } as BufferType);
    this.cursor.y++;
    this.cursor.x = 0;
  }

  moveLeft() {
    this.cursor.moveLeft();
  }

  moveRight() {
    this.cursor.moveRight(this.buffer);
  }

  moveUp() {
    this.cursor.moveUp();
  }

  moveDown() {
    this.cursor.moveDown(this.buffer);
  }
}
