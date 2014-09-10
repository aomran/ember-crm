import Ember from 'ember';

export default Ember.ObjectController.extend({
	statuses: ['new', 'in progress', 'closed', 'bad'],
	isEditing: false,
	actions: {
		saveChanges: function(){
			this.get('model').save();
		},
		delete: function(){
			var self = this;
			this.get('model').destroyRecord().then(function(){
				self.transitionToRoute('leads');
			});
		}
	},
	showUnsavedMessage: function(){
		return this.get('isDirty') && !this.get('isSaving');
	}.property('isDirty', 'isSaving')
});
