import { channel_gen } from "../channels/chat_channel"
import consumer from "../channels/consumer"
import { Friend, Friends } from "../BackboneModel/friend_list_model"
import { Battle, Battles } from "../BackboneModel/battle_list_model"
import { FriendsMessage, FriendsMessages } from "../BackboneModel/friends_message_model"

var ChatFriendMessageView = Backbone.View.extend({

    render: function () {
        var date = new Date(this.model.get("date"));
        var date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();

        this.$el.html('<li class="message"><p class="user-message">' + this.model.get("username") + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + this.model.get("content") + '</p></li>')
        return this;
    }
});

var ChatMessageView = Backbone.View.extend({

    render: function () {
        var date = new Date(this.model.get("date"));
        var date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();

        this.$el.html('<li class="message"><p class="user-message">' + this.model.get("username") + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + this.model.get("content") + '</p></li>')
        return this;
    }
});

var ChatNotificationView = Backbone.View.extend({

    render: function () {
        var date = new Date(this.model.get("date"));
        var date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
        
        if (this.model.get("type") != undefined) {
            if (this.model.get("type") == 'friend-request') {
                this.$el.html('<li class="notification"><p class="time-notification-message">' + date_string + '</p><br><p class="content-notification">' + this.model.get("value") + '</p><p class="accept-notification social-hover">✓</p><p class="decline-notification social-hover">✖</p></li>')
            }
            else if (this.model.get("type") == 'casual-battle') {
                this.$el.html('<li class="notification"><p class="time-notification-message">' + date_string + '</p><br><p class="content-notification">' + this.model.get("value") + '</p><p class="accept-notification social-hover">⚔</p><p class="decline-notification social-hover">✖</p></li>')
            }
        }
        return this;
    }
});

var ChatViews = Backbone.View.extend({
    el: ".chat-message",

    disconnected: function (room) {
        if (room != undefined) {
            for (var i = 0; i < consumer.subscriptions.subscriptions.length; i++) {
                if (JSON.parse(consumer.subscriptions.subscriptions[i].identifier).room == room &&
                JSON.parse(consumer.subscriptions.subscriptions[i].identifier).channel == "ChatChannel") {
                    consumer.subscriptions.subscriptions[i].unsubscribe();
                };
            };
        }
    },

    initialize: function (options) {
        this.notificationInChat = false;
        this.friendInChat = undefined;
        this.bus = options.bus;
        this.bus.on("chatroomSelected", this.chatroomSelected, this);
        this.bus.on("chatroomRefresh", this.chatroomRefresh, this);
        this.bus.on("notificationReceived", this.notificationReceived, this);
        this.bus.on("notificationSelected", this.notificationSelected, this);
        this.bus.on("friendChatroomSelected", this.friendChatroomSelected, this);
        this.bus.on("friendChatroomRefresh", this.friendChatroomRefresh, this);
        this.bus.on("leaveChatroom", this.leaveChatroom, this);
        this.message_model = options.message_model;
        this.notifications = options.notifications;
        this.friendsMessages = options.friendsMessages;
    },

    select_chatroom_connection: function () {
        if (this.chatroom_model != undefined) {
            for (var i = 0; i < consumer.subscriptions.subscriptions.length; i++) {
                if (JSON.parse(consumer.subscriptions.subscriptions[i].identifier).room == this.chatroom_model.get("name") &&
                JSON.parse(consumer.subscriptions.subscriptions[i].identifier).channel == "ChatChannel") {
                    return (consumer.subscriptions.subscriptions[i]);
                };
            };
        }
    },

    chatroomRefresh: function (data) {
        if (this.chatroom_model != undefined && data["messageContent"] == this.chatroom_model.get("name"))
            this.render()
    },

    select_user_connection: function () {
        for (var i = 0; i < consumer.subscriptions.subscriptions.length; i++) {
            if (JSON.parse(consumer.subscriptions.subscriptions[i].identifier).channel == 'UserChannel') {
                return (consumer.subscriptions.subscriptions[i]);
            };
        };
    },

    chatroomSelected: function (chatroom) {
        this.notificationInChat = false;
        this.friendInChat = undefined;
        var needToDisconnect = this.chatroom_model == undefined;
        if (needToDisconnect || chatroom.get("name") != this.chatroom_model.get("name")) {
            if (!needToDisconnect) {
                this.disconnected(this.chatroom_model.get("name"));
            }
            this.chatroom_model = chatroom;
            this.render();
        }
    },

    friendChatroomRefresh: function () {
        this.render()
    },

    notificationReceived: function () {
        var self = this;
        self.notifications.fetch().then(function () {
            if (self.notifications.length > 0) {
                $(".title-notification").addClass("notification-blink")
            } else {
                $(".title-notification").removeClass("notification-blink")
            }
        })
    },

    notificationSelected: function () {
        this.notificationInChat = true;
        this.friendInChat = undefined;
        if (this.chatroom_model != undefined) {
            this.disconnected(this.chatroom_model.get("name"));
            this.chatroom_model = undefined;
        }
        $(".title-notification").removeClass("notification-blink")
        this.render();
    },

    friendChatroomSelected: function (friend) {
        this.friendInChat = friend.get("pseudo");
        this.notificationInChat = false;
        if (this.chatroom_model != undefined) {
            this.disconnected(this.chatroom_model.get("name"));
            this.chatroom_model = undefined;
        }
        $("#chat-top-bar > p#center").data("friend-chat-open", "true");
        this.render();
    },

    leaveChatroom: function (chatroom_name) {
        this.notificationInChat = false;
        if (this.chatroom_model && this.chatroom_model.get("name") == chatroom_name) {
            this.disconnected(chatroom_name);
            this.chatroom_model = undefined;
            this.notificationInChat = false;
            this.render();
        }
    },

    events: {
        "click #input-button": "onClick",
        "keydown": "keyDown"
    },

    onClick: function () {
        this.sendMessage();
    },

    keyDown: function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            this.sendMessage();
        }
    },

    sendMessage: function () {
        if (this.chatroom_model) {
            if (this.friendInChat == undefined) {
                this.select_chatroom_connection().send({ messageContent: $("#input_content").val() })
            }
        } else if ($("#chat-top-bar > p#center").attr("friend-chat-open") != undefined) {
            this.select_user_connection().send({ recipient: $("#chat-top-bar > p#center").html() , messageContent: $("#input_content").val() })
        }
        $("#input_content").val("");
    },

    render: function () {
        var self = this;
        if (this.chatroom_model) {
            channel_gen("ChatChannel", this.chatroom_model.get("name"), "", undefined);
        }

        this.$el.html('<div id="chat-message">\
            <div id="chat-top-bar">\
                <p id="center">no chatroom selected</p>\
            </div>\
            <ul id="message-container">\
            </ul>\
            <div id="inputs">\
                <input type="text" id="input_content" placeholder="your message...">\
                <button id="input-button">send</button>\
            </div>\
        </div> ');

        if (this.friendInChat != undefined) {
            $("#chat-top-bar > p#center").attr("friend-chat-open", "true");
        }

        if (this.chatroom_model) {
            $("#chat-top-bar > p#center").html(this.chatroom_model.get("name"))
            this.message_model.fetch({ data: { chatroom_name: this.chatroom_model.get("name") } }).then(function () {
                self.message_model.each(function (message) {
                    var chatMessageView = new ChatMessageView({ model: message })
                    self.$el.find("#message-container").append(chatMessageView.render().$el);
                })
                $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
            });
        }
        else if (this.notificationInChat == true) {
            $("#chat-top-bar > p#center").html('notification')
            self.notifications.fetch().then(function () {
                self.$el.find("#message-container").html('')
                self.notifications.each(function (notification) {
                    var chatNotificationView = new ChatNotificationView({ model: notification })
                    self.$el.find("#message-container").append(chatNotificationView.render().$el);
                })
                $(".accept-notification").click(function (e) {
                    if ($(e.currentTarget).html() == '✓') {
                        var friend = new Friend({ id: $(e.currentTarget).prev().html(), order: 'accept-invitation' })
                        friend.save().then(function () {
                            self.bus.trigger("refreshFriendsList", self)
                            self.render();
                        })
                    }
                    else if ($(e.currentTarget).html() == '⚔') {
                        var battle = new Battle({ id: $(e.currentTarget).prev().html(), type_battle: 'casual' })
                        battle.save().then((res)=> {
                            if (res && res["error"])
                                alert("user not connected");
                            self.render();
                        })
                    }
                })
                $(".decline-notification").click(function (e) {
                    if ($(e.currentTarget).prev().html() == '✓') {
                        var friend = new Friend({ id: $(e.currentTarget).prev().prev().html(), order: 'decline-invitation' })
                        friend.save().then(function () {
                            self.bus.trigger("refreshFriendsList", self)
                            self.render();
                        })
                    }
                    else if ($(e.currentTarget).prev().html() == '⚔') {
                        var battle = new Battle({ id: $(e.currentTarget).prev().prev().html() })
                        battle.destroy({ data: { type_battle: 'casual' }, processData: true }).then(function () {
                            self.render();
                        })
                    }
                })
            })
        }
        else if (this.friendInChat != undefined) {
            var self = this;
            $("#chat-top-bar > p#center").html(this.friendInChat)
            this.friendsMessages.fetch().then(function () {
                self.friendsMessages.each(function (friendMessage) {
                    var chatFriendMessageView = new ChatFriendMessageView({ model: friendMessage })
                    self.$el.find("#message-container").append(chatFriendMessageView.render().$el);
                })
                $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
            })
        }
        return this;
    }
})

export { ChatViews }
