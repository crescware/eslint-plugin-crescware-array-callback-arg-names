const map = new Map<string, number>([
  ["a", 1],
  ["b", 2],
]);
let total = 0;
for (const [_, v] of map) {
  total += v;
}
export const sum = total;
