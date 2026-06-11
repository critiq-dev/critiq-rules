class BadExpensiveOnUi {
  @WorkerThread
  void fetchData() {
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      Thread.currentThread().interrupt();
    }
  }

  @MainThread
  void onButtonClick() {
    fetchData();
  }
}
