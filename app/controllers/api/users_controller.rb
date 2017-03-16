class Api::UsersController < ApplicationController
  # render error
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: ["This username does not match any of our users, please signup or try again to continue"], status: 422
    end
  end

  def update
    @user = User.find_by(params[:id])
    if @user.save
      render "api/users/show"
    else
      render json: ["Edit unsuccessful, check if password is at least 6 letters"], status: 401
    end
  end

end
