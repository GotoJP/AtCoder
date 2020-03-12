import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(/\n/);

// C - いっしょ

const N = +input[0];
const nums = input[1].split(' ').map(Number);
const goal = Math.round(nums.reduce((acc, cur) => {return acc + cur}) / nums.length);
let cost = 0;

if (!checkNums(nums, goal)) {
    nums.forEach(num => {
        cost += (num - goal) * (num - goal);
    });
}

console.log(cost);

function checkNums(nums: Array<number>, goal: number): boolean {
    let res = true;
    nums.forEach(num => {
        if (num !== goal) res = false;
    });
    return res;
}

// 正解！