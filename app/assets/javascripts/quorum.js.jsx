$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var Link = ReactRouter.Link;

  var root = document.getElementById('content');

  React.render((
    <Router>
      <Route path="/" component={ App }>
        <IndexRoute path="/" component={ IndexPage } />
        <Route path="/questions/:id" component={QuestionDetail} />
        <Route path="login" component={ SessionForm } />
      </Route>

      <IndexPage />
    </Router>
  ), root);
});
