begin
  fail
rescue nil
end

begin
  fail
rescue "oops"
end

begin
  fail
rescue 42
end
