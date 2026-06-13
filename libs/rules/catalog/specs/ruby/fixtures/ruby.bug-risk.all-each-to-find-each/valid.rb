# Correct: find_each
User.all.find_each { |u| u.send_email }
User.where(active: true).find_each { |u| u.send_email }
