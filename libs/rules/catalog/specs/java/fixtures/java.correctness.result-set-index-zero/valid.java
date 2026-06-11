import java.sql.ResultSet;

class ResultSetIndexZeroValid {
  String getValue(ResultSet rs) throws Exception {
    return rs.getString(1);
  }
}
