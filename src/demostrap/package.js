Package.describe({
  summary: "A smart package of common trix for my growing collection of bootstrap based demos"
});

Package.on_use(function (api) {
  api.use('environment-hooks', ['client', 'server']);
  api.use('dev-trix', ['client', 'server']);
  api.use('code-demo', ['client', 'server']);
  api.use('dev-trix', ['client', 'server']);
  api.use('simple-secure', 'server');
  api.use('backbone', 'client');
  api.use('bootstrap', 'client');
  api.use('tabs', 'client');
  api.use('jquery', 'client');

  api.add_files('demo.css', 'client');
  api.add_files('common.js', ['client', 'server']);
});
