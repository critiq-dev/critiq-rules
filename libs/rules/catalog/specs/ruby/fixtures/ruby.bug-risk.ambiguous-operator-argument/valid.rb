def process
  # Binary operators (not ambiguous)
  x = a + b
  y = total - 1
  enabled = !disabled

  # Parenthesized method call (not ambiguous)
  foo(+bar)

  # Assignment target
  result = foo - bar
end
