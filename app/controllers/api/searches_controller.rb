class Api::SearchesController < ApplicationController

  def index
    if params[:query].present?
      # debugger
      @businesses = Business.search(params[:query])
      render :index
    else
      render :index
    end
  end

end
