var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {
	// 收到user数据
	receiveUserData: function (userData) {
		AppDispatcher.dispatch({
			type: ActionTypes.RECEIVE_USER_DATA,
			userData: userData
		});
	}
};