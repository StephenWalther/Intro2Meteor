
//
//
//Router.map(function() {
//
//    this.route('pageA', {
//        path: '/pageA'
//    });
//
//    this.route('pageB', {
//        path: '/pageB'
//    });
//
//
//
//    this.route('productList', {
//        path: '/productList'
//    });
//
//
//    this.route('productDetail', {
//        path: '/productDetail/:_id',
//        data: function() {
//            return Collections.products.findOne(this.params._id);
//        }
//    });
//
//
//});



Router.route('/pageA');
Router.route('/pageB');
Router.route('/productList');
Router.route('/productDetail/:id', function() {
    this.render('productDetail', {
        data: function () {
            return Collections.products.findOne(this.params.id);
        }
    });
});