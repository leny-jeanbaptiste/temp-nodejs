const {readFile, writeFile} = require('fs');

readFile('./content/subfolder/test.txt', (err, result)=>{
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(result);
});

writeFile()