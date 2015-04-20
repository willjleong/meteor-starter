/**
 * Created by williamleong on 4/20/15.
 */

var prepareView, publicRoutes, saveRedirectUrl, signInProhibited, signInRequired;

Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  routeControllerNameConverter: "camelCase",
  onBeforeAction: function() {
    if (Config.username && Meteor.userId() && !Meteor.user().username) {
      this.redirect('/setUserName');
    }
    return this.next();
  }
});

Router.map(function() {
  this.route("home", {
    path: "/",
    layoutTemplate: "homeLayout"
  });
  this.route("dashboard", {
    path: "/dashboard",
    waitOn: function() {
      return [Meteor.subscribe('posts'), Meteor.subscribe('favorites'), Meteor.subscribe('comments'), Meteor.subscribe('attachments')];
    },
    onBeforeAction: function() {
      var url;
      url = Session.get('redirectToAfterSignIn');
      if (url) {
        Session.set('redirectToAfterSignIn', null);
        Router.go(url);
      }
      return this.next();
    },
    data: function() {
      return {
        Posts: Posts.find({}, {
          sort: {
            createdAt: -1
          }
        }).fetch()
      };
    }
  });
  this.route("profile", {
    path: "/profile",
    waitOn: function() {
      return Meteor.subscribe('profilePictures');
    }
  });
  this.route("account", {
    path: "/account",
    onStop: function() {
      return Alert.clear();
    }
  });
  return this.route("setUserName", {
    path: "/setUserName",
    onBeforeAction: function() {
      if (!Config.username || (Meteor.userId() && Meteor.user().username)) {
        this.redirect('/dashboard');
      }
      return this.next();
    }
  });
});

Router.waitOn(function() {
  Meteor.subscribe('user');
  return Meteor.subscribe('userPicture');
});

prepareView = function() {
  var $bd,$body;
  $bd = $('.modal-backdrop');
  $body = $('body');
  window.scrollTo(0, 0);
  $body.removeClass('sidebar-active');
  $bd.removeClass('in');
  setTimeout(function() {
    return $bd.remove();
  }, 300);
  return $body.attr('style', '');
};

Router.onAfterAction(prepareView);

signInRequired = function() {
  AccountsEntry.signInRequired(this);
  if (this.next) {
    return this.next();
  }
};

saveRedirectUrl = function() {
  if (!Meteor.loggingIn()) {
    if (!Meteor.user()) {
      Session.set('redirectToAfterSignIn', this.url);
    }
  }
  return this.next();
};

publicRoutes = _.union(Config.publicRoutes, ['entrySignIn', 'entrySignUp', 'entryForgotPassword']);

Router.onBeforeAction(saveRedirectUrl, {
  except: _.union(publicRoutes, ['entrySignOut'])
});

Router.onBeforeAction(signInRequired, {
  except: publicRoutes
});

signInProhibited = function() {
  if (Meteor.user()) {
    return Router.go('dashboard');
  } else {
    if (this.next) {
      return this.next();
    }
  }
};

Router.onBeforeAction(signInProhibited, {
  only: ['entrySignUp', 'entrySignUp', 'entryForgotPassword']
});