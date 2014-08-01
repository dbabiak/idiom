class Api::SolutionsController < ApplicationController

  def create
    @solution = Solution.new(solution_params)
    @solution.submitter_id = current_user.id
    #give sort of latency
    result = @solution.check
    if result[:success] && @solution.save
      render json: @solution
    else
      render json: result, status: 402
    end
  end

  def index
    # This will be for all of a user's solutions
    # or for all of a problem's solutions
    @problem = Problem.find(params[:problem_id])
    if @problem
      @solutions = @problem.solutions
      render 'index'
    else
      render ['we got nothing'], status: 404
    end
  end

  def solution_params
    params.require(:solution)
        .permit(:problem_id, :content)
  end
end
