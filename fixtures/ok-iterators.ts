declare const arr: number[];

arr.map((v, i, arr) => v + i + arr.length);
arr.filter((v, i, arr) => v + i + arr.length > 0);
arr.forEach((v, i, arr) => {
  void v;
  void i;
  void arr;
});
arr.find((v, i, arr) => v + i + arr.length > 0);
arr.findIndex((v, i, arr) => v + i + arr.length > 0);
arr.findLast((v, i, arr) => v + i + arr.length > 0);
arr.findLastIndex((v, i, arr) => v + i + arr.length > 0);
arr.some((v, i, arr) => v + i + arr.length > 0);
arr.every((v, i, arr) => v + i + arr.length > 0);
arr.flatMap((v, i, arr) => [v + i + arr.length]);
