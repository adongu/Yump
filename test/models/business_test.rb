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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
