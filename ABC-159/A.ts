import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(' ');

const N = +input[0];
const M = +input[1];

const n = N * (N - 1) / 2;
const m = M * (M - 1) / 2;

console.log(n + m);

// 正解

