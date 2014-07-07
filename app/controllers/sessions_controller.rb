class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(user_params)
    if user
      sign_in(user)
      redirect_to links_url
    else
      flash.now[:errors] = ['invalid username or password']
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end
end
