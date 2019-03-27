class SessionsController < ApplicationController

  def remote_login 
    @user = User.find_by(email: params[:email].downcase)
    if @user && @user.authenticate(params[:password])
      log_in @user
      render json: @user, status: 201 
    else
      render json: {'response': 'invalid creds'} 
    end 
  end 
 
 
  def destroy
    log_out if logged_in?
    redirect_to root_url
  end
end
