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
20.times do
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
  Join.create(user_id: rand(5..20),
              team_id: rand(1..7),
  )
  puts "Join created"
end

# create Tasks

teams = Team.all
teams.each do |t|
  rand(5..20).times do
    t.tasks.create({

      body: Faker::Friends.quote,
      })
    end
  end



teams_count = Team.count
users_count = User.count
tasks_count = Task.count
puts Cowsay.say "Created #{teams_count} Teams", :cow

puts Cowsay.say "Created #{users_count} Users", :cow
