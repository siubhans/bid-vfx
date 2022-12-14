module Api
  module V1
    class ClientsController < ApplicationController
      before_action :authorize_access_request!
      before_action :set_client, only: %i[ show update destroy ]

      # GET /clients
      def index
        @clients =  current_user.clients
        render json: @clients
      end

      # GET /clients/1
      def show
        render json: @client
      end

      # POST /clients
      def create
        @client = current_user.clients.new(client_params)

          if @client.save
            render json: @client, status: :created
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
        def set_client
          @client = current_user.clients.find(params[:id])
        end

        def client_params
          params.require(:client).permit(:name, :producer, :studio)
        end
    end
  end
end