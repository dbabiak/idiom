class Api::SolutionsController < ApplicationController

  def create
    @solution = Solution.new(solution_params)
    @solution.submitter_id = current_user.id
    sleep 1
    if @solution.correct? && @solution.save
      render json: @solution
    else @solution.correct?
      render json: {error: "stuff went wrong"}, status: 403
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
