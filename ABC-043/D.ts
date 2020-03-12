import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");

// D - アンバランス
const len = input.split('').length;
let loopFlag = true;
for (let t = 0; t < len; t++) {
    for (let s = 1; s < len - t + 1; s++) {
        if(checkIsUnbalance(input.substr(t, s).split(''))) {
            console.log(`${t + 1} ${t + s}`);
            loopFlag = false;
            break;
        }
        if (!loopFlag) {
            break;
        }
    }
}

if (loopFlag) {
    console.log('-1 -1');
}

function checkIsUnbalance(target: Array<string>): boolean {
    let flag = false;
    if (target.length < 2) {
        return flag;
    } else {
        target.forEach(x => {
            if (target.filter((y) => {return y === x}).length * 2 > target.length) {
                flag = true;
            }
        });
        return flag;
    }
}

// 部分点 200/400獲得　処理速度の問題でlen <= 100程度までしか解けなかった(2s以内が条件)