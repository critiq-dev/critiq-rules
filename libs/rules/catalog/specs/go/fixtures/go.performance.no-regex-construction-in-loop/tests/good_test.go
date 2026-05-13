package p

import "testing"

func TestNoRegexLoop(t *testing.T) {
  values := []string{"a","b"}
  for _, value := range values {
    _ = value
  }
}
