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

FactoryGirl.define do
  factory :review do
    
  end
end
