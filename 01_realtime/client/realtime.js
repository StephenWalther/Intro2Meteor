

Template.realtime.products = function() {
    return Collections.products.find();
};


Template.realtime.events({

    'submit': function(e, template) {
        e.preventDefault();

        var newProductName = template.find('#newProductName').value;

        Collections.products.insert({
            name: newProductName
        });

        e.target.reset();
    },

    'click .delete': function(e, template) {
        e.preventDefault();

        Collections.products.remove(this._id);
    }
});