class Api::SolutionLikesController < ApplicationController
  def create
    @solution_like = SolutionLike.new(solution_like_params)
    @solution_like.user_id ||= current_user.id
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
