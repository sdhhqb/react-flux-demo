var React = require('react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var Footer = require('./Footer.react');

var MyApp = React.createClass({

	render: function () {

		return (
			<div>
				<Header />
				<MainSection />
				<Footer />
			</div>
		);
	}
});
module.exports = MyApp;