var Dispatcher = require('./../dispatcher/dispatcher.js');
var UserConstants = require('../constants/current_user_constants.js');

var CHANGE_EVENT = "change";
var _currentUser = {};

var CurrentUserStore = $.extend({}, EventEmitter.prototype, {
  addChangeHandler: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeHandler: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  currentUser: function () {
    return $.extend({}, _currentUser);
  },

  isSignedIn: function () {
    return (typeof _currentUser.id !== "undefined");
  },

  dispatcherId: AppDispatcher.register(function (payload) {
    switch (payload.actionType) {

      case UserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.user;
          CurrentUserStore.emit(CHANGE_EVENT);
        break;
    }
  }),
});
