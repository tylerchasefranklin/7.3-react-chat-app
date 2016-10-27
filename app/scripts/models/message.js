var $ = require('jquery');
var Backbone = require('backbone');

var Message = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    visible: true
  }
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
  comparator: function(model){
    console.log(model.cid);
    return -model.cid;
  }
});





module.exports = {
  Message: Message,
  MessageCollection: MessageCollection
};
