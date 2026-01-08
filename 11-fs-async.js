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


// const { readFile, writeFile } = require("fs/promises");

// const start = async () => {
//   try {
//     // const first = await readFile("./content/first.txt", "utf-8");
//     // const second = await readFile("./content/second.txt", "utf-8");

//     const [first, second] = await Promise.all([
//       readFile("./content/first.txt", "utf-8"),
//       readFile("./content/second.txt", "utf-8"),
//     ]);

//     await writeFile(
//       "./content/third.txt",
//       `This is awesome blyattttch: ${first}, ${second}`
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
