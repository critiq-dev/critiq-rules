import React, { useState, useEffect } from 'react';

interface Props {
  initial: number;
  loading: boolean;
}

export function MyComponent({ initial, loading }: Props) {
  if (loading) {
    const [count, setCount] = useState(initial);
    return <div>Loading...</div>;
  }

  return <div>Loaded</div>;
}
