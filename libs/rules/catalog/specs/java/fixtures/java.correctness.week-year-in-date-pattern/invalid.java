import java.text.SimpleDateFormat;

class WeekYearInvalid {
  String format(java.util.Date date) {
    return new SimpleDateFormat("YYYY-MM-dd").format(date);
  }
}
