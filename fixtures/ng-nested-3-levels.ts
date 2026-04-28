type Level1 = { children: { children: { id: number }[] }[] };
declare const tree: Level1[];

tree.map((e) => e.children.map((c) => c.children.map((v) => v.id)));
