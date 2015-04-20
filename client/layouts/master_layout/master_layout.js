/**
 * Created by williamleong on 4/20/15.
 */

Template.masterLayout.events({
  'click .toggle-sidebar': function() {
    if ($('body').hasClass('sidebar-active')) {
      return $('body').removeClass('sidebar-active');
    } else {
      return $('body').addClass('sidebar-active');
    }
  },
  'click .open-sidebar': function() {
    return $('body').addClass('sidebar-active');
  },
  'click .close-sidebar': function() {
    return $('body').removeClass('sidebar-active');
  }
});