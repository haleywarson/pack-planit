class CreateTripsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :location
      t.date :start_date
      t.date :end_date
      t.string :category
      t.integer :length
      t.string :difficulty
      t.integer :rating
    end 
  end
end