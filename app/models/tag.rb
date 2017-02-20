# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  tag        :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  has_many :taggings
end
