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
	// 点击菜单
	clickMenu: function (curPath) {
		AppDispatcher.dispatch({
      type: ActionTypes.CLICK_MENU,
      curPath: curPath
    });
	},
	// 点击菜单内容项目
	clickMenuItem: function (curPath, curActive) {
		AppDispatcher.dispatch({
      type: ActionTypes.CLICK_MENU_ITEM,
      curPath: curPath,
      curActive: curActive
    });
	}
};