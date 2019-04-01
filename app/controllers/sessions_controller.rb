class SessionsController < ApplicationController

  def remote_login 
    @user = User.find_by(email: params[:email].downcase)
    if @user && @user.authenticate(params[:password])
      log_in @user
      render json: @user
    else
      render json: {'response': 'invalid creds'} 
    end 
  end 

  def destroy
    log_out if logged_in?
    render {'logged out'}
  end
end

private
def log_in(user)
  session[:user_id] = user.id
end

def current_user
  if session[:user_id]
    @current_user ||= User.find_by(id: session[:user_id])
  end
end

def logged_in?
  !current_user.nil?
end

def log_out
  session.delete(:user_id)
  @current_user = nil
end

