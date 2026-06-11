class TwoLockWaitInvalid {
    final Object a = new Object();
    final Object b = new Object();

    void test() throws InterruptedException {
        synchronized (a) {
            synchronized (b) {
                b.wait();
            }
        }
    }
}
