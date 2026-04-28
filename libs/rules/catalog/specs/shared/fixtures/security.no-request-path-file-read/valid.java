class Filesystem {
  void load() throws Exception {
    Files.readString("/srv/reports/summary.txt");
  }
}
