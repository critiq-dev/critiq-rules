class RunfinalizersOnExitInvalid {
    void shutdown() {
        Runtime.getRuntime().runFinalizersOnExit(true);
    }
}
