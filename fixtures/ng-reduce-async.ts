declare const arr: number[];

arr.reduce(async (a, v) => (await a) + v, Promise.resolve(0));
arr.reduce(async (prev, x) => (await prev) + x, Promise.resolve(0));
