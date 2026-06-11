class ExplicitFinalizerInvocationInvalid {
    void clean(Object obj) throws Throwable {
        obj.finalize();
    }
}
