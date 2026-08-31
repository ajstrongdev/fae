export type BufferType = {
  x: number;
  y: number;
};

export type InsertType = BufferType & {
  text: string;
};

export type Key =
  | { type: "character"; value: string }
  | { type: "backspace" }
  | { type: "enter" }
  | { type: "left" }
  | { type: "right" }
  | { type: "up" }
  | { type: "down" }
  | { type: "save" }
  | { type: "quit" };
