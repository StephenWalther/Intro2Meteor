



if (Meteor.isServer) {

    if (Collections.products.find().count() === 0) {
        Collections.products.insert({name:'Milk', price:5.6666});
        Collections.products.insert({name:'Cheese', price:89.888});
        Collections.products.insert({name:'Strudel', price:2.9999});
        Collections.products.insert({name:'Steak', price:66.8999});
    }

}


