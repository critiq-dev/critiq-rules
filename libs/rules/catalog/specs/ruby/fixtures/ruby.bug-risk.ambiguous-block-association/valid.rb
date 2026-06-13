def process
  # Unambiguous: parentheses clarify block binding
  items.map(select) { |x| x.active? }

  # Unambiguous: block without preceding argument
  items.map { |x| x.active? }

  # Unambiguous: no block params
  items.map(&:active?)
end
