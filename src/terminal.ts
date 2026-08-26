export class Terminal {
  start() {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
  }

  stop() {
    process.stdin.setRawMode(false);
    process.stdin.pause();
  }

  clear() {
    process.stdout.write("\x1b[2J");
    process.stdout.write("\x1b[H");
  }

  moveCursor(x: number, y: number) {
    process.stdout.write(`\x1b[${y + 1};${x + 1}H`);
  }
}
