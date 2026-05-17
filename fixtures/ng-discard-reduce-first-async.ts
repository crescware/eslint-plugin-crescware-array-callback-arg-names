const arr = [1, 2, 3];
const last = arr.reduce(async (_, v) => v, Promise.resolve(0));
export const result = last;
