# == Schema Information
#
# Table name: reviews
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  business_id        :integer          not null
#  review             :text             not null
#  rating             :integer          not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Review < ApplicationRecord
  validates :user, :business, :review, :rating, presence: true
  validates :review, length: { minimum: 30 }
  validates :rating, inclusion: { in: 1..5 , message: "%(value) is not a valid value" }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "User"

  belongs_to :business,
  primary_key: :id,
  foreign_key: :business_id,
  class_name: "Business"

end
