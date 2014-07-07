class ReplsController < ApplicationController
  def create
    @code = prog_params[:content]
    @result = eval(@code)
    render 'index'
  end

  def prog_params
    params.require(:problem_solution).permit(:content)
  end
end
