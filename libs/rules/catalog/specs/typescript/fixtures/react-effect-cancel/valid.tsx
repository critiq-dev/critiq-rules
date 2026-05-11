import { useEffect, useState } from 'react';

declare type User = { id: string };

export function UserCard({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/users/${userId}`, { signal: controller.signal })
      .then((res) => res.json())
      .then(setUser);

    return () => controller.abort();
  }, [userId]);

  return null;
}
