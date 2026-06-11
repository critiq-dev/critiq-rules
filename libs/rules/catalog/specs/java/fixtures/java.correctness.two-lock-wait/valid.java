class TwoLockWaitValid {
    final Object a = new Object();

    void test() throws InterruptedException {
        synchronized (a) {
            a.wait();
        }
    }
}
