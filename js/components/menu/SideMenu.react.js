// menu侧边栏菜单组件
// 菜单写的有点复杂，写成多层级的了。一般两层的菜单不用这么复杂。
var React = require('react');
var MenuHierarchy = require('./MenuHierarchy.react');

var MenuActionCreater = require('../../actions/MenuActionCreater');

var SideMenu = React.createClass({
	componentDidMount: function () {
		console.log("side menu did mount");
	},
	render: function () {
		var menuData = this.props.menuData;
		var curPath = this.props.curPath;
		var curActive = this.props.curActive;

		var key, list = [];

		console.log("sideMenu render, menuData: ", menuData);
		console.log("curPath: "+curPath, "curActive: "+curActive);

		for (var i = 0; i < menuData.length; i++) {
			key = "level" + menuData[i].level + "-" + i;
			list.push(
				<MenuHierarchy 
					key={key}
					keyFlag={i}
					selfPath={key}
					curPath={this.props.curPath}
					curActive={this.props.curActive}
					item={menuData[i]} />);
		}
		
		return (
			<ul id="sideMenu" className="sideMenu">
				{list}
			</ul>
		);
	}
});
module.exports = SideMenu;