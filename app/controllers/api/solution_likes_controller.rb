class SolutionLikesController < ApplicationController
  def create
    @solution_like = SolutionLike.new(solution_like_params)
    if SolutionLike.find_by(solution_like_params).nil? && @solution_like.save
      render json: @solution_like
    else
      render json: @solution_like.errors, status: :unprocessable_entity
    end
  end
  
  def solution_like_params
    params.require(:solution_like).permit(:user_id, :solution_id)
  end
end
