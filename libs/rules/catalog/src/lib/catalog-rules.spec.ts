import { runRuleSpec } from '@critiq/testing-harness';
import { resolve } from 'node:path';

describe('rules catalog rule specs', () => {
  const specPaths = [
    resolve(__dirname, '../../specs/ts.logging.no-console-log.spec.yaml'),
    resolve(__dirname, '../../specs/ts.logging.no-console-error.spec.yaml'),
    resolve(__dirname, '../../specs/ts.runtime.no-debugger-statement.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.config.no-process-env-outside-config.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.random.no-math-random-in-core.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.no-sql-interpolation.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.no-dynamic-execution.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.no-request-path-file-read.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.no-command-execution-with-request-input.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.no-innerhtml-assignment.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.no-hardcoded-credentials.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.constant-condition.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.missing-await-on-async-call.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.implicit-undefined-return.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.unhandled-async-error.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.incorrect-boolean-logic.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.blocking-call-in-async-flow.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.missing-default-dispatch.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.correctness.missing-timeout-on-external-call.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.correctness.possible-null-dereference.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.correctness.nested-property-access-without-check.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.correctness.unchecked-map-key-access.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.correctness.optional-value-without-fallback.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.correctness.off-by-one-loop-boundary.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.shared-state-race.spec.yaml'),
    resolve(__dirname, '../../specs/ts.correctness.unreachable-statement.spec.yaml'),
    resolve(__dirname, '../../specs/ts.performance.sequential-async-calls.spec.yaml'),
    resolve(__dirname, '../../specs/ts.performance.repeated-expensive-computation.spec.yaml'),
    resolve(__dirname, '../../specs/ts.performance.inefficient-data-structure-usage.spec.yaml'),
    resolve(__dirname, '../../specs/ts.performance.nested-loops-hot-path.spec.yaml'),
    resolve(__dirname, '../../specs/ts.performance.large-payload-without-streaming.spec.yaml'),
    resolve(__dirname, '../../specs/ts.performance.unbounded-growth-memory-leak.spec.yaml'),
    resolve(__dirname, '../../specs/ts.performance.retained-large-object.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.performance.unnecessary-rerenders-from-state-misuse.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.quality.function-too-large-or-complex.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.duplicate-code-block.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.deep-nesting.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.hardcoded-configuration-values.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.magic-numbers-or-strings.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.swallowed-error.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.missing-error-context.spec.yaml'),
    resolve(__dirname, '../../specs/ts.quality.tight-module-coupling.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.quality.missing-tests-for-critical-logic.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.quality.logic-change-without-test-updates.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.performance.repeated-io-in-loop.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.performance.missing-batch-operations.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.security.missing-authorization-before-sensitive-action.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.security.missing-ownership-validation.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.security.frontend-only-authorization.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.token-or-session-not-validated.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.insecure-auth-cookie-flags.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.jwt-sensitive-claims.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.browser-token-storage.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.tls-verification-disabled.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.insecure-http-transport.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.open-redirect.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.sensitive-data-egress.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.no-sensitive-data-in-logs-and-telemetry.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.ssrf.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.weak-hash-algorithm.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.weak-cipher-or-mode.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.predictable-token-generation.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.unvalidated-external-input.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.unsafe-deserialization.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.missing-request-timeout-or-retry.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.datadog-browser-track-user-interactions.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.dynamodb-query-injection.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.hardcoded-auth-secret.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.import-using-user-input.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.insecure-allow-origin.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.express-insecure-cookie.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.express-cookie-missing-http-only.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.security.insecure-password-hash-configuration.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.security.insecure-websocket-transport.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.jwt-not-revoked.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.manual-html-sanitization.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.missing-message-origin-check.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.express-nosql-injection.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.observable-timing-discrepancy.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.permissive-file-permissions.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.postmessage-wildcard-origin.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.raw-html-using-user-input.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.sensitive-data-in-exception.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.sensitive-data-written-to-file.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.ui-redress.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.format-string-using-user-input.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.user-controlled-sendfile.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.user-controlled-view-render.spec.yaml'),
    resolve(__dirname, '../../specs/ts.security.exposed-directory-listing.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.express-default-session-config.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.security.express-default-cookie-config.spec.yaml',
    ),
    resolve(
      __dirname,
      '../../specs/ts.security.express-static-assets-after-session.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.express-missing-helmet.spec.yaml'),
    resolve(
      __dirname,
      '../../specs/ts.security.express-reduce-fingerprint.spec.yaml',
    ),
    resolve(__dirname, '../../specs/ts.security.unsanitized-http-response.spec.yaml'),
    resolve(__dirname, '../../specs/ts.react.no-cascaded-effect-fetches.spec.yaml'),
    resolve(__dirname, '../../specs/ts.next.no-server-client-boundary-leaks.spec.yaml'),
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
