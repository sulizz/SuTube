class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            render :show
        else
            render json: ['Invalid username/password'], status: 401
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ['No current user to logout'], status: 404
        end
    end
    
end
