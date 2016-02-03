// menuItem 菜单条目组件
var React = require('react');

var MenuActionCreater = require('../../actions/MenuActionCreater');

var MenuItem = React.createClass({
	componentDidMount: function () {
		var curActive = this.props.curActive;
		var curPath = this.props.curPath;
		var hash = window.location.hash.substring(1);
		if (hash == this.props.item.route && curActive == "") {
			// 打开hash对应的项目
			// MenuActionCreater.clickMenuItem(this.props.selfPath, this.props.item.route);
			var _this = this;
			setTimeout(function () {
				MenuActionCreater.clickMenuItem(_this.props.selfPath, _this.props.item.route);
			}, 200);
		}
		// if (curActive == this.props.item.route) {
		// 	if (curPath == "") {
		// 		var _this = this;
		// 		_this.chgKey();
		// 	}
		// }
	},
	showRoute: function () {
		var route = this.props.item.route;
		location.hash = route;
		this.chgKey();
	},
	chgKey: function () {
		if (this.props.curPath != this.props.selfPath) {
			// MenuActionCreater.clickMenuItem(this.props.selfPath, this.props.curActive);
			MenuActionCreater.clickMenuItem(this.props.selfPath, this.props.item.route);
		}
	},
	render: function () {
		var className = "menuItem";
		var curKey = this.props.curPath;
		
		if (curKey) {
			if (curKey == this.props.selfPath) {
				className += " active";
			}
		}

		return (
			<li className={className} onClick={this.showRoute}>{this.props.item.name}</li>
		);
	}
});
module.exports = MenuItem;