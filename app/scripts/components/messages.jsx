// was trying to use this code from http://www.codedodle.com/2015/04/facebook-like-chat-application-react-js.html

var React = require('react');

var MessagesComponent = React.createClass({
  render: function() {
    var inlineStyles = {
      height: '300px',
      overflowY: 'scroll'
    };

    var Rows = this.props.datas.map(function(data) {
      return (
        <Row key={data.id} username={data.username} time={data.time} message={data.message} />
      )
    });

    return (
      <div style={inlineStyles}>
        {Rows}
      </div>
    );
  }
});



module.export = {
  MessagesComponent: MessagesComponent
};
