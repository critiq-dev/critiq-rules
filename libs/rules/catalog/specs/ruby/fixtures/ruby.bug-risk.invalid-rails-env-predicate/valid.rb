# Correct: using valid env predicate
if Rails.env.production?
  puts "Running in production"
end
