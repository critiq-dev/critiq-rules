def process_status(status)
  case status
  when 'active'
    :running
  when 'paused'
    :suspended
  when 'active'
    :duplicate
  else
    :unknown
  end
end

def classify(value)
  case value
  when 'a', 'b', 'a'
    :duplicate_in_when
  end
end
