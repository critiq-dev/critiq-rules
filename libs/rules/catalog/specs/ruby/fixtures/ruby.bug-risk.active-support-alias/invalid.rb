class Analyzer
  def check_prefix(text)
    text.starts_with?('prefix_')
  end

  def add_item(list, item)
    list.append(item)
  end
end
