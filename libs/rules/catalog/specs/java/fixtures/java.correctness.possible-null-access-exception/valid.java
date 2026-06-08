import java.io.*;

class PossibleNullAccessExceptionValid {
  int readFile(String path) {
    try (InputStream in = new FileInputStream(path)) {
      return in.read();
    } catch (IOException e) {
      return -1;
    }
  }
}
