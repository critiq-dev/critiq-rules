def process
  # Ambiguous: block with params after method argument
  items.map select { |x| x.active? }

  # Ambiguous: do..end block with params after method argument
  users.filter active do |u|
    u.name
  end
end
