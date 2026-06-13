# RB-LI1086: duplicate elsif condition
if a
  foo
elsif b
  bar
elsif b
  baz
end

# Another duplicate elsif
if x > 0
  handle_positive
elsif x == 0
  handle_zero
elsif x == 0
  handle_zero_again
else
  handle_negative
end
