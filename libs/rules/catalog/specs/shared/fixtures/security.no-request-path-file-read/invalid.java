class Filesystem {
  void load(HttpServletRequest request) throws Exception {
    String reportName = request.getParameter("report");
    Files.readString(reportName);
  }
}
