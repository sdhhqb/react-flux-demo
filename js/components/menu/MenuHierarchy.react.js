// menuItem 层级菜单组件
var React = require('react');
var MenuItem = require('./MenuItem.react');

var MenuHierarchy = React.createClass({	
	getInitialState: function () {
		return {
			curActive: this.props.curActive,
			active: false
		};
	},
	toggle: function () {
		var parentLevel;
		// var tmp1 = this.props.curKey;
		// var tmp2 = this.props.keyVal;
		// console.log("tmp1: "+tmp1, "tmp2: "+tmp2);
		if (this.props.curKey == "") {
			// 当前展开索引为空，展开菜单
			this.props.chgKey(this.props.keyVal);
		} else {
			// 如果索引不为为空，先判断点击项目有没有父级索引
			parentLevel = this.props.keyVal.split("level"+this.props.item.level)[0];
			if (parentLevel) {
				// 有父级项目，判断点击的是否是已展开项目
				if (this.props.curKey.indexOf(this.props.keyVal) > -1) {
					// 已展开，收起到父一级
					this.props.chgKey(parentLevel);
				} else {
					// 展开所点击的项目
					this.props.chgKey(this.props.keyVal);
				}
			} else {
				// 没有父级索引，点击的是第一级菜单
				if (this.props.curKey.indexOf(this.props.keyVal) > -1) {
					// 点击当前分支的第一级菜单，收起菜单
					this.props.chgKey("");
				} else {
					// 点击其他条目，展开
					this.props.chgKey(this.props.keyVal);
				}
			}
		}
	},
	render: function () {
		var item = this.props.item;
		var child = item.child;
		var i, key, curKey, className, list = [];

		// console.log("hierarchy render..." + this.props.keyVal);
		
		if (item.child) {
			for (i = 0; i < child.length; i++) {
				key = this.props.keyVal + "level" + item.child[i].level + "-" + i;
				list.push(
					<MenuHierarchy 
						key={key}
						keyVal={key}
						keyFlag={i}
						chgKey={this.props.chgKey}
						curKey={this.props.curKey}
						curActive={this.props.curActive}
						item={item.child[i]} />
				);
			}

			className = "";
			curKey = this.props.curKey;
			if (curKey.indexOf(this.props.keyVal) > -1) {
				className = "active";
			}

			return (
				<li className={className + " hierarchyItem level-" + item.level}>
					<div className="subMenu" onClick={this.toggle}>{item.name}</div>
					<ul className={className + " hierarchy" + " level-" + item.level}>
						{list}
					</ul>
				</li>
			);
		} else {
			key = this.props.keyVal;
			return (
				<MenuItem 
					key={key}
					keyVal={key}
					keyFlag={0}
					chgKey={this.props.chgKey}
					curKey={this.props.curKey}
					curActive={this.props.curActive}
					item={item} />
			);
		}		
	}
});
module.exports = MenuHierarchy;