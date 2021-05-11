class CreateTripsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :location
      t.string :image 
      t.date :start_date
      t.date :end_date
      t.string :category
      t.integer :miles
      t.string :difficulty
      t.integer :rating
      t.string :notes 
    end 
  end
end