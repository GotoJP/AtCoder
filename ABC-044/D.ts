import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split(/\n/);

const n = +input[0];
const s = +input[1];
let i = 2;

while (nazo(i, n) < Math.sqrt(n)) {
    i++;
}

if (nazo(i, n) === s) {
    console.log(nazo(i, n));
} else {
    console.log(-1);
}


/**
 * 
 * @param b 
 * @param n 
 * @return s
 */
function nazo(b: number, n: number): number {
    if (n < b) {
        return n;
    } else {
        return nazo(b, Math.floor(n / b)) + (n % b)
    }
}

// まいった