//Router.map(function() {
//    this.route('home', {path: '/'})
//    this.route('realtime', {path: 'realtime'});
//    this.route('javaScriptEverywhere', {path: 'javaScriptEverywhere'});
//    this.route('reactive', {path: 'reactive'});
//    this.route('reactive2', {path: 'reactive2'});
//    this.route('hotCode', {path: 'hotCode'});
//    this.route('templates', {path: 'templates'});
//    this.route('inclusion', {path: 'inclusion'});
//    this.route('collections', {path: 'collections'});
//    this.route('methods', {path: 'methods'});
//
//});

Router.route('/', function() {
   this.render('home');
});
Router.route('/realtime');
Router.route('/javaScriptEverywhere');
Router.route('/reactive');
Router.route('/reactive2');
Router.route('/hotCode');
Router.route('/templates');
Router.route('/inclusion');
Router.route('/collections');
Router.route('/methods');
