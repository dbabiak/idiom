class SolutionsController < ApplicationController
  
  def create
    @solution = Solution.new(solution_params)
    if @solution.correct? && @solution.save
      flash[:status] = "Hooray!"
      redirect_to problem_url(@solution.problem_id)
    elsif @solution.correct?
      flash.now[:errors] = @solution.error.full_messages
      redirect_to problem_url(@solution.problem_id)
    else
      flash[:status] = "You messed up"
      redirect_to problem_url(@solution.problem_id)
    end
  end
  
  def edit
  end

  def index
  end

  def new
  end

  def show
  end
  
  def solution_params
    params.require(:solution)
        .permit(:submitter_id, :problem_id, :content)
  end
end
