import type { Key } from "../types";
import { Editor } from "../services/editor";

export class InputHandler {
  constructor(private editor: Editor) {}
  private commands = new Map<string, () => void>([
    ["backspace", () => this.editor.backspace()],
    ["enter", () => this.editor.newline()],
    ["left", () => this.editor.moveLeft()],
    ["right", () => this.editor.moveRight()],
    ["down", () => this.editor.moveDown()],
    ["up", () => this.editor.moveUp()],
  ]);

  handle(key: Key) {
    if (key.type === "character") {
      this.editor.insert(key.value);
      return;
    }
    this.commands.get(key.type)?.();
  }
}
