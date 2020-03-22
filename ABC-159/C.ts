import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");

const L = +input;

const taiseki = (L / 3) * (L / 3) * (L / 3);

console.log(taiseki);