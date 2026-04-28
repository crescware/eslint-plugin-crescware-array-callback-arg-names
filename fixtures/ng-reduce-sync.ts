declare const arr: number[];

arr.reduce((x, v, i, arr) => x + v + i + arr.length, 0);
arr.reduce((acc, x, i, arr) => acc + x + i + arr.length, 0);
arr.reduce((acc, v, x, arr) => acc + v + x + arr.length, 0);
arr.reduce((acc, v, i, x) => acc + v + i + x.length, 0);
