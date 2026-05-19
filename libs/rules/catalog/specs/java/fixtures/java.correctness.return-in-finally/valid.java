import java.io.Closeable;

class ReturnInFinallyValid {
  int run(Closeable resource) {
    try {
      return doWork();
    } finally {
      closeQuietly(resource);
    }
  }

  int doWork() {
    return 0;
  }

  void closeQuietly(Closeable resource) {
  }
}
