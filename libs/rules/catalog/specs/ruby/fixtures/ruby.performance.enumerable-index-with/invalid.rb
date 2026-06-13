# RB-RL1059: enumerable index-with pattern
users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
by_id = users.map { |u| [u, u.name] }.to_h
