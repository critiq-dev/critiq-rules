# Correct: using index_by
users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
by_id = users.index_by { |u| u[:id] }
