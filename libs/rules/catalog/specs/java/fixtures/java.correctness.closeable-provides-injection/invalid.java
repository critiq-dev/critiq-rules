class Module {
  @Provides
  FileOutputStream provideStream() {
    return new FileOutputStream("out");
  }
}
