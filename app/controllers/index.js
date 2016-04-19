import Ember from 'ember';

export default Ember.Controller.extend({

    // computed is called each time the value is changing
    //isDisabled: Ember.computed.empty('emailAddress'),
    /* quivalent to
    isDisabled: Ember.computed('emailAddress', function() {
        return this.get('emailAddress') === '';
    })
    */

    emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('emailIsValid'),
    emailAddress: '',

    actions: {
        saveInvitation() {
          alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
          this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
          this.set('emailAddress', '');
        }
      }
});
