var MenuActionCreater = require('../actions/MenuActionCreater');

// api接口
module.exports = {
	// 获取菜单数据
	getMenuData: function () {
		$.ajax({
			"url": "json/menuData.json",
			"type": "get",
			"dataType": "json",
			"success": function (menuData) {
				MenuActionCreater.receiveMenuData(menuData);
			},
			"error": function (err) {
				console.log("get menuData error");
			}
		});
	}
}