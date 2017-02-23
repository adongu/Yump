class Api::SearchController < ApplicationController

  def index
    businesses = Business.search(params[:query])

    if params[:query].present?
      render :show
    else
      render {}
    end
  end
end
