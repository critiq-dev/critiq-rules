def classify(value)
  case value
  when 1 then # nop
  when 2 then 20
  else 0
  end
end

def route(path)
  case path
  when '/home'
  when '/about'
    'About page'
  else
    'Not found'
  end
end
