class CreateGifs < ActiveRecord::Migration[5.0]
  def change
    create_table :gifs do |t|

      t.timestamps
    end
  end
end
