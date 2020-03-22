import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(/\n/);

const N = +input[0];
const nums = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
    let res = 0;
    let target = JSON.parse(JSON.stringify(nums));
    target.splice(i, 1);
    let tagNums = target.filter((x, i, self) => {
        return self.indexOf(x) === i;
    })

    tagNums.forEach(tag => {
        let len = target.filter(x => { return x === tag }).length

        res += combi(len, 2);
    })

    console.log(res);
}

function combi(num: number, num2: number): number {
    let res = 1;
    for (let count1 = 0; count1 < num2; count1++) {
        res *= num - count1;
        res /= num2 - count1;
    }

    return res;
}

// TLE