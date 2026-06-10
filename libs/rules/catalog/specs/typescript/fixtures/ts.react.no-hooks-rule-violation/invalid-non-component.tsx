import React, { useState } from 'react';

function formatData(data: string) {
  const [formatted, setFormatted] = useState(data);
  return formatted.toUpperCase();
}

export function MyComponent() {
  return <div>Hello</div>;
}
