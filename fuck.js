const _fs = require("fs");
const _path = require("path");

const aliases = {
  "@": "src",
  "@components": "components",
  "@components/partials": "partials",
  "@components/sections": "sections",
  "@utils": "utils",
  "@hooks": "hooks",
  "@app": "app",
  "@contexts": "contexts",
  "@assets": "assets",
};

function scandiir (folder) {
  let res = [];
  let paths = _fs.readdirSync(folder);
  
  for (let path of paths) {
    let resolved = _path.join(folder, path);
    
    if (_fs.lstatSync(resolved).isDirectory()) res.push(...scandiir(resolved));
    else res.push(resolved);
    
  }
  
  return res;
}

function checkfile (file) {
  let content = _fs.readFileSync(file, "utf8");
  
  
  // if (/(@contexts\/Theme)/gm.test(content) /*&& content.split("\n")[0] !== '"use client"'*/) {
//     content = '"use client"\n' + content;
//     console.log(`overwrite file ${ file }`);
//     console.log(`${file} is client component`);
//   }
  if (/app\./gm.test(content) /*&& content.split("\n")[0] !== '"use client"'*/) {
    // content = '"use client"\n' + content;
    // console.log(`overwrite file ${ file }`);
    console.log(`detected at ${file}`);
  }
  /*
  for (let alias in aliases) {
    let pattern = new RegExp(`((..\\/)+)${ aliases[alias] }`, "gm");
    
    if (pattern.test(content)) {
      console.log(`replace alias at file ${ file }`);
      content = content.replace(pattern, alias);
    }
  }
  */
 // _fs.writeFileSync(file, content); 
}

let files = scandiir("./app");

for (let file of files) {
  if (/\.(py?)/.test(file)) checkfile(file);
}