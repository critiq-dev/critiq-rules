class EmptyCatchValid {
  void run() {
    try {
      doWork();
    } catch (Exception e) {
      logger.warn("doWork failed", e);
      throw new IllegalStateException(e);
    }
  }

  void doWork() throws Exception {
  }
}
