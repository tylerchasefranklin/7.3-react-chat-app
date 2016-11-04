var React = require('react');
var messages = require('../models/message.js').MessageCollection;
var MessagesComponent = require('./messages.jsx').MessagesComponent;

var MessagesComponent = React.createClass({
  render: function() {
    var inlineStyles = {
      height: '300px',
      overflowY: 'scroll'
    };
    var Rows = this.props.messages.map(function(message) {
      return (
        <div key={message.id} username={message.username} time={message.time} message={message.message}></div>
      )
    });

    return (
      <div style={inlineStyles}>
        {Rows}
      </div>
    );
  }
});

var ChatContainer = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    };
  },
  getMessages: function(){
    var messageCollection = new MessageCollection();
    messageCollection.fetch(function(message){
      this.setState({messages: message});
    }.bind(this));
  },
  sendMessage: function(){
    messageCollection.set(function(message){
      this.setState({messages: message});
    }.bind(this));
  },
  componentDidMount: function(){
    this.getMessages();
    setInterval(this.getMessages, 5000);
  },
  render: function(){
    return (
      <div className="chat-container">
        <MessagesComponent />
      </div>
    );
  }
});

module.exports ={
  ChatContainer: ChatContainer
};
