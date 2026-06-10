class Store {
  private _items: string[] = [];
  private _count = 0;

  get activeItems(): string[] {
    this._count += 1;
    return this._items.filter((item) => item.length > 0);
  }

  get processed(): number {
    this._items.push('processed');
    return this._items.length;
  }
}
