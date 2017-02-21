# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  tag        :string(20)       not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  include PgSearch

  has_many :taggings
  has_many :businesses, through: :taggings
end
