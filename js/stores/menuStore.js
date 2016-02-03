var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _menuData = [];
var _curActive = "";
var _curPath = "";

function setMenuData (menuData) {
	_menuData = menuData;
}

function setCurActive (curActive) {
	_curActive = curActive;
}

function setCurPath (curPath) {
	_curPath = curPath;
}

var MenuStore = assign({}, EventEmitter.prototype, {
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
  	return {
  		menuData: _menuData,
  		curActive: _curActive,
  		curPath: _curPath
  	};
  }
});

MenuStore.dispatchToken = AppDispatcher.register(function(action) {
  console.log("store callback, action type: " + action.type);

  switch(action.type) {
  	
  	case ActionTypes.RECEIVE_MENU_DATA:
  		// 收到接口返回的菜单数据，设置菜单数据
  		setMenuData(action.menuData);
      MenuStore.emitChange();
  		break;

    case ActionTypes.CLICK_MENU:
    	// 点击菜单，设置当前点击路径
    	setCurPath(action.curPath);
      MenuStore.emitChange();
      break;

    case ActionTypes.CLICK_MENU_ITEM:
    	// 点击菜单内容项，设置当前点击路径和选中项
    	setCurPath(action.curPath);
      setCurActive(action.curActive);
      MenuStore.emitChange();
      break;

    default:
      // do nothing
  }
});
module.exports = MenuStore;