Rails.application.configure do
  config.consider_all_requests_local = false
  config.action_dispatch.show_exceptions = :rescuable
end
