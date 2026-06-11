import java.sql.PreparedStatement;

class PreparedStatementIndexZeroValid {
  void setValue(PreparedStatement ps) throws Exception {
    ps.setString(1, "value");
  }
}
