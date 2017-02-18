class AddAttachmentImageToBusinesses < ActiveRecord::Migration
  def self.up
    change_table :businesses do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :businesses, :image
  end
end
