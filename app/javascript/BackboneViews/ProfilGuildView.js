import { Users, User, UsersCollection } from "../BackboneModel/user_model"
import { UsersChatroom } from "../BackboneModel/users_chatroom_model"
import { Match, Matchs } from "../BackboneModel/matchs_model"
import { Wars, War } from "../BackboneModel/war_model"
import { Chatroom } from "../BackboneModel/chat_list_model"

/* win | guild adverse name | prix | */

var WarView = Backbone.View.extend({
    initialize: function(options) {
        this.e = options.element;
    },

    render: function () {
        var date;
        
        date = new Date(this.model.get("start_at"));
        var start_date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
        
        date = new Date(this.model.get("end_at"));
        var end_date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();


        this.$el.html('<li class="war-li">\
        <p>' + this.model.get("im_winner") + '</p>\
        <p class="wlist-me">' + $(this.e.currentTarget).find(">:first-child").html() + ' (points: ' + this.model.get("my_point") + ')</p>\
        <p class="wlist-vs">🆚</p>\
        <p class="wlist-him">' + this.model.get("enemy") + ' (point: ' + this.model.get("his_point") + ')</p>\
        <p class="wlist-prize">prize: ' + this.model.get("prize") + ' 💰</p>\
        <div class="wlist-time">\
            <p class="wlist-start">start: ' + start_date_string + '</p>\
            <p class="wlist-end">end: ' + end_date_string + '</p>\
        </div>\
        </li>')
        return this;
    }
})

var ProfilGuildView = Backbone.View.extend({

    initialize: function() {
        this.ProfilIsOpen = false;
    },

    render: function (e) {
        var self = this;
        if (self.ProfilIsOpen == false) {
            var wars = new Wars()
            wars.fetch({ data: { guild: $(e.currentTarget).find(">:first-child").html() } }).then(function () {
                self.ProfilIsOpen = true;
                $(".Center").append('<div class="PopUp" id="popup-profil">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' +
                    '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
                <h2 id="title-popup-chatroom-pannel">' + $(e.currentTarget).find(">:first-child").html() + '</h2>\
            <img id="profil-image-user" src="https://images04.military.com/sites/default/files/styles/full/public/media/news/conflicts/2015/04/pro-russian-tank-600.jpg?itok=FPZYi7nD">\
            <h2>War Historic</h2>\
            <ul id="guild-war-historic"></lu>');

            

            wars.each(function (war) {
                    var warView = new WarView({ model: war, element: e})
                    $("ul#guild-war-historic").append(warView.render().$el);
                })

                var removePopup = function () {
                    self.ProfilIsOpen = false;
                    $(".PopUp").remove()
                }

                self.mouseIn = false;

                $(".PopUp").hover(function () {
                    self.mouseIn = true;
                }, function () {
                    self.mouseIn = false;
                });

                $("body").mouseup(function () {
                    if (self.mouseIn == false)
                        removePopup();
                });

                $("#popup-chatroom-administration-refresh").click(function () {
                    this.render();
                });

                $("#popup-chatroom-administration-quit").click(function () {
                    removePopup();
                });
            });
        }
    }
})

export { ProfilGuildView }