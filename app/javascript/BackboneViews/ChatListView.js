import { Chatrooms, Chatroom } from "../BackboneModel/chat_list_model"
import { UsersChatroom } from "../BackboneModel/users_chatroom_model"

var NotificationView = Backbone.View.extend({

    initialize: function (options) {
        this.bus = options.bus;
    },

    events: {
        "click .title-notification": "onClick"
    },

    onClick: function () {
        this.bus.trigger("notificationSelected", this)
    },

    render: function () {
        this.$el.html('<li class="notification"><p class="title-notification social-hover">' + "notification" + '</p></li>')
        return this;
    }
})

var ChatroomView = Backbone.View.extend({

    initialize: function (options) {
        this.bus = options.bus;
    },

    events: {
        "click .title-chatroom": "onClick"
    },

    onClick: function () {
        this.bus.trigger("chatroomSelected", this.model)
    },

    render: function () {
        this.$el.html('<li class="chatroom"><p class="title-chatroom social-hover">' + this.model.get("name") + '</p><p class="subscribers-grade' + (this.model.get("owner") || this.model.get("admin") == true ? ' social-hover' : '') + '">' + (this.model.get("owner") == true ? '♔' : (this.model.get("admin") == true ? '♗' : '♙')) + '</p><p class="user-leave social-hover">⎋</p></li>')
        return this;
    }
});


var ChatListViews = Backbone.View.extend({
    el: ".chat-list",

    initialize: function (options) {
        var self = this;
        this.chatrooms = new Chatrooms();
        this.search_is_open = false;
        this.bus = options.bus;
        this.adminChatroomPannelView = options.adminChatroomPannelView;
        this.notifications = options.notifications;
    },

    generateSearchList: function () {
        var self = this;
        $("#search-corps").html('<ul id="chat-search-list">\
        </ul>');
        this.chatrooms.fetch({ data: { search_entry: $("#input-button-search-chatroom").val() } }).then(function () {
            $("#chat-search-list").html("");
            self.chatrooms.each(function (chatroom) {
                $("#chat-search-list").append('<li class="chatroom"><p class="title-chatroom-search">' + chatroom.get("name") + (chatroom.get("private") ? ' 🔒' : '') + '</p><p class="user-enter social-hover" data-private="' + (chatroom.get("private") ? true : false) + '" data-open="false">⎆</p></li><input type="text" class="pass chatroom-text-input" placeholder="password..." style="display:none;"></input>')
            })
            $(".user-enter").click(function (e) {
                var green_button = this;
                if (green_button.getAttribute("data-private") == 'true') {
                    var password_input = $(e.currentTarget).parent().next()
                    if ($(e.currentTarget).parent().next().attr("style") == "display:none;") {
                        password_input.attr("style", "display:block;")
                        password_input.focus()
                    }
                    else {
                        var userChatroom = new UsersChatroom();
                        var chatroom_name = $(e.currentTarget).parent().children(".title-chatroom-search").html();
                        userChatroom.set({
                            chatroom: chatroom_name.substring(0, chatroom_name.length - 3),
                            password: password_input.val()
                        })
                        userChatroom.save({}, {
                            success: function (model, response) {
                                if (response.created != "success")
                                    alert("imposssible de rejoindre le channel: " + response.created)
                            }
                        }).then(function () {
                            // userChatroom.destroy()
                            self.render();
                        })
                    }
                }
                else {
                    var userChatroom = new UsersChatroom();
                    userChatroom.set({ chatroom: $(e.currentTarget).parent().children(".title-chatroom-search").html() })
                    userChatroom.save({}, {
                        success: function (model, response) {
                            if (response.created != "success")
                                alert("imposssible de rejoindre le channel: " + response.created)
                        }
                    }).then(function () {
                        // userChatroom.destroy()
                        self.render();
                    })
                }
            })
        });
    },

    events: {
        "click #right-button-sub": "onClickForSearch",
        "click .user-leave": "onClickForLeave"
    },

    onClickForSearch: function () {
        var self = this;
        if (this.search_is_open == false) {
            $("#chat-list").prepend('<div id="search-sub">\
                    <input type="text" id="input-button-search-chatroom"></input><p class="private-chatroom-button social-hover">🤫</p><p class="create-chatroom-button social-hover">C</p>\
                    <div id="search-corps">\
                    </div>\
                </div>')
            $("#input-button-search-chatroom").keyup(function (e) {
                self.generateSearchList();
            })
            self.generateSearchList();
            $(".private-chatroom-button").click(function (e) {
                $("#search-corps").html('<div id="div-private-chatroom-search-topbar"><p class="private-chatroom-search-topbar">join private chatroom</p><p class="user-enter-private social-hover">⎆</p></div>\
                    <input class="chatroom-text-input private-input" id="private-chatroom-name-input" placeholder="chatroom name" type="texte"></input>\
                    <input class="pass chatroom-text-input private-input" id="private-chatroom-password-input" placeholder="password" type="text"></input>');
                $(".user-enter-private").click(function (e) {
                    var userChatroom = new UsersChatroom();
                    userChatroom.set({
                        chatroom: $("#private-chatroom-name-input").val(),
                        password: $("#private-chatroom-password-input").val()
                    })
                    userChatroom.save({}, {
                        success: function (model, response) {
                            if (response.created != "success")
                                alert("imposssible de rejoindre le channel: " + response.created)
                        }
                    }).then(function () {
                        // userChatroom.destroy()
                        self.render();
                    })
                })
            })
            $(".create-chatroom-button").click(function (e) {
                $("#search-corps").html('<div id="div-create-chatroom-search-topbar"><p class="create-chatroom-search-topbar">create your chatroom</p><p class="user-enter-create social-hover">⎆</p></div>\
                    <input class="chatroom-text-input create-input" id="private-chatroom-name-input" placeholder="chatroom name" type="texte"></input>\
                    <input class="chatroom-text-input create-input" id="private-chatroom-password-input" placeholder="password" type="text" disabled></input>\
                    <input class="pass chatroom-check-input create-input" id="chatroom-check-password-input" type="checkbox"></input><p class="chatroom-tag-create-input">password</p>\
                    <input class="chatroom-check-input create-input" id="chatroom-check-private-input" type="checkbox"></input><p class="chatroom-tag-create-input">private</p>');
                $(".user-enter-create").click(function (e) {    /* create */
                    var chatroom = new Chatroom();
                    chatroom.set({
                        chatroom: $("#private-chatroom-name-input").val(),
                        protected: $("#chatroom-check-password-input").is(":checked"),
                        password: $("#private-chatroom-password-input").val(),
                        private: !($("#chatroom-check-private-input").is(":checked"))
                    });
                    chatroom.save({}, {
                        success: function (model, response) {
                            if (response.created != "success")
                                alert("imposssible de rejoindre le channel: " + response.created)
                        }
                    }).then(function () {
                        // chatroom.destroy()
                        self.render();
                    })
                })
                $("#chatroom-check-password-input").click(function (e) {    /* password check */
                    if ($("#chatroom-check-password-input").is(":checked")) {
                        $("#private-chatroom-password-input").prop("disabled", false);
                    }
                    else {
                        $("#private-chatroom-password-input").prop("disabled", true);
                        $("#private-chatroom-password-input").val('');
                    }
                })
                $("#chatroom-check-private-input").click(function (e) {    /* private check */
                    if ($("#chatroom-check-private-input").is(":checked")) {
                        $("#private-chatroom-password-input").prop("disabled", false);
                        $("#chatroom-check-password-input").prop("checked", true);
                        $("#chatroom-check-password-input").prop("disabled", true);
                    }
                    else {
                        $("#chatroom-check-password-input").prop("checked", false);
                        $("#chatroom-check-password-input").prop("disabled", false);
                        $("#private-chatroom-password-input").prop("disabled", true);
                        $("#private-chatroom-password-input").val('');
                    }
                })
            })
            $("#right-button-sub").html("−")
            $("#right-button-sub").css("background", "red")
            this.search_is_open = true;
        }
        else {
            $("#right-button-sub").html("✚")
            $("#right-button-sub").css("background", "green")
            $("#search-sub").remove()
            this.search_is_open = false;
        }
    },

    onClickForLeave: function (e) {
        var self = this;

        if ($(e.currentTarget).prev().html() == '♔') {
            alert("attention, en tant que owner de la chatroom, pour quitter celle-ci, vous devez la detruire via le chat-pannel-controller")
        }
        else {
            var userChatroom = new UsersChatroom({id: $(e.currentTarget).parent().children(".title-chatroom").html()});
            userChatroom.destroy().then(function () {
                self.render();
            })
        }
    },

    render: function () {
        var self = this;
        self.panelChatroomAdminIsOpen = false;
        this.search_is_open = false
        this.$el.html('<div id="chat-list">\
            <div id="chat-list-top-bar">\
                <p id="center">YourSubs</p><p id="right-button-sub" class="social-hover">✚</p>\
            </div>\
            <ul id="chat-list-container">\
            </ul>\
            </div>');
        $("#right-button-sub").css("background", "green")
        var notificationView = new NotificationView({ bus: self.bus })
        self.$el.find("ul#chat-list-container").append(notificationView.render().$el);
        self.notifications.fetch().then(function () {
            if (self.notifications.length > 0) {
                $(".title-notification").addClass("notification-blink")
            }
        })
        self.model.fetch().then(function () {
            self.model.each(function (chatroom) {
                var chatroomView = new ChatroomView({ model: chatroom, bus: self.bus })
                self.$el.find("ul#chat-list-container").append(chatroomView.render().$el);
            })

            self.generateSearchList();
            $(".subscribers-grade.social-hover").click(function (e) {
                self.adminChatroomPannelView.render(self, e);
            });

            return self;
        })
    }
});

export { ChatListViews }
