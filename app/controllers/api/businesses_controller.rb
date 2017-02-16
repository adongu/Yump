class Api::BusinessesController < ApplicationController
  def show
    @business = Business.find_by(params[:id]);

  end

  def index

  end

  def edit
    @isOwner = (current_user.id == Business.find_by(params[:user_id)]);


  end

  def update
  end

  private

  def business_params
    params.require(:business).permit(:name, :user_id, :street, :city, :state, :zip, :phone, :latitude, :longitude)
  end
end
