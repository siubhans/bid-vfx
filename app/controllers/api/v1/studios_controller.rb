module Api
  module V1
    class StudiosController < ApplicationController
      before_action :authorize_access_request!
      before_action :set_studio, only: %i[ show update destroy ]

      # GET /studios
      def index
        @studios =  current_user.studios
        render json: @studios
      end

      # # GET /studios/1
      # def show
      #   render json: @studio
      # end

      # # POST /studios
      # def create
      #   @studio = current_user.studios.new(studio_params)

      #     if @studio.save
      #       render json: @studio, status: :created
      #     else
      #       render json: @studio.errors, status: :unprocessable_entity
      #     end
      # end

      # PATCH/PUT /studios/1
      def update
        if @studio.update(studio_params)
          render json: @studio
        else
          render json: @studio.errors, status: :unprocessable_entity
        end
      end

      # # DELETE /studios/1
      # def destroy
      #   @studio.destroy
      # end

      private
        def set_studio
          @studio = current_user.studios.find(params[:id])
        end

        def studio_params
          params.require(:studio).permit(:name, :logo)
        end
    end
  end
end