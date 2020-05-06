var Message = Backbone.Model.extend({
    urlRoot: "/api/messages",
});

var Messages = Backbone.Collection.extend({
    model: Message,

    url: "/api/messages.json",
});

export {Message, Messages}