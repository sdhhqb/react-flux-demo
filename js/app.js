// 程序入口
var React = require('react');
var ReactDOM = require('react-dom');

var MyApp = require('./components/MyApp.react');

ReactDOM.render(
  <MyApp />,
  document.getElementById('reactapp')
);