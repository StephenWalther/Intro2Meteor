if (Meteor.isClient) {

        Template.hotCode.helpers({
            message: function() {
                return 'Blah, blah, blah!';
            }
        });



}