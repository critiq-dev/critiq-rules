import java.sql.ResultSet;

class ResultSetIndexZeroInvalid {
  String getValue(ResultSet rs) throws Exception {
    return rs.getString(0);
  }
}
