const { readFile, writeFile } = require("fs");

console.log("Start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first} \n${second}`,
      (err, result) => {
        if (err) {
          console.log(err.message);
        }

        console.log("Done with this task");
      }
    );
  });
});

console.log("Starting with this task");
