import { Editor } from "./services/editor.ts";
import { Renderer } from "./services/renderer.ts";
import { Terminal } from "./services/terminal.ts";
import { parseKey } from "./utils/inputs.ts";
import { Viewport } from "./services/viewport.ts";
import { InputHandler } from "./services/inputs.ts";
import { Listener } from "./services/listeners.ts";

const editor = new Editor();
const terminal = new Terminal();
const size = terminal.size();
const viewport = new Viewport(size.width, size.height);
const renderer = new Renderer(terminal, viewport);
const handler = new InputHandler(editor);
const listeners = new Listener(editor, renderer, handler, terminal, viewport);

terminal.start();
viewport.followCursor(editor.cursor);
renderer.render(editor);
listeners.start();
