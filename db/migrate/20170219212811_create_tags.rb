class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.boolean :tag

      t.timestamps
    end
    add_index :tags, :tag, unique: true
  end
end
