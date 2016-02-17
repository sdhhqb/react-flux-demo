var ProductActionCreater = require('../actions/ProductActionCreater');

// api接口
module.exports = {
	// 获取产品列表数据
	getProductData: function (callback) {
		$.ajax({
			"url": "json/productData.json",
			"type": "get",
			"dataType": "json",
			"success": function (productData) {
				callback && callback(productData);
			},
			"error": function (err) {
				console.log("get productData error");
			}
		});
	},
	// 获取产品销售数据
	getSaleData: function (callback) {
		$.ajax({
			"url": "json/saleData.json",
			"type": "get",
			"dataType": "json",
			"success": function (saleData) {
				callback && callback(saleData);
			},
			"error": function (err) {
				console.log("get saleData error");
			}
		});
	}
};