class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(solution_id: params[:solution_id])
    @comment.user_id = current_user.id
    if @comment.save
      render json: @comment
    else
      render json: ['errorz'], status: 422
    end
  end

  def index
    @comments = []
    if params[:user_id]
      @comments = Comment.where(user_id: params[:user_id])
    else
      @comments = Comment.where(solution_id: params[:solution_id])
    end
    render json: @comments
  end

end
