import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/out-tsc',
      // RuleSpec fixtures intentionally embed invalid patterns (debugger, constant conditions, etc.).
      '**/libs/rules/catalog/specs/**/fixtures/**',
    ],
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'type:rules',
              onlyDependOnLibsWithTags: ['type:rules'],
            },
            {
              sourceTag: 'type:example',
              onlyDependOnLibsWithTags: [
                'type:rules',
                'type:example',
              ],
            },
          ],
        },
      ],
    },
  },
];
