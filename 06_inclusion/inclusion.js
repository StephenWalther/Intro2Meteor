if (Meteor.isClient) {


    Template.inclusion.helpers({
        listProducts: function() {
            return Collections.products.find();
        }

    });


}