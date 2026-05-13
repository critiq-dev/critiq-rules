import { createFactory } from 'react';

export function LegacyPanel() {
  const buildSection = createFactory('section');
  return buildSection({ className: 'panel' }, 'Content');
}
