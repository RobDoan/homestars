class CreateChannels < ActiveRecord::Migration[6.1]
  def change
    create_table :channels do |t|
      t.string :name
      t.integer :creator_id, index: true
      t.timestamps
    end
  end
end
