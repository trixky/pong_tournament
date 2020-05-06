import { Chatrooms, Chatroom } from "../BackboneModel/chat_list_model"
import { UsersChatroom } from "../BackboneModel/users_chatroom_model"
import { Friend, Friends } from "../BackboneModel/friend_list_model"
import { Battle, Battles } from "../BackboneModel/battle_list_model"
import { Ban } from "../BackboneModel/ban_model"


var FriendListView = Backbone.View.extend({

    initialize: function (options) {
        this.bus = options.bus;
    },

    events: {
        "click .speech-friend": "onClick"
    },

    onClick: function (e) {
        this.bus.trigger("friendChatroomSelected", this.model)
    },

    render: function () {
        var right_buttons = '<p class="speech-friend social-hover">💬</p><p class="mute-friend social-hover">' + (this.model.get("i_mute") ? '🔇' : '🔉') + '</p><p class="flb quite-friend social-hover">✖</p>'
        this.$el.html('<li class="friend">\
            <p class="friend-name ' + (this.model.get('onsite') == true ? 'green-dot ' : 'red-dot ') + 'social-hover">' + this.model.get("pseudo") + '</p>' + right_buttons + '</li>')
        return this;
    }
});

var FriendListViews = Backbone.View.extend({
    el: ".friend-list",

    initialize: function (options) {
        var self = this;
        this.friends = new Friends();
        this.search_is_open = false;
        this.bus = options.bus;
        this.users = options.users;
        this.profilView = options.profilView;
        this.bus.on("refreshFriendsList", this.refreshFriendsList, this);
    },

    refreshFriendsList: function (e) {
        if (e.status != undefined) {
            if (e.status) {
                $(".friend-name:contains('" + e.pseudo + "')").addClass('green-dot')
                $(".friend-name:contains('" + e.pseudo + "')").removeClass('red-dot')
            } else {
                $(".friend-name:contains('" + e.pseudo + "')").addClass('red-dot')
                $(".friend-name:contains('" + e.pseudo + "')").removeClass('green-dot')
            }
        }
    },

    generateSearchList: function () {
        var self = this;
        $("#search-friend-corps").html('<ul id="friend-search-list">\
        </ul>');
        this.users.fetch({ data: { pseudo: $("#input-button-search-friend").val(), findby: "friend" } }).then(function () {
            $("#friend-search-list").html("");
            self.users.each(function (user) {
                $("#friend-search-list").append('<li class="friend">\
                <p class="title-friend-search social-hover">' +
                    user.get("pseudo") + '</p>' +
                    (user.get("blocked") == false && user.get("invitation") != "cant_do_anything" ? '<p class="user-invitation social-hover">' + (user.get("invitation") == "can_invite" ? '✋' : '❌') + '</p>' : '') +
                    (user.get("blocked") == false && user.get("battle") != "cant_do_anything" ? '<p class="user-challenge social-hover">' + (user.get("battle") == "can_invite" ? '⚔' : '❌') + '</p>' : '') +
                    (user.get("are_friend") == false ? '<p class="user-ban social-hover">' + (user.get("blocked") == true ? '🏴' : '🏳') + '</p>' : '') +
                    '</li>')
            })
            $("p.title-friend-search").click(function (e) {
                self.profilView.render(self, e);
            })
            $(".user-invitation").click(function (e) {
                if ($(e.currentTarget).html() == '✋') {
                    var friend = new Friend({ pseudo: $(e.currentTarget).prev().html() })
                    friend.save().then(function () {
                        self.render();
                    })
                } else if ($(e.currentTarget).html() == '❌') {
                    var friend = new Friend({ id: $(e.currentTarget).prev().html() })
                    friend.destroy().then(function () {
                        self.render();
                    })
                }
            })
            $(".user-challenge").click(function (e) {
                var left_pseudo = $(e.currentTarget).prev().html();
                if (left_pseudo == '✋' || left_pseudo == '❌')
                    left_pseudo = $(e.currentTarget).prev().prev().html();
                if ($(e.currentTarget).html() == '⚔') {
                    var battle = new Battle({ pseudo: left_pseudo, type_battle: 'casual' })
                    battle.save().then(function () {
                        self.render();
                    })
                } else if ($(e.currentTarget).html() == '❌') {
                    var battle = new Battle({ id: left_pseudo })
                    battle.destroy({ data: { type_battle: 'casual' }, processData: true }).then(function () {
                        self.render();
                    })
                }
            })
            $(".user-ban").click(function (e) {
                var left_pseudo = $(e.currentTarget).prev().html();
                if (left_pseudo == '✋' || left_pseudo == '❌' || left_pseudo == '⚔') {
                    left_pseudo = $(e.currentTarget).prev().prev().html();
                    if (left_pseudo == '✋' || left_pseudo == '❌' || left_pseudo == '⚔') {
                        left_pseudo = $(e.currentTarget).prev().prev().prev().html();
                    }
                }
                if ($(e.currentTarget).html() == '🏴') {
                    var ban = new Ban({ id: left_pseudo, new_status: false })
                    ban.save().then(function () {
                        self.render();
                    })
                } else if ($(e.currentTarget).html() == '🏳') {
                    var ban = new Ban({ id: left_pseudo, new_status: true })
                    ban.save().then(function () {
                        self.render();
                    })
                }
            })
        });
    },

    events: {
        "click #right-button-friend": "onClickForSearch",
        "click .user-leave": "onClickForLeave"
    },

    onClickForSearch: function () {
        var self = this;
        if (this.search_is_open == false) {
            $("#friend-list").prepend('<div id="search-friend">\
                    <input type="text" id="input-button-search-friend"><p class="show-more-friend social-hover">C</p>\
                    <div id="search-friend-corps">\
                    </div>\
                </div>')
            $("#input-button-search-friend").keyup(function (e) {
                self.generateSearchList();
            })
            self.generateSearchList();
            $("#right-button-friend").html("−")
            $("#right-button-friend").css("background", "red")
            this.search_is_open = true;
        }
        else {
            $("#right-button-friend").html("✚")
            $("#right-button-friend").css("background", "green")
            $("#search-friend").remove()
            this.search_is_open = false;
        }
    },

    quite_friend: function () {
        var self = this;
        $(".quite-friend").click(function (e) {
            var friend = new Friend({ id: $(e.currentTarget).prev().prev().prev().html() })
            friend.destroy().then(function () {
                self.render();
            })
        })
    },

    mute_friend: function () {
        var self = this;
        $(".mute-friend").click(function (e) {
            var mute = $(e.currentTarget).html() == '🔉' ? true : false;
            var friend = new Friend({ id: $(e.currentTarget).prev().prev().html(), order: 'mute-friend', mute: mute })
            friend.save().then(function () {
                if (!mute && $("#chat-top-bar > p#center").html() == $(e.currentTarget).prev().prev().html()) {
                    self.bus.trigger("friendChatroomRefresh", this.model)
                }
                self.render();
            })
        })
    },

    render: function () {
        var self = this;

        self.ProfilIsOpen = false;
        this.search_is_open = false
        this.$el.html('<div id="friend-list">\
            <div id="friend-list-top-bar">\
                <p id="center-friend-list-top-bar">YourFriends</p><p id="right-button-friend" class="social-hover">✚</p>\
            </div>\
            <ul id="friend-list-container">\
            </ul>\
            </div>');
        $("#right-button-friend").css("background", "green")
        self.model.fetch().then(function () {
            self.$el.find("ul#friend-list-container").html('')
            self.model.each(function (friend) {
                var friendListView = new FriendListView({ model: friend, bus: self.bus })
                self.$el.find("ul#friend-list-container").append(friendListView.render().$el);
            })
            self.quite_friend();
            self.mute_friend();
            $(".friend-name.social-hover").click(function (e) {
                self.profilView.render(self, e);
            });
            return self;
        })
    }
});

export { FriendListViews }
