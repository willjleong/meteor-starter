/**
 * Created by williamleong on 4/20/15.
 */

this.App = {
  alertSuccess: function(message) {
    Session.set('alertSuccess', message);
    return Session.set('alertError', '');
  },
  alertError: function(message) {
    Session.set('alertError', message);
    return Session.set('alertSuccess', '');
  }
};