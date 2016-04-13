var QuestionDispatcher = require('../dispatcher/dispatcher.js'),
    QuestionConstants = require('../constants/question_constants.js'),
    TopicConstants = require('../constants/topic_constants.js'),
    AnswerConstants = require('../constants/answer_constants.js');

var ApiActions = {

  // loadAllTopics: function (topics) {
  //   QuestionDispatcher.dispatch({
  //     actionType: TopicConstants.LOAD_ALL_TOPICS,
  //     topics: topics
  //   });
  // },
  //
  // triggerTopics: function () {
  //   QuestionDispatcher.dispatch({
  //     actionType: TopicConstants.TOPICS_CHANGED
  //   });
  // },
  // updateTopics: function (topics) {
  //   QuestionDispatcher.dispatch({
  //     actionType: TopicConstants.TOPICS_UPDATED,
  //     topics: topics
  //   });
  // },
  receiveAllQuestions: function (questions) {
    QuestionDispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  },
  receiveSingleQuestion: function (question) {
    QuestionDispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_RECEIVED,
      question: question
    });
  },
  receiveAllAnswers: function (answers) {
    QuestionDispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  },
  receiveSingleAnswer: function (answer) {
    QuestionDispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_RECEIVED,
      answer: answer
    });
  },
  receiveMoreQuestions: function(questions){
    QuestionDispatcher.dispatch({
      actionType: QuestionConstants.MORE_QUESTIONS_RECEIVED,
      questions: questions
    });
  },
};

module.exports = ApiActions;
