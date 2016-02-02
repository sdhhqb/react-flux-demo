// contentItem用户模块表格条目组件
var React = require('react');

var ContentItem = React.createClass({
	render: function () {
		var keys = this.props.keyOrder;
		var item = this.props.item;
		var i, key, itemList = [];
		var cellW = keys.length > 0 ? (100 / keys.length) + '%' : '100%';

		for (i = 0; i < keys.length; i++) {
			key = "cell_" + i;
			itemList.push(
				<div className="item-prop" key={key} style={{width: cellW}}>{item[keys[i]]}</div>
			);
		}

		return (
			<div className="contentItem">
				{itemList}
			</div>
		);
	}
});
module.exports = ContentItem;