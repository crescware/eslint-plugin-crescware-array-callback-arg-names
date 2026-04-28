declare const arr: number[];

arr.reduceRight((x, v) => x + v, 0);
arr.reduceRight(async (x, v) => (await x) + v, Promise.resolve(0));
