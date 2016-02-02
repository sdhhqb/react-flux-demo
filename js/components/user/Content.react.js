// cotent用户模块内容组件
var React = require('react');
var ContentItem = require('./ContentItem.react');

var Content = React.createClass({
	getInitialState: function () {
		return {
			keyOrder: [],
			headData: {},
			itemData : []
		};
	},
	componentDidMount: function () {
		var _this = this;
		$.ajax({
			"url":"json/userData.json",
			"type": "get",
			"dataType": "json",
			"success": function (data) {
				_this.setState({
					keyOrder: data.keyOrder,
					headData: data.headData,
					itemData: data.itemData
				});
			},
			"error": function () {
				console.log("get userData error.");
			}
		});
	},
	render: function () {
		var headData = this.state.headData;
		var itemData = this.state.itemData;
		var keyOrder = this.state.keyOrder;
		var i, key, list = [];

		for (i = 0; i < itemData.length; i++) {
			key = "contentItem_" + i;
			list.push(<ContentItem key={key} keyOrder={keyOrder} item={itemData[i]} />);
		}
		
		return (
			<div id="content" className="content">
				<div className="contentHead">
					<ContentItem keyOrder={keyOrder} item={headData} />
				</div>
				<div className="contentBody">
					{list}
				</div>
			</div>
		);
	}
});
module.exports = Content;