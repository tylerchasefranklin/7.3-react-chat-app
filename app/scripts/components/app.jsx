var React = require('react');

var ChatComponent = require('./chatapp.jsx').ChatComponent;
var MessagesComponent = require('./messages.jsx').MessagesComponent;
var MessageComponent = require('./messagecomponent.jsx').MessageComponent;
var ChatInputComponent = require('./chatinput.jsx').ChatInputComponent;

var FormComponent = React.createClass({
  getInitialState: function(){
    return {
      username: '',
    };
  },
  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
  handleUserSubmit: function(e){
    e.preventDefault();
    var router = this.props.router;

    router.username = this.state.username;
    router.navigate('chatapp/', {trigger: true});
    var newUser = {username: this.state.username};


    // this.setState({username: ''});
  },
  // handleUserChange: function(e){
  //   this.setState({username: e.target.value});
  // },
  render: function(){
    return (
      <form onSubmit={this.handleUserSubmit} method="post" className="well">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleUsername} value={this.state.username} name="username" type="text" className="form-control" id="username" placeholder="Enter Username" />
        </div>
        <button type="submit" className="btn btn-success" value="Submit">Login!</button>
      </form>
    );
  }
});


module.exports = {
  FormComponent: FormComponent,
};
