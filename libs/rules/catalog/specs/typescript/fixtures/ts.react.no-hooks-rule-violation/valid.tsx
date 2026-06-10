import React, { useState, useEffect } from 'react';

interface Props {
  name: string;
}

export function MyComponent({ name }: Props) {
  const [greeting, setGreeting] = useState(`Hello, ${name}!`);

  useEffect(() => {
    document.title = greeting;
  }, [greeting]);

  return <div>{greeting}</div>;
}

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'Default';
    };
  }, [title]);
}
