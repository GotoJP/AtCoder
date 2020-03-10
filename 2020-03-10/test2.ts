import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(/\n/);

// B-文字列大好きいろはちゃんイージー

const N = parseInt(input[0].split(' ')[0]);

// stringはStringとするとなぜかatcoderは認識しない
const targetText = new Array<string>();
let result = "";

for (let i = 1; i < 1 + N; i++) {
    targetText.push(input[i]);
}

targetText.sort();

targetText.forEach(x => {
    result += x;
});
console.log(result);

