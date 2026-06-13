def process
  # Ambiguous: could be regex or division
  items.grep /\d+/

  # With regex flags
  text.match /hello/i
end
