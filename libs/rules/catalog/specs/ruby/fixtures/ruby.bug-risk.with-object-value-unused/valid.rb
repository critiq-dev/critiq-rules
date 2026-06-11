items.each_with_object([]) { |x, acc| acc << x }
items.each.with_object({}) do |x, memo|
  memo[x.id] = x.name
end
