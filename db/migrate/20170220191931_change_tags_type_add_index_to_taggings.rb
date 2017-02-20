class ChangeTagsTypeAddIndexToTaggings < ActiveRecord::Migration[5.0]
  def change
    change_column(:tags, :tag, :string, limit: 20, null: false)

    add_index :taggings, :business_id
    add_index :taggings, :tag_id
    add_index :taggings, [:business_id, :tag_id], unique: true
  end
end
