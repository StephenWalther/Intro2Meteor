


Router.map(function() {

    this.route('pageA', {
        path: '/pageA'
    });

    this.route('pageB', {
        path: '/pageB'
    });



    this.route('productList', {
        path: '/productList'
    });


    this.route('productDetail', {
        path: '/productDetail/:_id',
        data: function() {
            return Collections.products.findOne(this.params._id);
        }
    });


});