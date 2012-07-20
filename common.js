Appstrap = function(options) {
  var self = this;

  _.extend(self, options);

  this.codeDemo = _.isBoolean(this.codeDemo) ? this.codeDemo : true;

  self._establishEnv();

  if (Meteor.is_client) {
    Meteor.startup(function() {
      self._showForkMe();
    });
    
    self._setupTabs();
  } else {
    self._initCodeDemo();
  }
};

// Might as well make them look like mustache templates
_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

Appstrap.prototype._showForkMe = function() {
  var self = this;

  // Setup context
  self.githubUrl = _.template('https://github.com/{{github.user}}/{{github.repo}}')(self);
  self.githubBannerImg = 'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png';
  self.githubBannerAlt = 'Fork me on GitHub';

  // Compile banner template
  var bannerTemplate = _.template('<a href="{{githubUrl}}"><img class="githubBanner" src="{{githubBannerImg}}" alt="{{githubBannerAlt}}"></a>');

  $('body').append($(bannerTemplate(self)));
};

Appstrap.prototype._initCodeDemo = function() {
  if (this.github && this.codeDemo)
    CodeDemo.load(this.github);
};

Appstrap.prototype._establishEnv = function() {
  new MeteorEnv({
    hosts: this.hosts
  });
};

Appstrap.prototype._setupTabs = function() {
  new Tabs(this.tabs.name, this.tabs.tabs);
};
