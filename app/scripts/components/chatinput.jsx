var React = require('react');


var ChatInputComponent = React.createClass({
  getInitialState: function(){
    return {
      chatInput: ''
    };
  },
  handleTextChange: function(e){
    this.setState({chatInput: event.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onSend(this.state.chatInput);
    this.setState({chatInput: ''});
  },
  render: function(){
    return (
      <form className="chat-input" onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.handleTextChange}
          value={this.state.chatInput}
          placeholder="Type your message here..."
          />
      </form>
    );
  }
});


module.export = {
  ChatInputComponent
}
