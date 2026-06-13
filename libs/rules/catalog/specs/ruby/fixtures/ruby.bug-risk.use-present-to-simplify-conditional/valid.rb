# Uses .present? — OK
class QueryBuilder
  def search(term)
    if term.present?
      execute(term)
    end
  end

  def execute(term); end
end
