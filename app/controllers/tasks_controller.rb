class TasksController < ApplicationController

  before_filter :ordered_tasks

  def new
    @task = Task.new
    @priorities = Priority.all
  end

  def create
    task = Task.new(params[:task]);
    task.save!
    respond_to do |format|
      format.js
    end
  end


  def index
    @tasks = Task.all
  end

  def increase_urgency
    task = Task.find(params[:id])
    task.tick_up
    respond_to do |format|
      format.js
    end
  end

  def decrease_urgency
    task = Task.find(params[:id])
    task.tick_down
    respond_to do |format|
      format.js
    end
  end

  def update
    task = Task.find(params[:id])
    if task.update_attributes(params[:task])
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.js { render status: 500, text: 'Server error' }
      end
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    respond_to do |format|
      format.js
    end
  end

  private
    def ordered_tasks
      @tasks = Task.joins(:priority).order('priorities.urgency_index ASC, name ASC' )
    end

end
