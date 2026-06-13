class Analyzer
  def check_prefix(text)
    text.start_with?('prefix_')
  end

  def add_item(list, item)
    list << item
  end
end
