import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCrmENV.locationType
});

Router.map(function() {
	this.resource('leads', function(){
		this.resource('lead', {path: '/:lead_id'}, function(){
			this.route('edit');
		})
	});
  this.route('lead_edit');
});

export default Router;
