import java.io.*;

class PossibleNullAccessExceptionInvalid {
  int readFile(String path) {
    InputStream in = null;
    try {
      in = new FileInputStream(path);
      return in.read();
    } catch (IOException e) {
      return in.available();
    }
  }
}
