import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(' ');

// A-和風いろはちゃんイージー

const five = input.filter(x => {
    return parseInt(x) === 5;
});

const seven = input.filter(x => {
    return parseInt(x) === 7;
});

if (five.length === 2 && seven.length === 1) {
    console.log('YES');
} else {
    console.log('NO');
}
