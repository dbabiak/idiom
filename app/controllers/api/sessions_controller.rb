class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user.present?
      sign_in(@user)
      render json: @user, status: 200
    else
      render json: ['error'], status: 422
    end
  end

  def destroy
    sign_out
    render json: ['killed it']
  end
end
