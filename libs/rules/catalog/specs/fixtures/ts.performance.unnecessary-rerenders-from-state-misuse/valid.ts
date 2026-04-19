declare function useState<T>(value: T): [T, (next: T) => void];

export function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return { count, handleClick };
}
