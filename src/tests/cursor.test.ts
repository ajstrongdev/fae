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

test("cursor clamps up to shorter line", () => {
  const buffer = new TextBuffer();
  buffer.lines = ["hii", "hello"];
  const cursor = new Cursor();
  cursor.y = 1;
  cursor.x = 5;
  cursor.moveUp(buffer);
  expect(cursor.x).toBe(3);
  expect(cursor.y).toBe(0);
});

test("cursor clamps down to shorter line", () => {
  const buffer = new TextBuffer();
  buffer.lines = ["hello", "hii"];
  const cursor = new Cursor();
  cursor.x = 5;
  cursor.moveDown(buffer);
  expect(cursor.x).toBe(3);
  expect(cursor.y).toBe(1);
});

test("cursor cant move beyond doc", () => {
  const buffer = new TextBuffer();
  const cursor = new Cursor();
  cursor.moveUp(buffer);
  expect(cursor.y).toBe(0);
  cursor.moveDown(buffer);
});
