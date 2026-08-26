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
}
