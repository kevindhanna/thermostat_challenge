require 'sinatra'

class Thermostat < Sinatra::Base
  # enable: sessions

  get '/' do
    "hello world"
    erb :index

  end

end
