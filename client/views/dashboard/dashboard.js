/**
 * Created by williamleong on 4/20/15.
 */

AutoForm.hooks({
  add: {
    onError: function(operation, error) {
      return App.alertError(error);
    }
  }
});