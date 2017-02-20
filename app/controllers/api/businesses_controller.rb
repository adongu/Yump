class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render :show
    else
      render json: ["We're sorry, we could not find that restaurant"], status: 401
    end
  end


  def edit
  end

  private

  def business_params
    params.require(:business).permit(:name, :user_id, :street, :city, :state, :zip, :phone, :latitude, :longitude)
  end
end
