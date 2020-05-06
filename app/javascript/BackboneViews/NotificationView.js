var NotificationListView = Backbone.View.extend({
    
    initialize: function (options) {
        this.bus = options.bus;
    },

    events: {
        "click .title-chatroom": "onClick"
    },

    onClick: function () {
        this.bus.trigger("notificationSelected", this.model)
    },

    render: function () {
        this.$el.html('<li class="chatroom"><p class="title-chatroom social-hover">' + "notification" + '</p>')
        return this;
    }
})