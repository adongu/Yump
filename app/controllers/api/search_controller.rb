class Api::SearchController < ApplicationController

  def index


    if params[:query].present?
      @businesses = Business.search(params[:query])
      render :show
    else
      render {}
    end
  end
end


4	    if (params[:review_search])
5	      @review_results = Review
6	        .review_search(params[:query])
7	        .includes(:business)
8	        .page(1)
9	      @business_results = Business
10	        .business_search(params[:query])
