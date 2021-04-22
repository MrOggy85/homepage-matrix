import copySrcToDist from "./copySrcToDist.ts";

async function startWatching() {
  const watcher = Deno.watchFs("src/");

  let changeDetected = false;
  for await (const event of watcher) {
    console.log("event", event, changeDetected);
    if (changeDetected) {
      continue;
    }
    changeDetected = true;
    copySrcToDist();
    setTimeout(() => {
      changeDetected = false;
    }, 500);
  }
}
copySrcToDist();
startWatching();

const process = Deno.run({
  cmd: ["file_server", "--host", "localhost", "./dist"],
});
console.log("file_server started");
console.log("process pid", process.pid);

await process.status();
process.close();
