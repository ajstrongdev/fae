import { expect, test } from "bun:test";
import { Editor } from "../editor";

test("starts on empty buffer", () => {
  const editor = new Editor();
  expect(editor.buffer.lines).toEqual([""]);
  expect(editor.cursor.x).toBe(0);
  expect(editor.cursor.y).toBe(0);
});

test("inserts text at cursor", () => {
  const editor = new Editor();
  editor.insert("Hello");
  expect(editor.buffer.lines).toEqual(["Hello"]);
  expect(editor.cursor.x).toBe(5);
});

test("inserts text at cursor position", () => {
  const editor = new Editor();
  editor.insert("Helo,");
  for (let i = 0; i < 2; i++) {
    editor.moveLeft();
  }
  editor.insert("l");
  for (let i = 0; i < 2; i++) {
    editor.moveRight();
  }
  editor.insert(" world!");
  expect(editor.buffer.lines).toEqual(["Hello, world!"]);
  expect(editor.cursor.x).toBe(13);
});
