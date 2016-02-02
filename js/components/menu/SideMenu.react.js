// menu侧边栏菜单组件
// 菜单写的有点复杂，写成多层级的了。一般两层的菜单不用这么复杂。
var React = require('react');
var MenuHierarchy = require('./MenuHierarchy.react');

var SideMenu = React.createClass({
	getInitialState: function () {
		return {
			curActive: this.props.curActive,
			curKey: "",
			menuData: []
		};
	},
	initCurKey: function (menuData, curActive, startLevel, startStr) {
		var key = startStr || "";
		var level = startLevel || 1;
		var i, childKey;
		for (i = 0; i < menuData.length; i++) {
			if (menuData[i].child) {
				childKey = this.initCurKey(menuData[i].child, curActive, level+1, key);
				if (key != childKey) {
					key = 'level'+level+'-'+i+childKey;
					break;
				}
			} else {
				if (menuData[i].route == curActive) {
					key = key+'level'+level+'-'+i;
					return key;
				}
			}
		}
		return key;
	},
	chgCurKey: function (curActiveKey) {
		this.setState({
			curKey: curActiveKey
		});
	},
	componentWillReceiveProps: function (nextProps) {
		var curKey = this.initCurKey(this.state.menuData, nextProps.curActive);
		this.setState({
			curKey: curKey
		});
	},
	componentDidMount: function () {
		var _this = this;
		$.ajax({
			"url":"json/menuData.json",
			"type": "get",
			"dataType": "json",
			"success": function (data) {
				_this.setState({
					menuData: data
				});
			},
			"error": function () {
				console.log("get menuData error.");
			}
		});
	},
	render: function () {
		var menuData = this.state.menuData;
		var key, list = [];
		// console.log("sideMenu render");

		for (var i = 0; i < menuData.length; i++) {
			key = "level" + menuData[i].level + "-" + i;
			list.push(
				<MenuHierarchy 
					key={key}
					keyVal={key}
					keyFlag={i}
					chgKey={this.chgCurKey}
					curKey={this.state.curKey}
					curActive={this.state.curActive}
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