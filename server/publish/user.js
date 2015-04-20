/**
 * Created by williamleong on 4/20/15.
 */

Meteor.publish('user', function() {
  return Meteor.users.find(this.userId);
});

Meteor.publish('users', function() {
  return Meteor.users.find({}, {
    fields: {
      profile: 1,
      emails: 1
    }
  });
});

Meteor.publish('userPicture', function() {
  var _id;
  if (Meteor.users.findOne({
      _id: this.userId
    }) && Meteor.users.findOne({
      _id: this.userId
    }).profile) {
    _id = Meteor.users.findOne({
      _id: this.userId
    }).profile.picture;
    return ProfilePictures.find({
      _id: _id
    });
  } else {
    return this.ready();
  }
});

Meteor.publish('profilePictures', function() {
  return ProfilePictures.find();
});