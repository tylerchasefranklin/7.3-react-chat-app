var React = require('react');

var MessageComponent = React.createClass({
  render: function(){
    var fromMe = this.props.fromMe ? 'from-me': '';
    return (
      <div className= {'message ${fromMe}'}>
        <div className='username'>
          {this.props.username}
        </div>
        <div className='message-body'>
          {this.props.message}
        </div>
      </div>
    );
  }
});




module.exports = {
  MessageComponent: MessageComponent
};
