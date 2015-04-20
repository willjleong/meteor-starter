/**
 * Created by williamleong on 4/20/15.
 */

NCSchemas = {};

NCSchemas.updatePassword = new SimpleSchema({
  old: {
    type: String,
    label: "Current Password",
    max: 50
  },
  "new": {
    type: String,
    min: 6,
    max: 20,
    label: "New Password"
  },
  confirm: {
    type: String,
    min: 6,
    max: 20,
    label: "Confirm new Password"
  }
});