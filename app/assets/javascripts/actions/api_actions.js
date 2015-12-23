window.ApiActions = {
  receiveAllQuestions: function (questions) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  },

  receiveSingleQuestion: function (question) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_RECEIVED,
      question: question
    });
  },

  receiveAllAnswers: function (answers) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  },

  receiveSingleAnswer: function (answer) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_RECEIVED,
      answer: answer
    });
  },

  receiveMoreQuestions: function(questions){
    AppDispatcher.dispatch({
      actionType: QuestionConstants.MORE_QUESTIONS_RECEIVED,
      questions: questions
    });
},
};
