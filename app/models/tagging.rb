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

class Tagging < ApplicationRecord
  validates :tag_id, :businesses_id, presence: true

  belongs_to :business
  belongs_to :tag
end
