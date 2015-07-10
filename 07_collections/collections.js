// Global variable
Fruit = new Meteor.Collection('fruit');


if (Meteor.isServer) {
    // seed the collection
    if (Fruit.find().count() === 0) {
        Fruit.insert({name:'Apples', price:7.99}),
        Fruit.insert({name:'Apples', price:2.99}),
        Fruit.insert({name:'Oranges', price:12.99}),
        Fruit.insert({name:'Lemons', price:14.99}),
        Fruit.insert({name:'Strawberries', price:2.99})
    }
}

if (Meteor.isClient) {

    Template.collections.helpers({
        listFruit: function() {
            // get all fruit with a price greater than 6 and sort by the name
            var results = Fruit.find({price:{$gt:6}}, {sort:{name:1}});
            return results;
        }
    });


}





