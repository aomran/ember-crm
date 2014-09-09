import Ember from 'ember';

export default Ember.ObjectController.extend({
	statuses: ['new', 'in progress', 'closed', 'bad'],
	actions: {
		saveChanges: function(){
			this.get('model').save();
		}
	}
});
