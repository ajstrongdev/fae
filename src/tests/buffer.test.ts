import { expect, test } from "bun:test";
import { TextBuffer } from "../buffer";
import type { BufferType, InsertType } from "../types.ts";

test("starts on empty line", () => {
  const buffer = new TextBuffer();
  expect(buffer.lines).toEqual([""]);
});

test("inserts text", () => {
  const buffer = new TextBuffer();
  buffer.insert({ x: 0, y: 0, text: "Hello, world!" } as InsertType);
  expect(buffer.lines).toEqual(["Hello, world!"]);
});

test("inserts text in middle of line", () => {
  const buffer = new TextBuffer();
  buffer.lines = ["Hello"];
  buffer.insert({ x: 6, y: 0, text: ", world!" } as InsertType);
});

test("creates new line", () => {
  const buffer = new TextBuffer();
  buffer.lines = ["Hello, world!"];
  buffer.newline({ x: 5, y: 0 } as InsertType);
});

test("lines", () => {
  const buffer = new TextBuffer();
  buffer.lines = ["hello", "world"];
  buffer.backspace({ x: 0, y: 1 } as BufferType);
  expect(buffer.lines).toEqual(["helloworld"]);
});
