module Api
  module V1
    class ClientsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      # before_action :authorize_access_request!, except: [:show, :index]
      # before_action :set_client, only: %i[ show update destroy ]

      # GET /clients
      def index
        @clients = Client.all

        render json: @clients
      end

      # GET /clients/1
      def show
        render json: @client
      end

      # POST /clients
      def create
        @client = Client.new(client_params)

        if @client.save
          render json: @client, status: :created, location: @client
        else
          render json: @client.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /clients/1
      def update
        if @client.update(client_params)
          render json: @client
        else
          render json: @client.errors, status: :unprocessable_entity
        end
      end

      # DELETE /clients/1
      def destroy
        @client.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_client
          @client = Client.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def client_params
          params.require(:client).permit(:name, :producer, :client, :studio)
        end
    end
  end
end