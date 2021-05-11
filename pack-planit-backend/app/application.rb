require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path == '/trips' && req.get?
        return [200, {'Content-Type' => 'application/json'}, [{trips: Trip.all}.to_json]]
    elsif req.path.match(/trips/) && req.get?
        id = req.path.split('/')[2]
        trip = Trip.find(id)
        return [200, {'Content-Type' => 'application/json'}, [trip.to_json]]
    elsif req.path == '/trips' && req.post?
      data = JSON.parse(req.body.read)
      new_trip = Trip.create(data)
      return [201, {'Content-Type' => 'application/json'}, [trip.to_json]]
    elsif req.path.match(/trips/) && req.patch?
        id = req.path.split('/')[2]
        trip = Trip.find(id)
        data = JSON.parse(req.body.read)
        trip.update(data)
        return [200, {'Content-Type' => 'application/json'}, [trip.to_json]]
    elsif req.path.match(/trips/) && req.delete?
        id = req.path.split('/')[2]
        trip = Trip.find(id)
        trip.destroy 
        return [204, {}, ['']]
    else
      return [404, {}, ['']]
    end 

    # if req.path == '/packing_lists' && req.get?
    #     return [200, {'Content-Type' => 'application/json'}, [{packing_lists: PackingList.all}.to_json]]
    # elsif req.path.match(/packing_lists/) && req.get?
    #     id = req.path.split('/')[2]
    #     trip = Trip.find(id)
    #     return [200, {'Content-Type' => 'application/json'}, [trip.to_json]]
    # elsif req.path == '/trips' && req.post?
    #   data = JSON.parse(req.body.read)
    #   new_trip = Trip.create(data)
    #   return [201, {'Content-Type' => 'application/json'}, [trip.to_json]]
    # elsif req.path.match(/trips/) && req.patch?
    #     id = req.path.split('/')[2]
    #     trip = Trip.find(id)
    #     data = JSON.parse(req.body.read)
    #     trip.update(data)
    #     return [200, {'Content-Type' => 'application/json'}, [trip.to_json]]
    # elsif req.path.match(/trips/) && req.delete?
    #     id = req.path.split('/')[2]
    #     trip = Trip.find(id)
    #     trip.destroy 
    #     return [204, {}, ['']]
    # else
    #   return [404, {}, ['']]
    # end 

  end
end
