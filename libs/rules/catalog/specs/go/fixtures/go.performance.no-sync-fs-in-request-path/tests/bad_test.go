package p

import (
  "os"
  "testing"
)

func TestSyncFs(t *testing.T) {
  req := struct{ path string }{path: "a.txt"}
  _, _ = os.ReadFile(req.path)
}
