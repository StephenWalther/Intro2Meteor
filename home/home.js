if (Meteor.isClient) {

    Template.home.routeList = function() {
        return Router.routes;
    };

    Template.home.events({
        'click a': function(e, template) {
            Router.go(this.name);
        }

    });



}
