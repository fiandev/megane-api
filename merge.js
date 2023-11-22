const { glob } = require("fast-glob");
const path = require("path");
const fs = require("fs");

( async () => {
  let files = (await glob(["./data/**/*.json"])).filter(v => !!v && v !== "undefined");
  let data = {};
  
  for (const file of files) {
    try {
      let key = path.basename(path.dirname(file))
      let items = JSON.parse(fs.readFileSync(file, "utf8"));
      
      console.log(`${ path.basename(file) } => ${ items.length }`);
      data[key] = [...items];
    } catch (e) {
      console.log(`[${ e.message }] => ${ file }`);
      return false;
    }
  }
  
  console.log(data);
})()