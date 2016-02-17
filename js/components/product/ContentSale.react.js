// cotentSale产品销售报表组件
var React = require('react');
var ContentItem = require('./ContentItem.react');

var ProductStore = require('../../stores/productStore');
var ProductActionCreater = require('../../actions/ProductActionCreater');
var ProductApis = require('../../utils/productApis');

function getStateFromStores() {
	return ProductStore.getSaleData();
}

var ContentSale = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function () {
		// 添加事件监听
		ProductStore.addChangeListener(this._onChange);

		// 获取接口返回数据
		ProductApis.getSaleData(function (saleData) {			
			ProductActionCreater.receiveSaleData(saleData);
		});
	},
	componentWillUnmount: function() {
		ProductStore.removeChangeListener(this._onChange);
	},
	render: function () {
		var headData = this.state.headData || {};
		var itemData = this.state.itemData || [];
		var keyOrder = this.state.keyOrder || [];
		var i, key, list = [];

		for (i = 0; i < itemData.length; i++) {
			key = "contentItem_" + i;
			list.push(<ContentItem key={key} keyOrder={keyOrder} item={itemData[i]} />);
		}
		key = 'contentHeadItem_';
		
		return (
			<div id="content" className="content">
				<div className="contentHead">
					<ContentItem keyOrder={keyOrder} item={headData} />
				</div>
				<div className="contentBody">
					{list}
				</div>
			</div>
		);
	},
	_onChange: function() {
		this.setState(getStateFromStores());
	}
});
module.exports = ContentSale;