type Entry = { children: { id: number }[] };
declare const entries: Entry[];

entries.map((v) => v.children.map((v) => v.id));
