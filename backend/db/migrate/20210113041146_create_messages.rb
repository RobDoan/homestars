class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :content
      t.integer :status
      t.integer :sender_id, index: true, default: 0
      t.timestamps
    end
  end
end
