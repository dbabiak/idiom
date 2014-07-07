class ProblemsController < ApplicationController
  def create
    @problem = Problem.new(problem_params)
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
    params.require(:problem).permit(:title, :description, :test_cases, :solution_cases,
          :submitter_id)
  end
end
