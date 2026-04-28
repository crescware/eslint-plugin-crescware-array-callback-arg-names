declare const arr: number[];

arr.map((v, i, arr, _extra) => v + i + arr.length);

arr.reduce((acc, v, i, arr, _extra) => acc + v + i + arr.length, 0);
