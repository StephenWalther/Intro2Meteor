
if (Meteor.isClient) {

    Template.productList.listProducts = function() {
        return Collections.products.find();
    }



}
