var UserActionCreater = require('../actions/UserActionCreater');

// api接口
module.exports = {
	// 获取用户列表数据
	getUserData: function (callback) {
		$.ajax({
			"url": "json/userData.json",
			"type": "get",
			"dataType": "json",
			"success": function (userData) {
				callback && callback(userData);
			},
			"error": function (err) {
				console.log("get userData error");
			}
		});
	}
};