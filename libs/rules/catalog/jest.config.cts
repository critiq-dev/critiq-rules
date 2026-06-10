module.exports = {
  displayName: 'rules',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  transformIgnorePatterns: ['[/\\\\]critiq-core[/\\\\]dist[/\\\\]'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  testPathIgnorePatterns: [
    '<rootDir>/specs/typescript/fixtures/',
  ],
  coverageDirectory: '../../../coverage/libs/rules/catalog'
};
