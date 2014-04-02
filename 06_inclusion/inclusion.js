if (Meteor.isClient) {


    Template.inclusion.listProducts = function() {
        return Collections.products.find();
    }


}