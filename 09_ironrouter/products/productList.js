
if (Meteor.isClient) {

    Template.productList.helpers({
        listProducts: function() {
            return Collections.products.find();
        }
    });


}
