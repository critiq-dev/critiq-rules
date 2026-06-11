items.each_with_index { |x| process(x) }
items.each.with_index do |x|
  x.to_s
end
