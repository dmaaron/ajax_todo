class PrioritiesController < ApplicationController
	def new
		@priority = Priority.new
		@priorities = Priority.all
	end

	def create
		priority = Priority.new(params[:priority])
		priority.save!
		color = priority.color
		render json: {priority: priority, color: color} 
	end

end