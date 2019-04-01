class UsersController < ApplicationController
  def create
   
   User.create(email: params['name'], password: params['password'])
    render json: @user
     
  end 



  private

  

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end
