class AddUserNameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :user_name, :string,  unique: true
  end
end
