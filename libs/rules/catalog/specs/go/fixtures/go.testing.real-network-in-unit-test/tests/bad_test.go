package p

import (
	"net/http"
	"testing"
)

func TestX(t *testing.T) {
	_, _ = http.Get("http://example.com")
}
