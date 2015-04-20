/**
 * Created by williamleong on 4/20/15.
 */

AutoForm.hooks({
  updatePassword: {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
      if (insertDoc["new"] !== insertDoc.confirm) {
        Alert.error('Passwords do not match');
        return false;
      }
      Accounts.changePassword(insertDoc.old, insertDoc["new"], function(e) {
        $('.btn-primary').attr('disabled', null);
        if (e) {
          return Alert.error(e.message);
        } else {
          return Alert.success('Password Updated');
        }
      });
      return false;
    }
  }
});

Template.account.events({
  'click .js-delete-account': function() {
    return Meteor.call('deleteAccount', Meteor.userId());
  }
});

Template.setUserName.helpers({
  user: function() {
    return Meteor.user();
  }
});