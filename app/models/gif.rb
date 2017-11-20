class Gif < ApplicationRecord
  def self.search(search_term, offset)
    url = "http://api.giphy.com/v1/gifs/search?q=#{ search_term}&api_key=#{ ENV["giphy_api_key"] }&offset=#{ offset }&limit=2"

    resp = Net::HTTP.get_response(URI.parse(url))
    buffer = resp.body
    
    return JSON.parse(buffer)["data"]
  end
end
