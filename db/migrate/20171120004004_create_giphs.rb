class CreateGiphs < ActiveRecord::Migration[5.0]
  def change
    create_table :giphs do |t|

      t.timestamps
    end
  end
end
