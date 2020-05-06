var Notification = Backbone.Model.extend({
    urlRoot: "/api/notifications",
});

var Notifications = Backbone.Collection.extend({
    model: Notification,

    url: "/api/notifications.json",
});

export {Notification, Notifications}