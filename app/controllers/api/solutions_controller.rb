class Api::SolutionsController < ApplicationController
  
  def create
    @solution = Solution.new(solution_params)
    @solution.submitter_id = current_user.id
    if @solution.correct? && @solution.save
      render json: @solution
    else @solution.correct?
      render json: "you suck", status: :unprocessable_entity
    end
  end

  def index
    # This will be for all of a user's solutions
    # or for all of a problem's solutions
  end

  def solution_params
    params.require(:solution)
        .permit(:problem_id, :content)
  end
end
