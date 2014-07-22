class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user.present?
      sign_in(@user)
      redirect_to '#/home'
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def destroy
    sign_out
    redirect_to new_session_url
  end

  def new
    # for when the router starts going crazy again
    # debugger
  end

end
