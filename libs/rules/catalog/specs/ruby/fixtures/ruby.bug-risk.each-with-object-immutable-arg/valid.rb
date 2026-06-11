items.each_with_object([]) { |e, a| a << e }

items.each_with_object({}) { |e, a| a[e.key] = e.value }

items.each_with_object(counter) { |e, a| a.increment }

items.each_with_object("") { |e, a| a << e.to_s }
