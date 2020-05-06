var User = Backbone.Model.extend({
    urlRoot: "/api/users",
    default:
    {
        two_factor: false,
        victory: 0,
        loss: 0,
        status: "",
        banned: false
    }
})

var UsersCollection = Backbone.Collection.extend({
    model: User,
    url: "/api/users"
});

var usersCollection = new UsersCollection;
var usersCollection_2 = new UsersCollection;
var Users = new UsersCollection;

export {User, usersCollection, usersCollection_2, UsersCollection}
