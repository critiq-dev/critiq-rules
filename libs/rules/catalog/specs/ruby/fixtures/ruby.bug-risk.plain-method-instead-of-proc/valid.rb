# Correct usage: &method(:name) is the proper way
items = [1, 2, 3]
processed = items.map(&method(:to_s))
