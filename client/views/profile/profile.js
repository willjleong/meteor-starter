/**
 * Created by williamleong on 4/20/15.
 */

AutoForm.hooks({
  updateProfile: {
    onSuccess: function(operation, result, template) {
      return Alert.success('Profile picture updated');
    },
    onError: function(operation, error, template) {
      return Alert.error('Profile picture updated');
    }
  },
  updatePicture: {
    onSuccess: function(operation, result, template) {
      return App.alertSuccess('Picture Updated');
    },
    onError: function(operation, error, template) {
      return App.alertError(error);
    }
  }
});