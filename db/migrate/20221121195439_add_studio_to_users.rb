class AddStudioToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :studio, :string
  end
end
