class Api::SolutionCasesController < ApplicationController
  def create
    @solution_case = SolutionCase.new(solution_case_params)
    if SolutionCase.find_by(solution_case_params).nil? && @solution_case.save
      render json: @solution_case
    else
      render json: @solution_case.errors, status: :unprocessable_entity
    end
  end
  
  def index
    @solution_cases = SolutionCase.where(problem_id: params[:problem_id])
    render 'index'
  end
  
  def solution_case_params
    params.require(:solution_case).permit(:user_id, :solution_id)
  end
end
