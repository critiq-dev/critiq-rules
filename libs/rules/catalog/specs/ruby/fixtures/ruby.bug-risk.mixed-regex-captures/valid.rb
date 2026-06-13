# Only named captures
/^(?<name>\w+)_(?<id>\d+)$/

# Only numbered captures
/^(\w+)_(\d+)$/

# No captures at all
/hello/

# Named captures only
pattern = /(?<key>\w+):\s+(?<value>.+)/
