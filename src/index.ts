import { Editor } from "./services/editor.ts";
import { Renderer } from "./services/renderer.ts";
import { Terminal } from "./services/terminal.ts";
import { parseKey } from "./utils/inputs.ts";
import { Viewport } from "./services/viewport.ts";
import { InputHandler } from "./services/inputs.ts";

const editor = new Editor();

const terminal = new Terminal();
let size = terminal.size();

const viewport = new Viewport(size.width, size.height);
const renderer = new Renderer(terminal, viewport);
const handler = new InputHandler(editor);

terminal.start();
viewport.followCursor(editor.cursor);
renderer.render(editor);

process.stdin.on("data", (data: string) => {
  const key = parseKey(data);
  if (key === null) return;
  if (key.type === "quit") {
    terminal.stop();
    process.exit(0);
  }
  handler.handle(key);
  viewport.followCursor(editor.cursor);
  renderer.render(editor);
});

process.stdout.on("resize", () => {
  size = terminal.size();
  viewport.width = size.width;
  viewport.height = size.height;
  viewport.followCursor(editor.cursor);
  renderer.render(editor);
});
