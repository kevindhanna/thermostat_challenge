require 'sinatra'

class Thermostat < Sinatra::Base

  get '/' do
    "hello world"
    erb :index

  end

end
