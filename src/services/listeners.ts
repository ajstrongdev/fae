import type { Editor } from "./editor.ts";
import type { Renderer } from "./renderer.ts";
import type { InputHandler } from "./inputs.ts";
import type { Terminal } from "./terminal.ts";
import type { Viewport } from "./viewport.ts";
import { parseKey } from "../utils/inputs.ts";

export class Listener {
  constructor(
    private editor: Editor,
    private renderer: Renderer,
    private handler: InputHandler,
    private terminal: Terminal,
    private viewport: Viewport,
  ) {}

  start() {
    process.stdin.on("data", (data: string) => {
      const key = parseKey(data);
      if (key === null) return;
      if (key.type === "quit") {
        this.terminal.stop();
        process.exit(0);
      }
      this.handler.handle(key);
      this.viewport.followCursor(this.editor.cursor);
      this.renderer.render(this.editor);
    });

    process.stdout.on("resize", () => {
      const size = this.terminal.size();
      this.viewport.height = size.height;
      this.viewport.width = size.width;
      this.viewport.followCursor(this.editor.cursor);
      this.renderer.render(this.editor);
    });
  }
}
