class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :name
      t.text :desc
      t.date :duedate
      t.timestamps
    end
  end
end
