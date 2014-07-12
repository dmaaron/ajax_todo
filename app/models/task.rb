class Task < ActiveRecord::Base
  attr_accessible :name, :desc, :duedate, :priority_id
  belongs_to :priority

  def tick_up
 		urgency_index = self.priority.urgency_index
 		greater_urgencies = Priority.where("urgency_index < #{urgency_index}").sort{|x, y| y.urgency_index <=> x.urgency_index}
 		if greater_urgencies.any? 
 			self.priority_id = greater_urgencies.first.id
 			self.save
 		else
 			self.priority_id
 		end
 		self
 		end

 		def tick_down
 		urgency_index = self.priority.urgency_index
 		greater_urgencies = Priority.where("urgency_index > #{urgency_index}").sort{|x, y| x.urgency_index <=> y.urgency_index}
 		if greater_urgencies.any? 
 			self.priority_id = greater_urgencies.first.id
 			self.save
 		else
 			self.priority_id
 		end
 		self
 	end

end