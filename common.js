Appstrap = function(options) {
  var self = this;

  _.extend(self, options);

  this.codeDemo = _.isBoolean(this.codeDemo) ? this.codeDemo : true;

  self._establishEnv();

  if (Meteor.is_client) {
    self._showForkMe();
    
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
  new ForkMe(this.github);
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
