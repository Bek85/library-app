import EmberRouter from '@ember/routing/router';
import config from 'library-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact');

  this.route('admin', function () {
    this.route('invitations');
  });
  this.route('libraries', function () {
    this.route('new');
  });
});
