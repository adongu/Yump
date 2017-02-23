class Api::ReviewsController < ApplicationController

  def index
    @business = Business.find(params[:id])
    @reviews = @business.reviews
    render :index
  end

  def create
    @review = Review.new(review_params)

    if current_user
      @review.user_id = current_user.id

      if @review.save
        render :show
      else
        render json: ["Hmm... We would love to hear more about your experience, please describe your experience in more detail."], status: 401
      end

    else
      render json: ["Please Sign Up or Log In to create reviews"], status: 401
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    if @review
      render :index
    else
      render json: ["Please log in to delete review"], status: 401
    end
  end

  def show
    @review = Review.find(params[:id])
    if @review
      render :show
    else
      render json: ["We're sorry, we could not find that Review"], status: 401
    end
  end


  def review_params
    params.require(:review).permit(:business_id, :user_id, :rating, :review, :image)
  end
end
