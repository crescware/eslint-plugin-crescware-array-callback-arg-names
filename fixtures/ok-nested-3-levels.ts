type Level1 = { children: { children: { id: number }[] }[] };
declare const tree: Level1[];

tree.map((root) =>
  root.children.map((child) => child.children.map((v) => v.id)),
);
