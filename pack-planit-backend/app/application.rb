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
    elsif req.path == '/packit' && req.get?
        return [200, {'Content-Type' => 'application/json'}, [{lists: PackingList.all}.to_json]]
    elsif req.path.match(/packit/) && req.get?
        id = req.path.split('/')[2]
        list = PackingList.find(id)
        return [200, {'Content-Type' => 'application/json'}, [list.to_json]]
    elsif req.path == '/packit' && req.post?
      data = JSON.parse(req.body.read)
      new_list = PackingList.create(data)
      return [201, {'Content-Type' => 'application/json'}, [list.to_json]]
    elsif req.path.match(/packit/) && req.patch?
        id = req.path.split('/')[2]
        list = PackingList.find(id)
        data = JSON.parse(req.body.read)
        list.update(data)
        return [200, {'Content-Type' => 'application/json'}, [list.to_json]]
    elsif req.path.match(/packit/) && req.delete?
        id = req.path.split('/')[2]
        list = PackingList.find(id)
        list.destroy 
        return [204, {}, ['']]
    else
      return [404, {}, ['']]
    end 

  end
end
