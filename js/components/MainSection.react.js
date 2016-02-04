// 中间主要内容区域
var React = require('react');
var SideMenu = require('./menu/SideMenu.react');
var ContentProduct = require('./product/Content.react');
var ContentUser = require('./user/Content.react');

var MenuStore = require('../stores/menuStore');
var MenuActionCreater = require('../actions/MenuActionCreater');
var MainApis = require('../utils/MainApis');

function getStateFromStores() {
  return MenuStore.getAll();
}

var MainSection = React.createClass({
	getInitialState: function () {
		return getStateFromStores();
	},
	getHash: function () {
		var hash = window.location.hash.substring(1) || "productlist";
		return hash;
	},	
	componentDidMount: function () {
		MenuStore.addChangeListener(this._onChange);
		MainApis.getMenuData();
		var hash = this.getHash();
		if (hash) {
			//展开hash对应的菜单项
		}
		// hashChangeEvent
		// test a new user 123
	},
	componentWillUnmount: function() {
    MenuStore.removeChangeListener(this._onChange);
  },
	render: function () {
		// var Xcontent;
		// switch (this.state.route) {
		// case 'productlist': Xcontent = ContentProduct; break;
		// case 'productsale': Xcontent = ContentProduct; break;
		// case 'userlist': Xcontent = ContentUser; break;
		// default:			Xcontent = ContentProduct;
		// }

		// return (
		// 	<div id="mainSection" className="mainSection">
		// 		<SideMenu curActive={this.state.curActive} />
		// 		<Xcontent curRoute={this.state.route} />
		// 	</div>
		// );
		console.log("|| ------ || ------");
		console.log("MainSection render", this.state.menuData);
		return (
			<div id="mainSection" className="mainSection">
				<SideMenu 
					curPath={this.state.curPath}
					curActive={this.state.curActive}
					menuData={this.state.menuData} />
			</div>
		);
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
	_onChange: function() {
    this.setState(getStateFromStores());
  }
});
module.exports = MainSection;