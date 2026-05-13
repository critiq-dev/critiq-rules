package p

import (
  "regexp"
  "testing"
)

func TestRegexLoop(t *testing.T) {
  values := []string{"a","b"}
  for _, value := range values {
    _, _ = regexp.Compile(value)
  }
}
