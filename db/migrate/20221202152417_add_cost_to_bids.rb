class AddCostToBids < ActiveRecord::Migration[7.0]
  def change
    add_column :bids, :cost, :integer
  end
end
