items.each_with_object([]) { |x| x.to_s }
items.each.with_object({}) do |x|
  x.to_s
end
