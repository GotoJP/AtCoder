import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split('');

// B - バイナリハックイージー
let resultArray = new Array<string>();

input.forEach(x => {
    switch (x) {
        case '1':
            resultArray.push(x);
            break;
        case '0':
            resultArray.push(x);
            break;
        case 'B':
            resultArray.pop();
    }
});

let result = '';

resultArray.forEach(x => {
    result += x;
});

console.log(result);

// 正解！