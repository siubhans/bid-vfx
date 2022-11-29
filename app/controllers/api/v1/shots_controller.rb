module Api
  module V1
    class ShotsController < ApplicationController
    before_action :authorize_access_request!
    before_action :set_shot, only: %i[ show update destroy ]

  # GET /shots
  def index
    @shots = Shot.where(bid_id: params[:bid_id])

    render json: @shots
  end

  # GET /shots/1
  def show
    render json: @shot
  end

  # POST /shots
  def create
    @shot = Shot.new(shot_params)

    if @shot.save
      render json: @shot, status: :created
    else
      render json: @shot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shots/1
  def update
    if @shot.update(shot_params)
      render json: @shot
    else
      render json: @shot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shots/1
  def destroy
    @shot.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shot
      @shot = Shot.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shot_params
      params.require(:shot).permit(:name, :image, :methodology, :scene, :description, :notes, :vfx_work, :days, :total, :bid_id)
    end
  end
 end
end