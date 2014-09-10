import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCrmENV.locationType
});

Router.map(function() {
	this.resource('leads', {path: '/'}, function(){
		this.route('new');
		this.resource('lead', {path: 'leads/:lead_id'}, function(){
			this.route('edit');
		})
	});
  this.route('lead_edit');
  this.route('leads/new');
});

export default Router;
