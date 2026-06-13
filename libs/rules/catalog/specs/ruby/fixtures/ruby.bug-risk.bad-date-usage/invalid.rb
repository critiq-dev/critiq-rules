# RB-RL1014: bad date usage
class ReportGenerator
  def generate
    { generated_on: Date.today, data: fetch_data }
  end
end
