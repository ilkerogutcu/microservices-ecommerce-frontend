function replaceAtIndex<Item>(
  items: Item[],
  index: number,
  newItem: Item
): Item[] {
  const newItems = [...items];

  newItems.splice(index, 1, newItem);

  return newItems;
}
export { replaceAtIndex };
