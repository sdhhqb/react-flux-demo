// menuItem 层级菜单组件
var React = require('react');
var MenuItem = require('./MenuItem.react');

var MenuActionCreater = require('../../actions/MenuActionCreater');

var MenuHierarchy = React.createClass({
	// 改变当前菜单展开路径
	chgCurPath: function (curPath) {
		MenuActionCreater.clickMenu(curPath);
	},
	// 计算各级菜单展开收起状态
	toggle: function () {
		var parentLevel;
		if (this.props.curPath == "") {
			// 当前展开索引为空，展开菜单
			this.chgCurPath(this.props.selfPath);
		} else {
			// 如果索引不为为空，先判断点击项目有没有父级索引
			parentLevel = this.props.selfPath.split("level"+this.props.item.level)[0];
			if (parentLevel) {
				// 有父级项目，判断点击的是否是已展开项目
				if (this.props.curPath.indexOf(this.props.selfPath) > -1) {
					// 已展开，收起到父一级
					this.chgCurPath(parentLevel);
				} else {
					// 展开所点击的项目
					this.chgCurPath(this.props.selfPath);
				}
			} else {
				// 没有父级索引，点击的是第一级菜单
				if (this.props.curPath.indexOf(this.props.selfPath) > -1) {
					// 点击当前分支的第一级菜单，收起菜单
					this.chgCurPath("");
				} else {
					// 点击其他条目，展开
					this.chgCurPath(this.props.selfPath);
				}
			}
		}
	},
	render: function () {
		var item = this.props.item;
		var child = item.child;
		var i, key, curKey, className, list = [];
		
		if (item.child) {
			for (i = 0; i < child.length; i++) {
				key = this.props.selfPath + "level" + item.child[i].level + "-" + i;
				list.push(
					<MenuHierarchy 
						key={key}
						keyFlag={i}
						chgKey={this.chgCurPath}
						selfPath={key}
						curPath={this.props.curPath}
						curActive={this.props.curActive}
						item={item.child[i]} />
				);
			}

			className = "";
			curKey = this.props.curPath;
			if (curKey.indexOf(this.props.selfPath) > -1) {
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
			key = this.props.selfPath;
			return (
				<MenuItem 
					key={key}
					keyFlag={0}
					chgKey={this.props.chgKey}
					selfPath={key}
					curPath={this.props.curPath}
					curActive={this.props.curActive}
					item={item} />
			);
		}		
	}
});
module.exports = MenuHierarchy;