import { useEffect } from 'react';

export function Profile() {
  useEffect(() => {
    void Promise.all([fetch('/api/user'), fetch('/api/posts')]);
  }, []);

  return null;
}

