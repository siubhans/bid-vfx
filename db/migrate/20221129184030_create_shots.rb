class CreateShots < ActiveRecord::Migration[7.0]
  def change
    create_table :shots do |t|
      t.string :name
      t.text :image
      t.string :methodology
      t.string :scene
      t.string :description
      t.string :notes
      t.string :vfx_work
      t.integer :days
      t.integer :total
      t.references :bid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
