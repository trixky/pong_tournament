import { Users, User, UsersCollection } from "../BackboneModel/user_model"
import { UsersChatroom } from "../BackboneModel/users_chatroom_model"
import { Chatroom } from "../BackboneModel/chat_list_model"
import { Tournament, Tournaments } from "../BackboneModel/tournament_model"

var AdminTournamentPannelView = Backbone.View.extend({
    render: function (self, e) {
        var selfself = this;
        if (self.panelTournamentAdminIsOpen == false) {
            self.panelTournamentAdminIsOpen = true;
            var tournament = new Tournament({ id: $(e.currentTarget).children().html() })
            tournament.fetch().then(function () {
                var date_s_r = new Date(tournament.get("start_registration"));
                var date_s_r_string = date_s_r.getDate() + '/' + date_s_r.getMonth() + '/' + date_s_r.getFullYear() + '  ' + date_s_r.getHours() + ':' + date_s_r.getMinutes();
                var date_e_r = new Date(tournament.get("end_registration"));
                var date_e_r_string = date_e_r.getDate() + '/' + date_e_r.getMonth() + '/' + date_e_r.getFullYear() + '  ' + date_e_r.getHours() + ':' + date_e_r.getMinutes();
                var date_s_t = new Date(tournament.get("start_at"));
                var date_s_t_string = date_s_t.getDate() + '/' + date_s_t.getMonth() + '/' + date_s_t.getFullYear() + '  ' + date_s_t.getHours() + ':' + date_s_t.getMinutes();
                var date_e_t = new Date(tournament.get("end_at"));
                var date_e_t_string = date_e_t.getDate() + '/' + date_e_t.getMonth() + '/' + date_e_t.getFullYear() + '  ' + date_e_t.getHours() + ':' + date_e_t.getMinutes();
                $(".Center").append('<div class="PopUp" id="popup-chatroom-administration">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' +
                    '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-delete" value="🗑"></input>\
                <h2 id="title-popup-chatroom-pannel">' + $(e.currentTarget).children().html() + '</h2>\
                <div>\
                    <h3>registration start</h3><p class="atp-date">' + date_s_r_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-1">update</button>\
                </div>\
                <div>\
                    <h3>registration end</h3><p class="atp-date">' + date_e_r_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-2">update</button>\
                </div>\
                <div>\
                    <h3>tournament start</h3><p class="atp-date">' + date_s_t_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-3">update</button>\
                </div>\
                <div>\
                    <h3>tournament end</h3><p class="atp-date">' + date_e_t_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-4">update</button>\
                </div>')

                var removePopup = function () {
                    self.panelTournamentAdminIsOpen = false;
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

                $("#popup-chatroom-administration-quit").click(function () {
                    removePopup();
                });

                $("#popup-chatroom-administration-delete").click(function () {
                    var tournament = new Tournament({ id: $(e.currentTarget).children().html() })
                    tournament.destroy().then(function () {
                        removePopup();
                        self.updateList();
                    })
                });

                $("#atpcb-1").click(function (ee) {
                    if ($(ee.currentTarget).prev().val() != "") {
                        var tournament_atpcb_1 = new Tournament({ id: $(e.currentTarget).children().prev().html(), start_registration: $(ee.currentTarget).prev().val() });
                        tournament_atpcb_1.save().then(function (res) {
                            if (res["res"] != "success") {
                                alert(res["res"])
                            }
                            removePopup();
                            selfself.render(self, e);
                        })
                    }
                })

                $("#atpcb-2").click(function (ee) {
                    if ($(ee.currentTarget).prev().val() != "") {
                        var tournament_atpcb_2 = new Tournament({ id: $(e.currentTarget).children().prev().html(), end_registration: $(ee.currentTarget).prev().val() });
                        tournament_atpcb_2.save().then(function (res) {
                            if (res["res"] != "success") {
                                alert(res["res"])
                            }
                            removePopup();
                            selfself.render(self, e);
                        })
                    }
                })

                $("#atpcb-3").click(function (ee) {
                    if ($(ee.currentTarget).prev().val() != "") {
                        var tournament_atpcb_3 = new Tournament({ id: $(e.currentTarget).children().prev().html(), start_at: $(ee.currentTarget).prev().val() });
                        tournament_atpcb_3.save().then(function (res) {
                            if (res["res"] != "success") {
                                alert(res["res"])
                            }
                            removePopup();
                            selfself.render(self, e);
                        })
                    }
                })

                $("#atpcb-4").click(function (ee) {
                    if ($(ee.currentTarget).prev().val() != "") {
                        var tournament_atpcb_4 = new Tournament({ id: $(e.currentTarget).children().prev().html(), end_at: $(ee.currentTarget).prev().val() });
                        tournament_atpcb_4.save().then(function (res) {
                            if (res["res"] != "success") {
                                alert(res["res"])
                            }
                            removePopup();
                            selfself.render(self, e);
                        })
                    }
                })
            })
        }
    }
})

var AdminTournamentPannelView_generated = new AdminTournamentPannelView();

export { AdminTournamentPannelView_generated }