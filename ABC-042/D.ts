import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(' ');

// D-いろはちゃんとマス目
// 不正解 

const height = +input[0];
const width = +input[1];

// 下からA個以内左からB個以内のマスは進入禁止
const A = +input[2];
const B = +input[3];

let result = 0;

for (let i = B; i < width; i++) {
    result += combi(height - A - 1 + i, i) * combi(A + width - i - 2, A - 1);
}

console.log(result % 1000000007);

function combi(num: number, num2: number): number {
    let res = 1;
    for (let count1 = 0; count1 < num2; count1++) {
        res *= num - count1;
        res /= num2 - count1;
    }

    return res;
}