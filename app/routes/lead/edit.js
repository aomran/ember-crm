import Ember from 'ember';

export default Ember.Route.extend({
	activate:   function() { this.controllerFor('lead').set('isEditing', true) },
  deactivate: function() { this.controllerFor('lead').set('isEditing', false) }
});
