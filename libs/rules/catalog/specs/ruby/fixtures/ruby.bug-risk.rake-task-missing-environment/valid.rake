# Has :environment dependency — OK
namespace :data
  task migrate: :environment do
    User.where(active: true).update_all(role: :member)
  end
end
