var Friend = Backbone.Model.extend({
    urlRoot: "/api/friends",
});

var Friends = Backbone.Collection.extend({
    model: Friend,

    url: "/api/friends.json",
});

export {Friend, Friends}