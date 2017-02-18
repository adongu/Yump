# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  email              :string           not null
#  f_name             :string           not null
#  l_name             :string           not null
#  zip                :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  attr_reader :password

  def password= (password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def ensure_session_token
    self.session_token ||= reset_session_token!
  end
end
