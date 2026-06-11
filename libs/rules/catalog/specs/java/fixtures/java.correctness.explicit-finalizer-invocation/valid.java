class ExplicitFinalizerInvocationValid {
    @Override
    protected void finalize() throws Throwable {
        super.finalize();
    }
}
