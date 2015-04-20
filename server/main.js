/**
 * Created by williamleong on 4/20/15.
 */

Accounts.onCreateUser(function(options, user) {
  var attachData, email, picture, profileImageUrl, profilePicture, url, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
  profileImageUrl = void 0;
  user.profile = user.profile || {};
  if ((_ref = user.services) != null ? _ref.facebook : void 0) {
    user.emails = [
      {
        address: user.services.facebook.email,
        verified: true
      }
    ];
    user.profile.firstName = user.services.facebook.first_name;
    user.profile.lastName = user.services.facebook.last_name;
  }
  if ((_ref1 = user.services) != null ? _ref1.google : void 0) {
    user.emails = [
      {
        address: user.services.google.email,
        verified: true
      }
    ];
    user.profile.firstName = user.services.google.given_name;
    user.profile.lastName = user.services.google.family_name;
  }
  if ((_ref2 = user.services) != null ? (_ref3 = _ref2.facebook) != null ? _ref3.id : void 0 : void 0) {
    profileImageUrl = 'https://graph.facebook.com/v2.2/' + user.services.facebook.id + '/picture?type=normal';
  }
  if ((_ref4 = user.services) != null ? (_ref5 = _ref4.google) != null ? _ref5.id : void 0 : void 0) {
    profileImageUrl = user.services.google.picture;
  }
  if ((_ref6 = user.services) != null ? (_ref7 = _ref6.twitter) != null ? _ref7.id : void 0 : void 0) {
    profileImageUrl = user.services.twitter.profile_image_url;
  }
  if (profileImageUrl) {
    picture = new FS.File();
    attachData = Meteor.wrapAsync(picture.attachData, picture);
    attachData(profileImageUrl);
    picture.name('picture' + user._id);
    profilePicture = ProfilePictures.insert(picture);
    user.profile = {
      picture: profilePicture._id
    };
  } else {
    email = ((_ref8 = user.emails) != null ? (_ref9 = _ref8[0]) != null ? _ref9.address : void 0 : void 0) || '';
    url = Gravatar.imageUrl(email);
    user.profile = {
      picture: url
    };
  }
  return user;
});