class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.includes(:tags, reviews: :reviewer).all.limit(4)
    render :index
  end

  def show
    @business = Business.includes(:tags, reviews: :reviewer).find(params[:id])
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
    params.require(:business).permit(:name, :user_id, :street, :city, :state, :zip, :phone, :latitude, :longitude, :reviews, :tags)
  end
end
