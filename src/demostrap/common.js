Demo = function(options) {
  var self = this;

  _.extend(self, options);

  this.simpleDemo = _.isBoolean(this.simpleDemo) ? this.simpleDemo : true;

  self._establishEnv();

  if (Meteor.is_client) {
    Meteor.startup(function() {
      self._showForkMe();
    });
  } else {
    self._initSimpleDemo();
  }
};

// Might as well make them look like mustache templates
_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

Demo.prototype._showForkMe = function() {
  var self = this;

  // Setup context
  self.githubUrl = _.template('https://github.com/{{github.user}}/{{github.repo}}')(self);
  self.githubBannerImg = 'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png';
  self.githubBannerAlt = 'Fork me on GitHub';

  // Compile banner template
  var bannerTemplate = _.template('<a href="{{githubUrl}}"><img class="githubBanner" src="{{githubBannerImg}}" alt="{{githubBannerAlt}}"></a>');

  $('body').append($(bannerTemplate(self)));
};

Demo.prototype._initSimpleDemo = function() {
  if (this.github && this.simpleDemo)
    SimpleDemo.load(this.github);
};

Demo.prototype._establishEnv = function() {
  new MeteorEnv({
    hosts: this.hosts
  });
};
