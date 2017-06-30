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
  include PgSearch

  validates :reviewer, :business, :review, :rating, presence: true
  validates :review, length: { minimum: 30 }
  validates :rating, inclusion: { in: 1..5 , message: "%(value) is not a valid value" }
  validates :user_id, uniqueness: { scope: :business_id}

  has_attached_file :image,
  :styles => {
    :large => {:geometry => "616x450#"},
    :medium => {:geometry => "278x216#"}
  },
  :s3_protocol => :https,
  default_url: "steak.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :reviewer,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "User"

  belongs_to :business,
  primary_key: :id,
  foreign_key: :business_id,
  class_name: "Business"

end
