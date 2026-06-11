require 'json'

data = { name: "test" }
serialized = data.to_json(state)

json = JSON.generate(data)
