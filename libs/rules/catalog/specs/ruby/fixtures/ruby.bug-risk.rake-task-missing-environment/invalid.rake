# RB-RL1040: rake task missing :environment
namespace :data
  task :migrate do
    User.where(active: true).update_all(role: :member)
  end
end
