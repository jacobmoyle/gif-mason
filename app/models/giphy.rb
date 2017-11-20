class Giphy < ApplicationRecord
  def self.search(phrase)
    url = "http://api.giphy.com/v1/gifs/search?q=#{phrase}&api_key=#{ ENV["giphy_api_key"] }&limit=5"
    resp = Net::HTTP.get_response(URI.parse(url))
    buffer = resp.body
    
    return JSON.parse(buffer)["data"]
  end
end
