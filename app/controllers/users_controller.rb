class UsersController < ApplicationController
  def create
    @user = User.new 
    @user.email = params['email']
    @user.password = params['password']
    if @user.save
      render json: @user
    else
      render {'Fail'} 
    end 
  end 



  private
=begin
  def set_user
    @user = User.find(params[:id])
  end
  def log_in(user)
    session[:user_id] = user.id
  end
  

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
=end
end
