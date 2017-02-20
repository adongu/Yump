class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.text :review, null: false
      t.integer :rating, null: false
      t.attachment :image

      t.timestamps
    end
  end
end
