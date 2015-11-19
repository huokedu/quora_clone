window.QuestionsIndex = React.createClass({
  getInitialState: function () {
    return { questions: QuestionStore.all() };
  },

  componentDidMount: function () {
    QuestionStore.addQuestionsIndexChangeListener(this._change);
    ApiUtil.fetchAllQuestions();
  },

  componentWillUnmount: function () {
    QuestionStore.removeQuestionsIndexChangeListener(this._change);
  },

  _change: function () {
    this.setState({ questions: QuestionStore.all() });
  },

  render: function () {
    return(
      <ul>
        {this.state.questions.map(function (question) {
          return <QuestionsIndexItem key={question.id} question={question} />;
        })}
      </ul>
    );
  }
});