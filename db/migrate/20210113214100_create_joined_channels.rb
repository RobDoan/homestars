class CreateJoinedChannels < ActiveRecord::Migration[6.1]
  def change
    create_table :joined_channels do |t|
      t.integer :user_id, index: true
      t.integer :channel_id, index: true
      t.integer :status, default: 0
      t.datetime :left_at

      t.timestamps
    end
  end
end
