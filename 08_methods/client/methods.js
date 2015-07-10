

Template.methods.events({

   'submit': function(e, template){
       e.preventDefault();

       var productToAdd = {
           name: template.find('#productName').value,
           price: template.find('#productPrice').value
       };

       Meteor.call('productMethods.add', productToAdd, function(err, result) {
           // oh no!  An error!
           if (err) {
               // show 400 error messages
               if (err.error === 400) {
                   Session.set('validationResult', err.reason);
               } else {
                   // otherwise, show a generic error message
                   Session.set('validationResult', 'Could not insert product.');
               }
           } else {
               // otherwise, success!
               Session.set('validationResult', 'New product added!');
               e.target.reset();
           }
       });

   }

});



Template.methods.helpers({
    validationResult: function() {
        return Session.get('validationResult');
    },

    listProducts: function() {
        return Collections.products.find();
    }
});

