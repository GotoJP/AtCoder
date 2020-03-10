import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(/\n/);

// C-こだわり者いろはちゃん

let price = +input[0].split(' ')[0];
const dislikeNumbers = input[1].split(' ');
let flag: boolean = true;




while (flag === true) {
    flag = false;
    let target = String(price).split('');
    for (let i = 0; i < dislikeNumbers.length; i++) {
        if (target.indexOf(dislikeNumbers[i]) !== -1) {
            flag = true;
        }
    }

    if (flag === true) {
        price += 1;
    }
}

console.log(price);
