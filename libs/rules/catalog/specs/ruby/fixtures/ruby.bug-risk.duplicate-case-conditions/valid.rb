def process_status(status)
  case status
  when 'active'
    :running
  when 'paused'
    :suspended
  when 'inactive'
    :stopped
  else
    :unknown
  end
end

def classify(value)
  case value
  when 'a', 'b', 'c'
    :unique
  end
end
