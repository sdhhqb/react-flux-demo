var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {
	// 收到menu数据
	receiveMenuData: function (menuData) {
		AppDispatcher.dispatch({
			type: ActionTypes.RECEIVE_MENU_DATA,
			menuData: menuData
		});
	},
	// 设置菜单路径
	setMenuPath: function (curPath) {
		AppDispatcher.dispatch({
			type: ActionTypes.SET_MENU_PATH,
			curPath: curPath
		});
	},
	// 设置菜单当前内容项目
	setMenuItem: function (curPath, curActive) {
		AppDispatcher.dispatch({
			type: ActionTypes.SET_MENU_ITEM,
			curPath: curPath,
			curActive: curActive
		});
	}
};