var keyMirror = require('keymirror');

module.exports = {
	ActionTypes: keyMirror({
		RECEIVE_MENU_DATA: null,	//收到菜单数据
		SET_INITIAL_ACTIVE: null,	//第一次打开带有hash，设置初始化时的选中项
		SET_MENU_PATH: null,		//点击菜单
		SET_MENU_ITEM: null,		//点击菜单内容项目
		RECEIVE_PRODUCT_DATA: null,
		RECEIVE_SALE_DATA: null,
		RECEIVE_USER_DATA: null
	})

};
