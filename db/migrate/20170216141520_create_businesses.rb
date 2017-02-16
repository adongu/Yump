class CreateBusinesses < ActiveRecord::Migration[5.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :user_id
      t.string :url
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :phone, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false

      t.timestamps
    end

    add_index :businesses, :url, :unique => true
  end
end
