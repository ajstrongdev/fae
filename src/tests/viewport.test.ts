import { expect, test } from "bun:test";
import { Viewport } from "../viewport";
import { Cursor } from "../cursor";

test("viewport shows cursor (right)", () => {
  const viewport = new Viewport(8, 8);
  const cursor = new Cursor();
  cursor.x = 8;
  viewport.followCursor(cursor);
  expect(viewport.x).toBe(1);
});

test("viewport shows cursor (down)", () => {
  const viewport = new Viewport(8, 8);
  const cursor = new Cursor();
  cursor.y = 8;
  viewport.followCursor(cursor);
  expect(viewport.y).toBe(1);
});
