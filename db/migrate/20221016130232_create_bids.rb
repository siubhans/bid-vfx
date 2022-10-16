class CreateBids < ActiveRecord::Migration[7.0]
  def change
    create_table :bids do |t|
      t.string :project
      t.integer :fps
      t.string :resolution
      t.references :client, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
