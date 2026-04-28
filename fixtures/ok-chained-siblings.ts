declare const arr: number[];

arr
  .map((v) => v + 1)
  .filter((v) => v > 0)
  .forEach((v) => {
    void v;
  });
