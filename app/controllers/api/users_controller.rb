class Api::UsersController < ApplicationController
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
