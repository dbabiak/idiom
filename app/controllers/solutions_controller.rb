class SolutionsController < ApplicationController
  
  def create
    @solution = Solution.new(solution_params)
    unless @solution.correct?
      @fail_message = 'WRONG - try again'
      render 'problem#show'
    end

    if @solution.save
      redirect_to problem_url(@solution.problem_id)
    else
      flash.now[:errors] = @solution.error.full_messages
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
