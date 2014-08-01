class Api::SolutionLikesController < ApplicationController
  def create
    @solution_like = SolutionLike.new(solution_like_params)
    @solution_like.user_id = current_user.id
    not_in_db = SolutionLike.find_by(solution_id: @solution_like.solution_id,
                                     user_id: current_user.id).nil?
    if not_in_db && @solution_like.save
      render json: @solution_like
    else
      render json: @solution_like.errors, status: :unprocessable_entity
    end
  end

  def solution_like_params
    params.require(:upvote).permit(:user_id, :solution_id)
  end
end
