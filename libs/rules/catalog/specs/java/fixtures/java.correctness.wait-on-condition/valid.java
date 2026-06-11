class WaitOnConditionValid {
    void run(Object obj) throws InterruptedException {
        synchronized (obj) {
            obj.wait();
        }
    }
}
