import { expect, test } from "bun:test";
import { Terminal } from "../terminal";

test("fetches terminal size", () => {
  const terminal = new Terminal();
  expect(terminal.size()).toEqual({
    width: process.stdout.columns,
    height: process.stdout.rows,
  });
});
