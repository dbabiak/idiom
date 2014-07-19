class ProblemsController < ApplicationController
  def create
    @problem = Problem.new(problem_params)
    @problem.solution_cases.new(solution_case_params)
    if @problem.save!
      redirect_to problem_url(@problem)
    else
      flash.now[:errors] = @problem.errors.full_messages
    end
  end

  def edit
  end

  def index
    @problems = Problem.all
  end

  def new
  end

  def show
    @problem = Problem.find(params[:id])
  end
   

  def problem_params
    params.require(:problem).permit(:title, :description, :submitter_id)
  end

  def solution_case_params
    params.permit(solution_cases: [:content])
          .require(:solution_cases)
          .values
  end

  # def solution_case_params
  #   params.require(:solution_case).permit(:content).values
  # end
end
