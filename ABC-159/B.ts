import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");

const S = input;
const Slen = input.length;

// Sは回文か？
if (kaibunCheck(S)) {
    // 2番目の条件
    let sub = S.substr(0, (Slen - 1) / 2);
    if (kaibunCheck(sub)) {
        // 3番目の条件
        let sub2 = S.substr((Slen + 3) / 2 - 1, Slen);
        if (kaibunCheck(sub2)) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    } else {
        console.log('No');
    }
} else {
    console.log('No');
}

function kaibunCheck(text: string): boolean {
    let target = text.split('');

    let reverse = text.split('').reverse();

    return target.join('') === reverse.join('');
}