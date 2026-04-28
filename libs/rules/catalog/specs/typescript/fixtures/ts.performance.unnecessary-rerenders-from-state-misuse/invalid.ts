declare function useState<T>(value: T): [T, (next: T) => void];

export function Counter() {
  const [count, setCount] = useState(0);
  setCount(count + 1);
  return count;
}
