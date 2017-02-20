class Api::ReviewsController < ApplicationController
end

def index
  @reviews = Review.all
end

def show
  @review = Review.find_by(params[:id])
  if @review
    render "api/reviews/show"
  end
end

def create
  @review = Review.new(review_params)
  if @review.save
    render "api/review/show"
  else
    render json: ["Hmm... We would love to hear more about your experience, please describe your experience in more detail."]
  end
end

def review_params
  params.require(:review).permit(:user_id, :business_id, :review, :rating, :image_file_name, :image_content_type, :image_file_size :image_updated_at)
end
