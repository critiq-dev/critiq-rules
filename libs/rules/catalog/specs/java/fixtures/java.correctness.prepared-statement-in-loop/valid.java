import java.sql.Connection;
import java.sql.PreparedStatement;

class PreparedStatementInLoopValid {
  void insertBatch(Connection conn, String[] values) throws Exception {
    PreparedStatement ps = conn.prepareStatement("INSERT INTO t (c) VALUES (?)");
    for (String value : values) {
      ps.setString(1, value);
      ps.executeUpdate();
    }
    ps.close();
  }
}
