items.each_with_object(0) { |e, a| a += e }

items.each_with_object(nil) { |e, a| a << e }

items.each_with_object(true) { |e, a| a[e.key] = e.value }

items.each_with_object(0.0) { |e, a| a += e }
