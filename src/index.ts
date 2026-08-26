import { Editor } from "./editor.ts";
import { Renderer } from "./renderer.ts";
import { Terminal } from "./terminal.ts";
import { parseKey } from "./utils.ts";

const editor = new Editor();
const renderer = new Renderer();
const terminal = new Terminal();

terminal.start();
renderer.render(editor);

process.stdin.on("data", (input: string) => {
  const key = parseKey(input);
  if (key === null) return;
  switch (key.type) {
    case "character":
      editor.insert(key.value);
      break;
    case "backspace":
      editor.backspace();
      break;
    case "enter":
      editor.newline();
      break;
    case "left":
      editor.moveLeft();
      break;
    case "right":
      editor.moveRight();
      break;
    case "up":
      editor.moveUp();
      break;
    case "down":
      editor.moveDown();
      break;
    case "quit":
      terminal.stop();
      process.exit(0);
      break;
    case "save":
      console.log("TODO");
  }

  renderer.render(editor);
});
