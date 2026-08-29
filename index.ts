import { Editor } from "./src/editor.ts";
import { Renderer } from "./src/renderer.ts";
import { Terminal } from "./src/terminal.ts";
import { parseKey } from "./src/utils.ts";

const editor = new Editor();
const terminal = new Terminal();
const renderer = new Renderer(terminal);

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
  }

  renderer.render(editor);
});
