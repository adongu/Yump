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
#

class Business < ApplicationRecord
  validates :name, :street, :city, :state, :zip , :phone, :latitude, :longitude, presence: true
  validates :zip, length: { minimum: 5 }

end
