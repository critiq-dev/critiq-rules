import { useEffect } from 'react';

export function Profile() {
  useEffect(() => {
    const load = async () => {
      const user = await fetch('/api/user');
      const posts = await fetch(`/api/posts?user=${user.id}`);
      return { user, posts };
    };

    void load();
  }, []);

  return null;
}

