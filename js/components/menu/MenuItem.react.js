// menuItem 菜单条目组件
var React = require('react');

var MenuActionCreater = require('../../actions/MenuActionCreater');

var MenuItem = React.createClass({
	showRoute: function () {
		var route = this.props.item.route;
		location.hash = route;
		// this.chgKey();
	},
	chgKey: function () {
		if (this.props.curPath != this.props.selfPath) {
			MenuActionCreater.clickMenuItem(this.props.selfPath, this.props.item.route);
		}
	},
	render: function () {
		var className = "menuItem";
		var curKey = this.props.curPath;
		
		if (this.props.item.route == this.props.curActive) {
			className += " active";
		}

		return (
			<li className={className} onClick={this.showRoute}>{this.props.item.name}</li>
		);
	}
});
module.exports = MenuItem;