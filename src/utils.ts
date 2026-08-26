import type { Key } from "./types.ts";

export function parseKey(input: string): Key | null {
  if (input === "\x1b[A") {
    return { type: "up" };
  }
  if (input === "\x1b[B") {
    return { type: "down" };
  }
  if (input === "\x1b[C") {
    return { type: "right" };
  }
  if (input === "\x1b[D") {
    return { type: "left" };
  }
  if (input === "\x7f") {
    return { type: "backspace" };
  }
  if (input === "\r") {
    return { type: "enter" };
  }
  if (input === "\x18") {
    // Todo: Quit + Save will be rolled into the same function. Use smart closing by default (eg: need to close each buffer tab to close the editor)
    return { type: "quit" };
  }
  if (input === "\x1b") return null; // Unrecognised character - exit out.
  if (input.length === 1) {
    return {
      type: "character",
      value: input,
    };
  }
  return null;
}
