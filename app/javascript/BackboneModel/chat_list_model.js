var Chatroom = Backbone.Model.extend({
    urlRoot: "/api/chatrooms",
});

var Chatrooms = Backbone.Collection.extend({
    model: Chatroom,

    url: "/api/chatrooms.json",
});

export {Chatroom, Chatrooms}