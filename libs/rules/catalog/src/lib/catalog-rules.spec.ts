import { runRuleSpec } from '@critiq/testing-harness';
import { resolve } from 'node:path';

describe('rules catalog rule specs', () => {
  const specPaths = [
    resolve(__dirname, '../../specs/ts.security.no-sql-interpolation.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.no-dynamic-execution.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.no-request-path-file-read.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.no-command-execution-with-request-input.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.no-innerhtml-assignment.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.no-hardcoded-credentials.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.implicit-undefined-return.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.missing-default-dispatch.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.unreachable-statement.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.swallowed-error.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.missing-error-context.spec.yaml'),
  ];

  it.each(specPaths)('passes %s', (specPath) => {
    const result = runRuleSpec(specPath);

    expect(result).toMatchObject({
      specPath,
      success: true,
      diagnostics: [],
    });
  });
});
