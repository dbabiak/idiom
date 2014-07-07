class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Expose these methods to the views
  helper_method :current_user, :signed_in?

  private
  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_token(session[:token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    session[:token] = user.reset_token!
  end

  def sign_out
    current_user.try(:reset_token!)
    session[:token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
