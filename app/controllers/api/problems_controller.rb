class Api::ProblemsController < ApplicationController
  def create
    @problem = Problem.new(problem_params)
    @problem.submitter_id = current_user.id
    #commented out lines are from the old associations way of doing this
    # @problem.solution_cases.new(solution_case_params)
    if @problem.save!
      # @solution_cases = @problem.solution_cases
      render :json => @problem, status: 201
    else
      render :json => @problem.errors, status: :unprocessable_entity
    end
  end

  def index
    @problems = Problem.all
    render json: @problems
  end

  def show
    @problem = Problem.find(params[:id])
    @solution_cases = @problem.solution_cases
    render 'show'  #this is a call to jbuilder I think.
  end
   

  def problem_params
    params.require(:problem).permit(:title, :description, :submitter_id)
  end

  def solution_case_params
    params.permit(solution_cases: [:content])
          .require(:solution_cases)
          .values
  end
end
