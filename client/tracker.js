/**
 * Created by williamleong on 4/20/15.
 */

Tracker.autorun(function() {
  if (Meteor.userId() && !_.isNull(Router.current()) && Router.current().route.name === 'entrySignIn') {
    Router.go('dashboard');
  }
  if (Meteor.userId() && !_.isNull(Router.current()) && Router.current().route.name === 'entrySignUp') {
    Router.go('dashboard');
  }
  Meteor.subscribe('user');
  Meteor.subscribe('users');
  return Meteor.subscribe('userPicture');
});