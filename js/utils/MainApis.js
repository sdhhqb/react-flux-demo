var MenuActionCreater = require('../actions/MenuActionCreater');

// api接口
module.exports = {
	// 获取菜单数据
	getMenuData: function (callback) {
		$.ajax({
			"url": "json/menuData.json",
			"type": "get",
			"dataType": "json",
			"success": function (menuData) {
				callback && callback(menuData);
			},
			"error": function (err) {
				console.log("get menuData error");
			}
		});
	}
}