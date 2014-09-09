import DS from 'ember-data';

var Lead = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  status: DS.attr('string', {defaultValue: 'new' }),
  notes: DS.attr('string'),
  fullName: function(){
  	return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

Lead.reopenClass({
	FIXTURES: [
		{
			id: 1,
			firstName: 'first',
			lastName: 'person',
			email: 'first@person.com',
			phone: '613-443-3129',
			notes: ''
		},
		{
			id: 2,
			firstName: 'second',
			lastName: 'person',
			email: 'second@person.com',
			phone: '613-443-3129',
			notes: ''
		},
		{
			id: 3,
			firstName: 'third',
			lastName: 'person',
			email: 'third@person.com',
			phone: '613-443-3129',
			notes: ''
		},
		{
			id: 4,
			firstName: 'fourth',
			lastName: 'person',
			email: 'fourth@person.com',
			phone: '613-443-3129',
			notes: ''
		}
	]
});

export default Lead;