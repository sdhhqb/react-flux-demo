var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _productData = {};
var _saleData = {};

function setProductData (productData) {
	_productData = productData;
}
function setSaleData (saleData) {
	_saleData = saleData;
}

var ProductStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getProductData: function () {
		return _productData;
	},
	getSaleData: function () {
		return _saleData;
	},
	getAll: function () {
		return {
			productData: _productData,
			saleData: _saleData
		};
	}
});

ProductStore.dispatchToken = AppDispatcher.register(function(action) {
	console.log("productStore dispatcher callback, action type: " + action.type);

	switch(action.type) {
		
		case ActionTypes.RECEIVE_PRODUCT_DATA:
			// 收到接口返回的product数据
			setProductData(action.productData);
			ProductStore.emitChange();
			break;
		case ActionTypes.RECEIVE_SALE_DATA:
			// 收到接口返回的sale数据
			setSaleData(action.saleData);
			ProductStore.emitChange();
			break;

		default:
			// do nothing
	}
});
module.exports = ProductStore;