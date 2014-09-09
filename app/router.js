import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCrmENV.locationType
});

Router.map(function() {
	this.resource('leads', {path: '/'}, function(){
		this.resource('lead', {path: 'leads/:id'})
	});
});

export default Router;
