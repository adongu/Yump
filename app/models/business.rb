# == Schema Information
#
# Table name: businesses
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  user_id            :string
#  url                :string
#  street             :string           not null
#  city               :string           not null
#  state              :string           not null
#  zip                :string           not null
#  phone              :string           not null
#  latitude           :float            not null
#  longitude          :float            not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  price              :string           not null
#

class Business < ApplicationRecord
  include PgSearch
  validates :name, :street, :city, :state, :zip , :phone, :latitude, :longitude, :price ,presence: true
  validates :zip, length: { minimum: 5 }
  validates :price, inclusion: { in: %w($ $$ $$$ $$$$), message: "%{value} is not a valid price"}

  has_attached_file :image,
  styles: {
    thumb: "100x100>",
    medium: "200x200>",
    large: {:geometry => "616x450#"},
  },
  processors: [:thumbnail, :paperclip_optimizer],
  :s3_protocol => :https,
  default_url: "oysters.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :taggings
  has_many :tags, through: :taggings
  has_many :reviews
  has_many :reviewers, through: :reviews

  pg_search_scope :search_content_for, :against => [:name, :city, :state, :zip, :price], :using => { :tsearch => {:any_word => true, :prefix =>true} }
  # {:tsearch => {:prefix => true}, :trigram]
  # , using: { tsearch: { any_word: true } }, using: [:trigram]
  multisearchable :against => [:name], using: [:trigram]

  def averageRating
    reviews = self.reviews
    total = 0
    reviews.each do |review|
      total += review.rating
    end

    if self.reviews.length > 0
      average = (total/self.reviews.length).ceil
    else
      0
    end
  end

end
