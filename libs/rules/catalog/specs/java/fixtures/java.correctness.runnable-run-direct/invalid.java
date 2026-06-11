class RunnableRunDirectInvalid {
    void test() {
        Runnable r = () -> {};
        Thread t = new Thread(r);
        t.run();
    }
}
