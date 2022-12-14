module Api
  module V1
    class BidsController < ApplicationController
      #make sure user is signed in before any methods here
      before_action :authorize_access_request!
      before_action :set_bid, only: %i[ show update destroy ]

      # GET /bids
       def index
        @bids =  current_user.bids
        render json: @bids
      end

      # GET /bids/1
      def show
        render json: @bid
      end

      # POST /bids
      def create
        @bid = current_user.bids.new(bid_params)

          if @bid.save
            render json: @bid, status: :created
          else
            render json: @bid.errors, status: :unprocessable_entity
          end
      end

      # PATCH/PUT /bids/1
      def update
        if @bid.update(bid_params)
          render json: @bid
        else
          render json: @bid.errors, status: :unprocessable_entity
        end
      end

      # DELETE /bids/1
      def destroy
        @bid.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_bid
          @bid = current_user.bids.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def bid_params
          params.require(:bid).permit(:project, :fps, :resolution, :cost, :client_id)
        end
    end
  end
end