var AppDispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/current_user_constants.js');

var UserActions = {
  receiveUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USERS,
      users: users
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      user: user
    });
  },

  foundUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOUND_USER,
      user: user
    });
  }
};

module.exports = UserActions;