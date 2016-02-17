var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {
	// 收到产品数据
	receiveProductData: function (productData) {
		AppDispatcher.dispatch({
			type: ActionTypes.RECEIVE_PRODUCT_DATA,
			productData: productData
		});
	},
	// 收到sale数据
	receiveSaleData: function (saleData) {
		AppDispatcher.dispatch({
			type: ActionTypes.RECEIVE_SALE_DATA,
			saleData: saleData
		});
	}
};