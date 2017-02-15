class ChangeZipTypeinUsers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :zip, :string
  end
end
