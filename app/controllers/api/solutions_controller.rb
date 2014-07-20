class SolutionsController < ApplicationController
  
  def create
    @solution = Solution.new(solution_params)
    if @solution.correct? && @solution.save
      render json: @solution
    else @solution.correct?
      render json: false
    end
  end

  def index
    # This will be for all of a user's solutions
    # or for all of a problem's solutions
  end

  def solution_params
    params.require(:solution)
        .permit(:submitter_id, :problem_id, :content)
  end
end
