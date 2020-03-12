import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(' ');

// A- キャンディとN人の子供イージー

const N = +input[0];
let result = 0;

for (let i = 1; i <= N; i++) {
    result += i;
}

console.log(result);

// 正解！