import { Users, User, UsersCollection } from "../BackboneModel/user_model"
import { UsersChatroom } from "../BackboneModel/users_chatroom_model"
import { Match, Matchs } from "../BackboneModel/matchs_model"
import { Chatroom } from "../BackboneModel/chat_list_model"
import { router } from "../BackboneRouter/application_router"

var MatchView = Backbone.View.extend({
    render: function () {
        var guilds_or_tournament;
        if (this.model.get("my_guild") != undefined) {
            guilds_or_tournament = '<p class="pstat-guilds">(' + this.model.get("my_guild") + ' 🆚 ' + this.model.get("enemy_guild") + ')</p>'
        } else if (this.model.get("tournament_name") != undefined) {
            guilds_or_tournament = '<p class="pstat-tournament">(tournament:' + this.model.get("tournament_name") + ')</p>'
        } else {
            guilds_or_tournament = '';
        }
        this.$el.html('<li class="match-li">\
        <p class="pstat-win-or-lose">' + (this.model.get("i_win") == true ? '👍' : '👎') + '</p>\
        <p class="pstat-score">' + this.model.get("my_score") + '/' + this.model.get("enemy_score") + '</p>\
        <p class="pstat-opponent">adversaire: ' + this.model.get("enemy_pseudo") + '</p>' +
            guilds_or_tournament +
            '</li>')
        return this;
    }
})

var ProfilView = Backbone.View.extend({
    events: {
        "click #streamin": "streamParty"
    },
    render: function (self, e) {
        if (self.ProfilIsOpen == false) {
            var matchs = new Matchs()
            matchs.fetch({ data: { pseudo: $(e.currentTarget).html() } }).then(function () {
                var user = new User({ id: $(e.currentTarget).html() })
                user.fetch({ data: { pseudo: true } }).then(function () {

                    self.ProfilIsOpen = true;
                    var img_url = user.get("url");
                    if (img_url == "") {
                        img_url = 'https://images04.military.com/sites/default/files/styles/full/public/media/news/conflicts/2015/04/pro-russian-tank-600.jpg?itok=FPZYi7nD'
                    }
                    $(".Center").append('<div class="PopUp" id="popup-profil">\
                    <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>\
                    <h2 id="title-popup-chatroom-pannel">' + $(e.currentTarget).html() + '</h2>\
                    <img id="profil-image-user" src="' + img_url + '">\
                    <div id="player-stat">\
                    <p>guild: ' + user.get("guild_name") + '</p>\
                    <p>nombre de parties gagnées: ' + user.get("win") + '</p>\
                    <p>nombre de parties perdues: ' + user.get("loss") + '</p>\
                    <p>ladder level: ' + user.get("rank") + '</p>\
                    <p>nombre de tournois remportés: ' + user.get("tournaments_win") + '</p>\
                    </div>\
                    <h2>historique des parties</h2>\
                    <ul id="player-dual-historic">\
                    </ul>\
                    <input id="streamin" type="button" value="stream game"></input>\
                    </div>');
                    $("#streamin").hide()
                    axios.get(`/api/games/id=True?user_pseudo=${$(e.currentTarget).html()}`).then((res) => {
                        if (res.data["game"] == true) {
                            $("#streamin").show()
                        }
                        $("#streamin").click(() => {
                            router.navigate(`connected/game?game_id=${res.data["id"]}`, { trigger: true });
                        });
                    })

                    matchs.each(function (match) {
                        var matchView = new MatchView({ model: match })
                        $("ul#player-dual-historic").append(matchView.render().$el);
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
                        self.render();
                    });

                    $("#popup-chatroom-administration-quit").click(function () {
                        removePopup();
                    });
                });
            })
        }
    }
})

export { ProfilView }