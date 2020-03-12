import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(/\n/);

/** 持っているカードの総数 */
const N = +input[0].split(' ')[0];

/** カードを選ぶことによって作りたい平均値 */
const A = +input[0].split(' ')[1];

/** カードに書かれている番号 */
const nums = input[1].split(' ').map(Number);

/** 何通りのAの作り方があるか */
let result = 0;

/** 選び方のパタン総数 */
let num_of_ptn = 0;

// i = 選ぶ枚数
for (let i = 1; i < nums.length + 1; i++) {
    // 選び方のパターン数を出す
    num_of_ptn += combi(nums.length, i);
}

for (let i = 1; i <= num_of_ptn; i++) {
    let tmp = 0;
    let count = 0;
    let tag = zeroPad(i.toString(2), nums.length).split('');

    tag.forEach((x, idx) => {
        if (x === '1') {
            tmp += nums[idx]
            count += 1;
        }
    })

    if (tmp/count === A) {
        result += 1;
    }
}

console.log(result);


function zeroPad(num: string, length: number): string {
    let zeros = '';

    for (let i = 0; i < length; i++) {
        zeros += '0';
    }

    return (zeros + num).slice(-length);
}

/**
 * numCnum2となるように使用する
 * @param num 
 * @param num2 
 */
function combi(num: number, num2: number): number {
    let res = 1;
    for (let count1 = 0; count1 < num2; count1++) {
        res *= num - count1;
        res /= num2 - count1;
    }

    return res;
}

// 実装速度の壁 200/300の部分点だけ獲得
