---
"@critiq/rules": minor
---

Ship 7 new Go correctness catalog rules covering nil map assignment, deferred `Close` before the matching `err` check, nil `context.Context` arguments, `time.Tick` leaks, `WaitGroup.Add` inside the launched goroutine, dropped `append` results, and `defer` statements inside loop bodies.
