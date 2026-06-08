import java.sql.Connection;
import java.sql.PreparedStatement;

class PreparedStatementInLoopInvalid {
  void insertBatch(Connection conn, String[] values) throws Exception {
    for (String value : values) {
      PreparedStatement ps = conn.prepareStatement("INSERT INTO t (c) VALUES (?)");
      ps.setString(1, value);
      ps.executeUpdate();
      ps.close();
    }
  }
}
