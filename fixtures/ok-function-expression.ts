declare const arr: number[];

arr.map(function (v, i) {
  return v + i;
});

arr.reduce(function (acc, v) {
  return acc + v;
}, 0);

arr.sort(function (a, b) {
  return a - b;
});
