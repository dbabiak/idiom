class ReplsController < ApplicationController
  def create
    @code = prog_params[:content]
    @result = ''
    thr = Thread.start do
      $SAFE = 0
      @result = eval(@code)
    end
    thr.join
    render 'index'
  end

  def prog_params
    params.require(:problem_solution).permit(:content)
  end
end
