class SolutionLikesController < ApplicationController
  def create
    @solution_like = SolutionLike.new(solution_like_params)
    @solution_like.save if SolutionLike.find_by(solution_like_params).nil?
    redirect_to problem_url(@solution_like.solution.problem)
  end
  
  def solution_like_params
    params.require(:solution_like).permit(:user_id, :solution_id)
  end
end