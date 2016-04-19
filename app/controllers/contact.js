import Ember from 'ember';

export default Ember.Controller.extend({

    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageEnoughLong: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
    isNotValid: Ember.computed.not('isValid'),
    emailAddress: '',
    message: '',
    actions: {
        sendEmail() {
          this.set('responseMessage', `Thank you! We received your message. Your email address: ${this.get('emailAddress')}`);
          this.set('emailAddress', '')
        }
      }
});
