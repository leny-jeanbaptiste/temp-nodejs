const { readFile, writeFile } = require("fs/promises");

const start = async () => {
  try {
    // const first = await readFile("./content/first.txt", "utf-8");
    // const second = await readFile("./content/second.txt", "utf-8");

    const [first, second] = await Promise.all([
      readFile("./content/first.txt", "utf-8"),
      readFile("./content/second.txt", "utf-8"),
    ]);

    await writeFile(
      "./content/third.txt",
      `This is awesome blyattttch: ${first}, ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
