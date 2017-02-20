# == Schema Information
#
# Table name: taggings
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  tag_id      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :tagging do
    
  end
end
