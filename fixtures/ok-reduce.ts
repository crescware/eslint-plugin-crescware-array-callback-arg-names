declare const arr: number[];
declare const items: string[];

arr.reduce((acc, v, i, arr) => acc + v + i + arr.length, 0);
arr.reduceRight((acc, v, i, arr) => acc + v + i + arr.length, 0);

items.reduce(
  async (prev, v, i, arr) =>
    (await prev) + (await fetch(v)).status + i + arr.length,
  Promise.resolve(0),
);

items.reduceRight(
  async (prev, v) => (await prev) + (await fetch(v)).status,
  Promise.resolve(0),
);
