import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(/\n/);

// A - 高橋君とホテルイージー

const N = +input[0];
const K = +input[1];
const X = +input[2];
const Y = +input[3];
let result = 0;

for (let i = 0; i < N; i++) {
    if (i + 1 <= K) {
        result += X;
    } else {
        result += Y;
    }
}

console.log(result);

// 正解