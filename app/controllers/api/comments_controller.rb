class Api::CommentsController < ApplicationController
  def create
    @commentable = find_commentable
    @comment = @commentable.comments.build(params[:comment])
    @comment.user_id = current_user.id
    if @comment.save
      render json: @comment
    else
      render json: ['errorz'], status: 422
    end
  end

  def index
    @commentable = find_commentable
    @comments = @commentable.comments
    render json: @comments
  end

  private
    def find_commentable
      params.each do |key, value|
        if key =~ /(.+)_id$/
          return $1.classify.constantize.find(value)
        end
      end
      nil
    end

end
