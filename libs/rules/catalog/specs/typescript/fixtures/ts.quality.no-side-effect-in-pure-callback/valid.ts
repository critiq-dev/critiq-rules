class Store {
  private _items: string[] = [];
  private _count = 0;

  get activeItems(): string[] {
    return this._items.filter((item) => item.length > 0);
  }

  get processed(): number {
    return this._items.length;
  }

  increment(): void {
    this._count += 1;
  }
}
