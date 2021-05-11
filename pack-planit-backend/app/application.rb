require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/trips/) && req.get?
      return index 
    elsif req.path.match(/trips/) && req.post?
      trip = JSON.parse(req.body.read)
      new_trip = Trip.create(trip)
      return create(new_trip)
    end 
  end

  def index
    [200, {'Content-Type' => 'application/json'}, [{trips: Trip.all}.to_json]]
  end 

  def show trip 
    [200, {'Content-Type' => 'application/json'}, [trip]]
  end 

  def create trip 
    [200, {'Content-Type' => 'application/json'}, [trip.to_json]]
  end 


end
