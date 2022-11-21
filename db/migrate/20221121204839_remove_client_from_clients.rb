class RemoveClientFromClients < ActiveRecord::Migration[7.0]
  def change
    remove_column :clients, :client, :string
  end
end
