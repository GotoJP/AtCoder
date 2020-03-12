import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8").split('');

// B - 美しい文字列
let result: boolean = true;

// 末尾の改行コード削除
const tag = input.filter((x) => {
    return x !== '\n';
});

tag.forEach(x => {
    if (tag.filter((y) => { return y === x }).length % 2 !== 0) {
        result = false;
    } 
})

if (result) {
    console.log('Yes');
} else {
    console.log('No');
}

// 手元のテストはクリアしているのになぜが違うと言われる

/**
 * ↑解決したけど解せない。末尾に改行コードが入っていることがあるからそれを除外したらOKらしい。
 */ 