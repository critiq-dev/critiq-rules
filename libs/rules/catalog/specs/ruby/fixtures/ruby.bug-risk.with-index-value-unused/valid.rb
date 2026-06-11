items.each_with_index { |x, i| x * i }
items.each.with_index do |x, idx|
  "#{idx}: #{x}"
end
