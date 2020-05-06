import { Tournament, Tournaments } from "../BackboneModel/tournament_model"
import { Battle, Battles } from "../BackboneModel/battle_list_model"
import { UserTourament, UsersTourament } from "../BackboneModel/users_tournament_model"

var Tournament_matching_popup = Backbone.View.extend({
    render: function (self) {
        if (self.matchingPopupIsOpen == false) {
            $(".Center").append('<div class="PopUp" id="popup-profil">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' +
                '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
                <h2 id="title-popup-chatroom-pannel">' + 'search match' + '</h2>\
                <img id="img-chargement-gif" src="https://thumbs.gfycat.com/KnobbyWeirdIlladopsis-size_restricted.gif"><image>\
                </div>');

            var removePopup = function () {
                self.ProfilIsOpen = false;
                var battle = new Battle({ id: 'tournament' })
                battle.destroy({ data: { type_battle: 'tournament' }, processData: true }).then(function () {
                    $(".PopUp").remove()
                })
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

            $("#popup-chatroom-administration-quit").click(function () {
                removePopup();
            });
        };
    }
})

var matching_popup = new Tournament_matching_popup();

var TournamentPersoView = Backbone.View.extend({
    render: function () {
        var now = new Date();
        var start_at = new Date(this.model.get("start_at"))

        if (now > start_at) {
            var end_at = new Date(this.model.get("start_at"))
            var end_at_string = end_at.getDate() + '/' + end_at.getMonth() + '/' + end_at.getFullYear() + '  ' + end_at.getHours() + ':' + end_at.getMinutes();

            $("#tournament-perso-div").append('<div class="tournament-perso-list">\
                <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                <p class="tournament-perso-list-prize">prize: ' + this.model.get("prize") + '</p>\
                <p class="tournament-perso-list-prize">my points: ' + this.model.get("my_points") + '</p>\
                <p class="tournament-perso-list-rank">my rank: ' + this.model.get("my_rank") + '/' + this.model.get("participants_number") + '</p>\
                <p class="tournament-perso-list-end_at">tournament end : ' + end_at_string + '</p>\
                <div class="tournament-perso-list-button">\
                    <input class="tournament-perso-battle-button social-hover" type="button" value="⚔ battle ⚔"></input>\
                    <input class="tournament-perso-unsubscribe-button social-hover" type="button" value="unsubscribe"></input>\
                </div>\
            </div>')
        } else {
            var start_at = new Date(this.model.get("start_at"))
            var start_at_string = start_at.getDate() + '/' + start_at.getMonth() + '/' + start_at.getFullYear() + '  ' + start_at.getHours() + ':' + start_at.getMinutes();
            $("#tournament-perso-div").append('<div class="tournament-perso-list">\
                <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                <p class="tournament-perso-list-prize">' + this.model.get("prize") + '</p>\
                <p class="tournament-perso-list-end_at">tournament start : ' + start_at_string + '</p>\
                <div class="tournament-perso-list-button">\
                    <input class="tournament-perso-unsubscribe-button social-hover" type="button" value="unsubscribe"></input>\
                </div>\
            </div>')
        }
    }
})

var TournamentPersoJoinView = Backbone.View.extend({
    render: function () {
        var now = new Date();

        var start_registration = new Date(this.model.get("start_registration"))
        var end_registration = new Date(this.model.get("end_registration"))

        var start_registration_string = start_registration.getDate() + '/' + start_registration.getMonth() + '/' + start_registration.getFullYear() + '  ' + start_registration.getHours() + ':' + start_registration.getMinutes();
        var end_registration_string = end_registration.getDate() + '/' + end_registration.getMonth() + '/' + end_registration.getFullYear() + '  ' + end_registration.getHours() + ':' + end_registration.getMinutes();

        var start_at = new Date(this.model.get("start_at"))
        var start_at_string = start_at.getDate() + '/' + start_at.getMonth() + '/' + start_at.getFullYear() + '  ' + start_at.getHours() + ':' + start_at.getMinutes();

        var end_at = new Date(this.model.get("start_at"))
        var end_at_string = end_at.getDate() + '/' + end_at.getMonth() + '/' + end_at.getFullYear() + '  ' + end_at.getHours() + ':' + end_at.getMinutes();

        if (now < end_registration) {
            if (now > start_registration) {
                $("#tournament-join-div").append('<div class="tournament-perso-list">\
                    <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                    <p class="tournament-perso-list-prize">' + this.model.get("prize") + '</p>\
                    <div>\
                        <p class="tournament-perso-list-end_at">registration start : ' + start_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">registration end : ' + end_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament start : ' + start_at_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament end : ' + end_at_string + '</p>\
                    </div>\
                    <div class="tournament-perso-list-button">\
                        <input class="tournament-perso-register-button social-hover" type="button" value="register"></input>\
                    </div>\
                </div>')
            } else {
                $("#tournament-join-div").append('<div class="tournament-perso-list">\
                    <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                    <p class="tournament-perso-list-prize">' + this.model.get("prize") + '</p>\
                    <div>\
                        <p class="tournament-perso-list-end_at">registration start : ' + start_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">registration end : ' + end_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament start : ' + start_at_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament end : ' + end_at_string + '</p>\
                    </div>\
                    <div class="tournament-perso-list-button">\
                        <input class="tournament-perso-register-button social-hover" type="button" value="register"disabled></input>\
                    </div>\
                </div>')
            }
        }
    }
})

var TournamentContentView = Backbone.View.extend({
    render: function () {
        var self = this;

        self.matchingPopupIsOpen = false;
        $(".Center").html('<div id="tournament-div">\
            <div id="tournament-main-div">\
                <h2>Main tournament</h2>\
                <input class="social-hover" id="start-main-tournament-classed-battle" type="button" value="⚔ classed ⚔"></input>\
                <input class="social-hover" id="start-main-tournament-unclassed-battle" type="button" value="⚔ unclassed ⚔"></input>\
            </div>\
            <div id="tournament-perso-div">\
            </div>\
            <div id="tournament-join-div">\
            </div>\
        </div>')

        $("#start-main-tournament-classed-battle").click(function () {
            var battle = new Battle({ type_battle: 'main-classed' })
            battle.save().then(function () {
                matching_popup.render(self)
            })
        })

        $("#start-main-tournament-unclassed-battle").click(function () {
            var battle = new Battle({ type_battle: 'main-unclassed' })
            battle.save().then(function () {
                matching_popup.render(self)
            })
        })

        $("#start-main-tournament-unclassed-battle").click(function () {
        })

        var refresh_tournament_perso = function () {
            var tournaments = new Tournaments();
            tournaments.fetch({ data: { perso: "true" } }).then(function () {
                $("#tournament-perso-div").html("<h2>My tournaments</h2>")
                tournaments.each(function (tournament) {
                    if (tournament.get("main_tournament") == undefined || tournament.get("main_tournament") == false) {
                        var tournamentPersoView = new TournamentPersoView({ model: tournament })
                        tournamentPersoView.render();
                    }
                });
                $(".tournament-perso-unsubscribe-button").click(function (e) {
                    var tournament_name;
                    if ($(e.currentTarget).prev().val() == "⚔ battle ⚔") {
                        tournament_name = $(e.currentTarget).parent().prev().prev().prev().prev().prev().html()
                    } else {
                        tournament_name = $(e.currentTarget).parent().prev().prev().prev().prev().html()
                    }
                    var userTourament = new UserTourament({ id: tournament_name })
                    userTourament.destroy().then(function () {
                        refresh_tournament_perso();
                        refresh_tournament_perso_join();
                    })
                })
                $(".tournament-perso-battle-button").click(function(e){
                    var battle = new Battle({ type_battle: 'perso-classed', tournament_name: $(e.currentTarget).parent().prev().prev().prev().prev().prev().html()})
                    battle.save().then(function () {
                        matching_popup.render(self)
                    })
                })
            })
        }

        var refresh_tournament_perso_join = function () {
            var tournaments = new Tournaments();
            tournaments.fetch({ data: { join: "true" } }).then(function () {
                $("#tournament-join-div").html("<h2>Join tournament</h2>")
                tournaments.each(function (tournament) {
                    if (tournament.get("main_tournament") == undefined || tournament.get("main_tournament") == false) {
                        var tournamentPersoJoinView = new TournamentPersoJoinView({ model: tournament })
                        tournamentPersoJoinView.render();
                    }
                });
                $(".tournament-perso-register-button").click(function (e) {
                    var userTourament = new UserTourament({ tournament_name: $(e.currentTarget).parent().prev().prev().prev().html() })
                    userTourament.save().then(function () {
                        refresh_tournament_perso();
                        refresh_tournament_perso_join();
                    })
                })
            })
        }

        refresh_tournament_perso();
        refresh_tournament_perso_join();

        return this;
    }
})

var tournamentContent = new TournamentContentView({ el: ".Menu" })

export { tournamentContent }