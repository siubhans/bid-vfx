class SigninController < ApplicationController
  before_action :authorize_access_request!, only: [:destroy, :current, :update]
  before_action :set_user, only: %i[ update ]

  def create
    user = User.find_by!(email: params[:email])
    if user.authenticate(params[:password])
      payload = { user_id: user.id }
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login
      response.set_cookie(JWTSessions.access_cookie,
                        value: tokens[:access],
                        httponly: true,
                        secure: Rails.env.production?
                      )
      render json: { csrf: tokens[:csrf] }
    else
      not_authorized
    end
  end
  # GET /USERS/1
  def show
    @user = User.find(email: params[:email])
    render json: @user
  end

  # GET /USERS
  def current
    @user = current_user
    render json: @user
  end
  
 # POST /USERS/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @session = JWTSessions::Session.new(refresh_by_access_allowed: true, payload: payload)
    @session.flush_by_access_payload
    render json: :ok
  end

  private

  def not_found
    render json: { error: "Cannot find email/password combination" }, status: :not_found
  end

  def set_user
    @user = current_user
  end
  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:id, :studio)
  end
end

