# Uses Time.zone — OK
class ReportGenerator
  def generate
    { generated_on: Time.zone.today, data: fetch_data }
  end
end
