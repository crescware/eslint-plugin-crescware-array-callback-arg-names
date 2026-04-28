declare const records: { id: number; name: string }[];
declare const arr: number[];

records.map(({ id }) => id);
records.map(({ id, name }, i) => `${id}-${name}-${i}`);

arr.map((...rest) => rest.length);

arr.map((v = 0, i = 0) => v + i);

arr.map(() => 1);
