import { runRuleSpec } from '@critiq/testing-harness';

import {
  resolveStarterPackRoot,
  resolveStarterPackSpecPaths,
  starterPackPackageName,
} from './starter-pack';

describe('starterPackPackageName', () => {
  it('returns the expected package import path', () => {
    expect(starterPackPackageName()).toBe('@critiq/example-starter-pack');
  });
});

describe('starter pack', () => {
  it('exposes a stable root directory and spec list', () => {
    expect(resolveStarterPackRoot()).toContain('examples/starter-pack');
    expect(resolveStarterPackSpecPaths()).toHaveLength(5);
  });

  it('passes the full starter pack through the real harness', () => {
    const results = resolveStarterPackSpecPaths().map((specPath) => runRuleSpec(specPath));

    expect(results.every((result) => result.success)).toBe(true);
    expect(results.map((result) => result.fixtureResults.length)).toEqual([2, 2, 2, 2, 2]);
  });

  it('produces stable findings for the console log rule', () => {
    const result = runRuleSpec(resolveStarterPackSpecPaths()[0]);
    const invalidFixture = result.fixtureResults.find(
      (fixture) => fixture.name === 'console.log is flagged',
    );

    expect(invalidFixture?.emittedFindings).toMatchInlineSnapshot(`
[
  {
    "primaryLocation": {
      "column": 1,
      "line": 1,
    },
    "ruleId": "ts.logging.no-console-log",
    "severity": "low",
    "summary": "Use the project logger instead of \`console.log("hello")\`.",
    "title": "Avoid \`console.log("hello")\`",
  },
]
`);
  });

  it('produces stable findings for the debugger rule', () => {
    const result = runRuleSpec(resolveStarterPackSpecPaths()[2]);
    const invalidFixture = result.fixtureResults.find(
      (fixture) => fixture.name === 'debugger is flagged',
    );

    expect(invalidFixture?.emittedFindings).toMatchInlineSnapshot(`
[
  {
    "primaryLocation": {
      "column": 1,
      "line": 1,
    },
    "ruleId": "ts.runtime.no-debugger-statement",
    "severity": "medium",
    "summary": "Remove the debugger statement before committing the file.",
    "title": "Remove \`debugger;\`",
  },
]
`);
  });
});
