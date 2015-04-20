/**
 * Created by williamleong on 4/20/15.
 */

Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('attachments', function() {
  return Attachments.find();
});