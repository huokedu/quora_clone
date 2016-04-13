class Api::QuestionsController < ApplicationController
  before_action :require_user_owns_question!, only: [:edit, :update, :destroy]

  def new
    @question = Question.new
    render json: @question
  end

  def index
    page_number = params[:pageNum] || 1
    @questions = Question.includes(author: [:questions, :answers], answers: [:author]).includes(:topics)
      .order(created_at: :desc)
      .page(page_number)
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = current_user.questions.new(question_params)

    if @question.save
      render "api/questions/show"
    else
      render json: @question.errors
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy!
    render json: @question
  end

  private
    def question_params
      params.require(:question).permit(:title, :body, question_topics_attributes: :topic_id )
    end

    def require_user_owns_question!
      return if Question.find(params[:id]).author == current_user
      render json: "Forbidden", status: :forbidden
    end

end
