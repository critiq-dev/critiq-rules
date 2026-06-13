# Correct: using index_with
users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
by_id = users.index_with { |u| u[:name] }
