class CreatePackingLists < ActiveRecord::Migration[5.2]
  def change
    create_table :packing_lists do |t|
      t.string :name
      t.string :list
      t.references :trip 
    end
  end
end
