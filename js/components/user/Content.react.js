// cotent用户模块内容组件
var React = require('react');
var ContentItem = require('./ContentItem.react');

var UserStore = require('../../stores/userStore');
var UserActionCreater = require('../../actions/UserActionCreater');
var UserApis = require('../../utils/userApis');

function getStateFromStores() {
	return UserStore.getAll();
}

var Content = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function () {
		// 添加事件监听
		UserStore.addChangeListener(this._onChange);

		// 获取接口返回数据
		UserApis.getUserData(function (userData) {			
			UserActionCreater.receiveUserData(userData);
		});
	},
	componentWillUnmount: function() {
		UserStore.removeChangeListener(this._onChange);
	},
	render: function () {
		var headData = this.state.headData || {};
		var itemData = this.state.itemData || [];
		var keyOrder = this.state.keyOrder || [];
		console.log(headData, itemData, keyOrder);
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
	},
	_onChange: function() {
		this.setState(getStateFromStores());
	}
});
module.exports = Content;