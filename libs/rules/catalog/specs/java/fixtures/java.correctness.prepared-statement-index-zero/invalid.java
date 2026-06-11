import java.sql.PreparedStatement;

class PreparedStatementIndexZeroInvalid {
  void setValue(PreparedStatement ps) throws Exception {
    ps.setString(0, "value");
  }
}
