import { runRuleSpec, formatRuleSpecRunForTerminal } from '@critiq/testing-harness';

describe('debug spec', () => {
  it('debug mistyped-suffix', () => {
    const specPath = '/Users/aavanzyl/Documents/Critiq/critiq-rules/libs/rules/catalog/specs/rust/rust.correctness.mistyped-suffix.spec.yaml';

    const result = runRuleSpec(specPath);

    for (const fr of result.fixtureResults) {
      console.log(`Fixture: ${fr.name}`);
      console.log(`  Source kind: ${fr.sourceKind}`);
      console.log(`  Fixture path: ${fr.fixturePath}`);
      console.log(`  Success: ${fr.success}`);
      console.log(`  Match count: ${fr.matches.length}`);
      console.log(`  Finding count: ${fr.emittedFindings.length}`);
      console.log(`  Assertion failures: ${JSON.stringify(fr.assertionFailures)}`);
      console.log(`  Build issues: ${JSON.stringify(fr.buildIssues)}`);
      console.log(`  Diagnostics: ${JSON.stringify(fr.diagnostics)}`);
    }

    console.log(`\nFull result: ${JSON.stringify(result, null, 2)}`);
    expect(result.success).toBe(true);
  });
});
