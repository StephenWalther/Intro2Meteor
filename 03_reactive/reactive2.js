
if (Meteor.isClient) {



        // template functions are a reactive context
        Template.reactive2.listProducts = function() {

            // collections are a reactive data source
            return Collections.products.find();
        }






}