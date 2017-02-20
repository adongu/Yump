class AddPriceToBusinesses < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :price, :string
    change_column(:businesses, :price, :string, null: false)
  end
end
