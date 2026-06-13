# RB-RL1058: enumerable index-by pattern
users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
by_id = users.map { |u| [u.id, u] }.to_h
