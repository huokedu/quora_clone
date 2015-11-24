window.QuestionsForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  defaults: {
    title: "",
    body: ""
  },

  getInitialState: function () {
    return this.defaults;
  },

  submitQuestion: function (e) {
    e.preventDefault();
    var question = { };
    question.title = this.state.title;
    question.body = this.state.body;
    question.author = CurrentUserStore.currentUser().user_name;

    ApiUtil.createQuestion(question, function (id) {
      this.history.pushState(null, "/questions/" + id, {});
    }.bind(this));

    this.setState(this.defaults);
  },

  render: function () {
    return(
      <section id="modal" className="modal is-active">
        <article className="modal-content">



          <span className="modal-close js-hide-modal">&times;</span>

          <form className='new-question-form' onSubmit={this.submitQuestion}>
            <div>
              <label htmlFor='question_title'>Title:</label>
              <input
                type='text'
                id='question_title'
                valueLink={this.linkState('title')} />
            </div>

            <div>
              <label htmlFor='question_body'>Body:</label>
              <input
                type='text'
                id='question_body'
                valueLink={this.linkState('body')} />
            </div>

            <button> Ask Question </button>
            <br/>
          </form>



        </article>
      </section>
    );
  }
});
