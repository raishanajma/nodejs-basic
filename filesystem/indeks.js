const {fs} = require(`fs`);

const data = fs.readFileSync(`note.txt`, `utf-8`);
console.log(data);