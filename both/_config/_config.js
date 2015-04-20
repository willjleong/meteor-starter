/**
 * Created by williamleong on 4/20/15.
 */

Config = {
  name: 'My App',
  title: 'Make Meteor Apps. Fast.',
  subtitle: 'A boilerplate from MeteorFactory.io',
  logo: function() {
    return '<b>' + this.name + '</b>';
  },
  footer: function() {
    return this.name + ' - Copyright ' + new Date().getFullYear();
  },
  emails: {
    from: 'noreply@' + Meteor.absoluteUrl()
  },
  blog: 'http://meteorfactory.io',
  about: 'http://meteorfactory.io',
  username: false,
  homeRoute: '/',
  dashboardRoute: '/dashboard',
  socialMedia: {
    facebook: {
      url: 'http://facebook.com/benjaminpeterjones',
      icon: 'facebook'
    },
    twitter: {
      url: 'http://twitter.com/BenPeterJones',
      icon: 'twitter'
    },
    github: {
      url: 'http://github.com/yogiben',
      icon: 'github'
    },
    info: {
      url: 'http://meteorfactory.io',
      icon: 'link'
    }
  },
  publicRoutes: ['home']
};