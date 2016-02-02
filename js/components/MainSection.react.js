// 中间主要内容区域
var React = require('react');
var SideMenu = require('./menu/SideMenu.react');
var ContentProduct = require('./product/Content.react');
var ContentUser = require('./user/Content.react');

var MainSection = React.createClass({
	getHash: function () {
		var hash = window.location.hash.substring(1) || "productlist";
		return hash;
	},
	getInitialState: function () {
		return {
			route: this.getHash()
		};
	},
	componentDidMount: function () {
		var _this = this;
		window.addEventListener('hashchange', function () {
			_this.setState({
				route: _this.getHash()
			});
		});
	},
	render: function () {
		var Xcontent;
		switch (this.state.route) {
		case 'productlist': Xcontent = ContentProduct; break;
		case 'productsale': Xcontent = ContentProduct; break;
		case 'userlist': Xcontent = ContentUser; break;
		default:			Xcontent = ContentProduct;
		}

		return (
			<div id="mainSection" className="mainSection">
				<SideMenu curActive={this.state.route} />
				<Xcontent curRoute={this.state.route} />
			</div>
		);
	}
});
module.exports = MainSection;