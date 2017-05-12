# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# create teams

['Exploration', 'Geology', 'Reservoir', 'Drilling', 'Production', 'Operations', 'Maintenance'].each do |team|
  Team.create(title: team)
  puts 'Team Created'
end

# create Users
40.times do
  team = Team.all.sample
  User.create(first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                email: Faker::Internet.email,
                password: '123',
                password_confirmation: '123',
              )
    puts "User created!"
  end

# create Join
100.times do
  Join.create(user_id: rand(1..40),
              team_id: rand(1..7),
  )
  puts "Join created"
end

# create Tasks

teams = Team.all
teams.each do |t|
  rand(10..20).times do
    user = User.all.sample
    t.tasks.create({

      body: Faker::Friends.quote,
      user_id: user.id,
      created_at: Faker::Date.backward(14)

      })
    end
  end

# create Assigns
tasks = Task.all
tasks.each do |task|
  rand(1..5).times do
    user = User.all.sample
    task.assignees << user
  end
end

# create Messages
['FYI','Announcement','Idea','Question','Milestone'].each do |category|

10.times do
  Message.create(title: Faker::Food.ingredient,
                  description: Faker::Food.spice,
                  category: category,
                  team_id: rand(1..7),
                  user_id: rand(1..40)


  )
  puts 'Messages Created'

end
end


#create comments


messages = Message.all
messages.each do |message|
  rand(0..5).times do
    user = User.all.sample
    message.comments.create({
      content: Faker::Friends.quote,
      user_id: user.id
    })
    puts 'Comments Created'
  end
end


teams_count = Team.count
users_count = User.count
tasks_count = Task.count
messages_count = Message.count
comments_count = Comment.count


puts Cowsay.say "Created #{teams_count} Teams", :cow

puts Cowsay.say "Created #{users_count} Users", :cow

puts Cowsay.say "Created #{tasks_count} Tasks", :cow
puts Cowsay.say "Created #{comments_count} Comments", :cow
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
