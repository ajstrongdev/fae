import { Editor } from "./services/editor.ts";
import { Renderer } from "./services/renderer.ts";
import { Terminal } from "./services/terminal.ts";
import { parseKey } from "./utils/inputs.ts";
import { Viewport } from "./services/viewport.ts";

const editor = new Editor();

const terminal = new Terminal();
let size = terminal.size();

const viewport = new Viewport(size.width, size.height);
const renderer = new Renderer(terminal, viewport);

terminal.start();
viewport.followCursor(editor.cursor);
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
  viewport.followCursor(editor.cursor);
  renderer.render(editor);
});
