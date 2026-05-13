import { createRoot } from 'react-dom/client';

export function mountModern() {
  createRoot(document.getElementById('app')!).render(null);
}
