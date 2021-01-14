class AddChannelIdToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :channel_id, :integer, index: true
  end
end
