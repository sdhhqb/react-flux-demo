var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
  	RECEIVE_MENU_DATA: null,	//收到菜单数据
    CLICK_MENU: null,		//点击菜单
    CLICK_MENU_ITEM: null		//点击菜单内容项目
  })

};
