var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var ChatContainer = require('./components/chatcontainer.jsx').ChatContainer;
var LoginComponent = require('./components/app.jsx').LoginComponent;
var FormComponent = require('./components/app.jsx').FormComponent;
var ChatComponent = require('./components/chatapp.jsx').ChatComponent;
var MessagesComponent = require('./components/messages.jsx').MessagesComponent;
var MessageComponent = require('./components/messagecomponent.jsx').MessageComponent;
var ChatInputComponent = require('./components/chatinput.jsx').ChatInputComponent;
var MessageCollection = require('./models/message').MessageCollection;
var UserCollection = require('./models/user').UserCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chatapp/': 'chatapp'
  },
  intialize: function(){
    this.username = '';
  },
  index: function(){
    ReactDOM.render(
      React.createElement(FormComponent, {router: this}),
      document.getElementById('app')
    );
  },
  chatapp: function(){
    var messages = new MessageCollection();
    ReactDOM.render(
      React.createElement(ChatContainer, {username: this.username}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
