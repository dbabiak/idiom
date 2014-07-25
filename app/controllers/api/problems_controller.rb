class Api::ProblemsController < ApplicationController
  def create
    @problem = Problem.new(problem_params)
    @problem.submitter_id = current_user.id
    if @problem.save!
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
    render :show #this is a call to jbuilder I think.
  end


  def problem_params
    params.require(:problem).permit(:title, :description, :submitter_id,
        :solution_spec, :example_spec, :rating, :category)
  end
end
