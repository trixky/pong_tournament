var FriendsMessage = Backbone.Model.extend({
    urlRoot: "/api/friendsmessages",
});

var FriendsMessages = Backbone.Collection.extend({
    model: FriendsMessage,

    url: "/api/friendsmessages.json",
});

export { FriendsMessage, FriendsMessages }