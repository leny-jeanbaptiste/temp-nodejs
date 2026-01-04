const { readFileSync, writeFileSync } = require("fs");

console.log("Start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Hello this is the result of: \n${first} \n${second}`,
  { flag: "a" }
);

console.log('Done with this task');
console.log('Starting the next one');
