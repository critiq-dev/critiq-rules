def process
  # Ambiguous: could be foo(+bar) or foo() + bar
  foo +bar

  # Ambiguous: could be foo(-bar) or foo() - bar
  foo -bar

  # Ambiguous: negation operator
  foo !active
end
