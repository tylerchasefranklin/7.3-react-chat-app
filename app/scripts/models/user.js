var $ = require('jquery');
var Backbone = require('backbone');


var User = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    visible: true
  }
});

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/users',
  comparator: function(model){
    console.log(model.cid);
    return -model.cid;
  }
});



module.exports = {
  User: User,
  UserCollection: UserCollection
};
