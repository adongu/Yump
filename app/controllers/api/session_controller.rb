class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render "api/users/show"
    else
      render json: ["Seems like we forgot to log you in"], status: 404
    end
  end

end
