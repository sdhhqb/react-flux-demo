// cotent产品模块内容组件
var React = require('react');
var ContentProduct = require('./ContentProduct.react');
var ContentSale = require('./ContentSale.react');

var Content = React.createClass({
	render: function () {
		var Xcontent;
		switch (this.props.curRoute) {
		case 'productlist': Xcontent = ContentProduct; break;
		case 'productsale': Xcontent = ContentSale; break;
		default: Xcontent = ContentProduct;
		}

		return (
			<Xcontent />
		);
	}
});
module.exports = Content;