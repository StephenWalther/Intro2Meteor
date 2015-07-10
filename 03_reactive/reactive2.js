
if (Meteor.isClient) {



        // template functions are a reactive context
        Template.reactive2.helpers({
            listProducts: function() {

                // collections are a reactive data source
                return Collections.products.find();
            }
        });


}