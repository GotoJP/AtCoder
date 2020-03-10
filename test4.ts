import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(' ');

// D-いろはちゃんとマス目
// 不正解

const height = +input[0];
const width = +input[1];

// cells(a, b)は進入禁止セル
const a = height - parseInt(input[2]) + 1;
const b = +input[3];

// 全通り
const all = combi(height - 1, width - 1);

// 禁止セルを通るパターン
const banned = combi(a - 1, b - 1) * combi(height - a, width - b);

let result = (all - banned);

result = result % 1000000007

console.log(result);


function combi(num: number, num2: number): number {
    let res = 1;
    for (let i = 0; i < num2; i++) {
        res *= (num + num2 - i);
    }

    for (let i = 0; i < num2; i++) {
        res /= (num2 - i);
    }

    return res;
}