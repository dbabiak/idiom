# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  token           :string(255)      not null
#

class User < ActiveRecord::Base
  attr_reader :password

  has_many :solutions, class_name: 'Solution', foreign_key: :submitter_id
  has_many :solution_likes
  has_many :liked_solutions, through: :solution_likes, source: :solution
  has_many :comments

  before_validation :ensure_token
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  def reset_token!
    self.token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(user_params)
    user = User.find_by_username(user_params[:username])
    return nil if user.nil?
    passwd = BCrypt::Password.new(user.password_digest)
    passwd.is_password?(user_params[:password]) ? user : nil
  end

  def ensure_token
    self.token ||= SecureRandom.urlsafe_base64
  end
end
