class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: @user, status: 201
    else
      render json: ['woops'], status: 422
    end
  end

  def show
    @user = current_user
    @own_solutions = @user.solutions
    @like_solutions = @user.liked_solutions
    #Does the query have to be finished here?
    render 'show'
  end

  def profile
  end

  def api_user_params
    #throw an error if this disagrees with current_user
    params.require(:user_id)
  end
end
