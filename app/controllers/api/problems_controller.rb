class Api::ProblemsController < ApplicationController
  def create
    @problem = Problem.new(problem_params)
    @problem.solution_cases.new(solution_case_params)
    if @problem.save!
      @solution_cases = @problem.solution_cases
      render 'show'
    else
      render :json => @problem.errors, status: :unprocessable_entity
    end
  end

  def index
    @problems = Problem.all
    render 'index'
    #wtf? don't we have to do something with json?
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
