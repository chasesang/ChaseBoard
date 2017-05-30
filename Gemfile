# this file is used by the bundler gem to know which gems are needed for this
# project (the Rails project). you can install or update the gems by running
# `bundle install` or simply `bundle` in your terminal in the root of the
# project. you dont need to use `require 'rais'` or use ` require` for any
# other gem defined in this Gemfile because bundler is going to automatically
# require all the gems defined in this file ( the Gemfile)

# Once you run `bundle` or `bundle install`, bundler will automtically update
# the  `Gemfile.lock` file. The `Gemfile.lock` will `lock` the gem to a specific
# version. This is important so all developers working on the project end up
# using the same exact Ruby version for this project. You should never modify
# `Gemfile.lock` directly (unless there is Git conflict in it).

# if you have the Gem installed in your Ruby it will just be used, otherwise
#bundler will install for u.
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.3.3'
gem 'font-awesome-rails'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.2'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'
gem 'chosen-rails'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
gem 'active_model_serializers'
gem 'cowsay', '~> 0.3'
gem 'mini_magick'
gem 'activeadmin', github: 'activeadmin'
gem 'devise'
gem 'colorize', '0.8.1'
gem 'rack-cors'
gem 'faker'
gem 'friendly_id'
gem 'carrierwave'
gem 'cancancan', '~> 1.10'
gem 'simple_form'
gem 'cocoon'
gem 'aasm'
gem 'geocoder'
gem 'bootstrap-sass'
gem 'gmaps4rails'
gem 'underscore-rails'
gem 'chosen-rails'
gem 'delayed_job_active_record'
gem 'sinatra', '2.0.0.rc2'
gem 'delayed_job_web'
gem 'fog'
gem "simple_calendar", "~> 2.0"
gem 'jquery-ui-rails'
gem 'gmaps4rails'
gem 'geocoder'

gem 'fullcalendar-rails'
gem 'momentjs-rails'
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem "letter_opener"
  gem 'interactive_editor'
  gem 'awesome_print'
  gem 'rails-erd'
  gem 'hirb'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'pry'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
