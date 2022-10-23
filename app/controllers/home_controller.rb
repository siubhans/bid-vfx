class HomeController < ApplicationController
    def index
        @clients = Client.all
        render json: @clients
    end
end
