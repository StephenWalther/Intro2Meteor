


function add(productToAdd) {

    // validation
    if (!productToAdd.name) {
        throw new Meteor.Error(400, 'Product must include name!');
    }
    if (!productToAdd.price) {
        throw new Meteor.Error(400, 'Product must include price!');
    }
    if (productToAdd.price < 0) {
        throw new Meteor.Error(400, 'Product price must be greater than zero!');
    }

    // insert into db
    Collections.products.insert(productToAdd);
}


// exports
Meteor.methods({
   'productMethods.add': add
});