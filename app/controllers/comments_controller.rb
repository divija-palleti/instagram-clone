class CommentsController < ApplicationController
    before_action :set_post
    before_action :set_comment, only: [:edit, :update, :destroy]

    def create
        @comment = @post.comments.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save
            flash[:success] = "You have commented "
            redirect_to :back
        else
            flash[:alert] = "Check the comment form"
            render root_path
        end
    end

    def destroy
        @comment.destroy
        flash[:success] = "Comment deleted :("
        redirect_to root_path
    end

private

    def comment_params
        params.require(:comment).permit(:content)
    end

    def set_post
        @post = Post.find(params[:post_id])
    end

    def set_comment
        @comment = @post.comments.find[params[:id]]
    end
end
