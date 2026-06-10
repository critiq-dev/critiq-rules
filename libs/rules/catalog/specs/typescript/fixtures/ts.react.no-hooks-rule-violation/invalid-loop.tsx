import React, { useState, useEffect } from 'react';

interface Props {
  items: string[];
}

export function MyList({ items }: Props) {
  for (let i = 0; i < items.length; i++) {
    useEffect(() => {
      console.log(items[i]);
    }, [items[i]]);
  }

  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
