class Api::BusinessesController < ApplicationController
  def show
    @business = Business.find_by(params[:id]);
    if @business
      render :show
    else
      render json: ["We're sorry, we could not find that restaurant"], status: 401
    end
  end

  def index
    @businesses = Business.all
    render :index
  end

  def edit
    # @isOwner = (current_user.id == Business.find_by(params[:user_id]))
  end

  private

  def business_params
    params.require(:business).permit(:name, :user_id, :street, :city, :state, :zip, :phone, :latitude, :longitude)
  end
end
