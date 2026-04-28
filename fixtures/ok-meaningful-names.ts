declare const entries: { id: number }[];

entries.map((entry) => entry.id);
entries.map((item, itemIndex) => item.id + itemIndex);
entries.filter((entry, entryIndex) => entry.id > entryIndex);
entries.reduce(
  (accumulator, entry, entryIndex, list) =>
    accumulator + entry.id + entryIndex + list.length,
  0,
);
