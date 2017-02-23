class Api::SearchesController < ApplicationController

  def index
    if params[:query].present?
      @businesses = Business.search_content_for(params[:query])
      render :index
    else
      render :index
    end
  end

end
