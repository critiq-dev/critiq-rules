# RB-RL1039: use present? to simplify conditional
class QueryBuilder
  def search(term)
    if term != nil && !term.empty?
      execute(term)
    end
  end

  def execute(term); end
end
