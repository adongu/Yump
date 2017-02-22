class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find(params[:id])
    if @review
      render :show
    else
      render json: ["We're sorry, we could not find that Review"], status: 401
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :index
    else
      render json: ["Hmm... We would love to hear more about your experience, please describe your experience in more detail."], status: 401
    end
  end

  def review_params
    params.require(:review).permit(:body, :image)
  end
end
