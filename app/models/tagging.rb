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
  validates :tag_id, :business_id, presence: true
  validates :tag_id, uniqueness: { scope: :business_id }

  belongs_to :business
  belongs_to :tag
end
