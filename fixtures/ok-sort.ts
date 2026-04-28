declare const arr: number[];
declare const records: { score: number }[];

arr.sort((a, b) => a - b);
records.sort((left, right) => left.score - right.score);
