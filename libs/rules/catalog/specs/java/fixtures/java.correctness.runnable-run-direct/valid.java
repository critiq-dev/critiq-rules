class RunnableRunDirectValid {
    void test() {
        Runnable r = () -> {};
        Thread t = new Thread(r);
        t.start();
    }
}
