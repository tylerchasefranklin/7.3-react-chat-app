var React = require('react');


var ChatComponent = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    };
  },
  render: function(){
    return (
      <div className="container">
        <h3>Chat App</h3>
        <div messages={this.state.messages}></div>
        <input onSend={this.handleSend} />
      </div>
    )
  }
});




module.exports = {
  ChatComponent: ChatComponent
};
