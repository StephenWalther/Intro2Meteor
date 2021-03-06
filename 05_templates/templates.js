if (Meteor.isClient) {


    Template.templates.helpers({
        someProduct: function() {
            return {
                name: 'Tesla Roadster',
                price: 120000.555555555,
                onSale: true
            };
        },

        listProducts: function() {
            return Collections.products.find();
        },

        formatPrice: function(price) {
            price = price || 0;
            return '$' + price.toFixed(2);
        },

        renderPrice: function() {
            var price = this.price || 0;

            // this = current data context = product
            return '$' + price.toFixed(2);
        }

    });




}
