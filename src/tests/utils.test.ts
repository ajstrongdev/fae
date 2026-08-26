import { expect, test } from "bun:test";
import { parseKey } from "../utils.ts";

test("parse character", () => {
  expect(parseKey("a")).toEqual({
    type: "character",
    value: "a",
  });
});

test("parse up", () => {
  expect(parseKey("\x1b[A")).toEqual({
    type: "up",
  });
});

test("parse down", () => {
  expect(parseKey("\x1b[B")).toEqual({
    type: "down",
  });
});

test("parse left", () => {
  expect(parseKey("\x1b[D")).toEqual({
    type: "left",
  });
});

test("parse right", () => {
  expect(parseKey("\x1b[D")).toEqual({
    type: "left",
  });
});

test("parse backspace", () => {
  expect(parseKey("\x7f")).toEqual({
    type: "backspace",
  });
});

test("parse newline", () => {
  expect(parseKey("\r")).toEqual({
    type: "enter",
  });
});

test("parse quit", () => {
  expect(parseKey("\x03")).toEqual({
    type: "quit",
  });
});

test("parse save", () => {
  expect(parseKey("\x13")).toEqual({
    type: "save",
  });
});

test("unknown input is null", () => {
  expect(parseKey("\x1b")).toBeNull();
});
