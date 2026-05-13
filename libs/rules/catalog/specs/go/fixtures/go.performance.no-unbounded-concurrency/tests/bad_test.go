package p

import "testing"

func TestConcurrency(t *testing.T) {
  Promise.all(items.map(task))
}
