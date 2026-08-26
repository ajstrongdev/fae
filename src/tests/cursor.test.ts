import { expect, test } from "bun:test";
import { TextBuffer } from "../buffer";
import { Cursor } from "../cursor";

test("starts at 0,0", () => {
  const cursor = new Cursor();
  expect(cursor.x).toBe(0);
  expect(cursor.y).toBe(0);
});

test("cursor right", () => {
  const buffer = new TextBuffer();
  buffer.lines = ["Hello"];
  const cursor = new Cursor();
  cursor.moveRight(buffer);
  expect(cursor.x).toBe(1);
});

test("does not move beyond EOL", () => {
  const buffer = new TextBuffer();
  buffer.lines = ["Hello"];
  const cursor = new Cursor();
  cursor.x = 5;
  cursor.moveRight(buffer);
  expect(cursor.x).toBe(5);
});
