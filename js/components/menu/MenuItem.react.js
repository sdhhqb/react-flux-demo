// menuItem 菜单条目组件
var React = require('react');

var MenuItem = React.createClass({
	componentDidMount: function () {
		var curActive = this.props.curActive;
		var curKey = this.props.curKey;
		if (curActive == this.props.item.route) {
			if (curKey == "") {
				var _this = this;
				_this.chgKey();
			}
		}
	},
	showRoute: function () {
		var route = this.props.item.route;
		location.hash = route;
		this.chgKey();		
	},
	chgKey: function () {
		if (this.props.curKey != this.props.keyVal) {
			this.props.chgKey(this.props.keyVal);
		}
	},
	render: function () {
		var className = "menuItem";
		var curKey = this.props.curKey;
		
		if (curKey) {
			if (curKey == this.props.keyVal) {
				className += " active";
			}
		}

		return (
			<li className={className} onClick={this.showRoute}>{this.props.item.name}</li>
		);
	}
});
module.exports = MenuItem;