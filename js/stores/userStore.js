var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _userData = {};

function setUserData (userData) {
	_userData = userData;
}

var UserStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getAll: function () {
		return _userData;
	}
});

UserStore.dispatchToken = AppDispatcher.register(function(action) {
	console.log("userStore dispatcher callback, action type: " + action.type);

	switch(action.type) {
		
		case ActionTypes.RECEIVE_USER_DATA:
			// 收到接口返回的user数据
			setUserData(action.userData);
			UserStore.emitChange();
			break;

		default:
			// do nothing
	}
});
module.exports = UserStore;