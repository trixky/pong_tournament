import { usersCollection, User } from "../BackboneModel/user_model"
import { guildCollection } from "../BackboneModel/guild_model"
import { Chatrooms } from "../BackboneModel/chat_list_model"
import { UsersChatroom } from "../BackboneModel/users_chatroom_model";
import { router } from "../BackboneRouter/application_router"
import { Tournament, Tournaments } from "../BackboneModel/tournament_model"
import { AdminTournamentPannelView_generated } from "../BackboneViews/AdminTournamentPannelView"

var AdminContentView = Backbone.View.extend({
    events: {
        "keyup #adminSearch": "updateList",
        "change #selectValAdmin": "updateList",
        "click .adminBox": "handleClick",
        "click #quitPopUpAdmin": "removePopUp",
        "click #confirmAdmin": "confirm",
        "keyup #c": "updateMemberList",
        "click .adminMemberBox": "handleMemberClick",
        "keyup #adminChatSearch": "updateChatroomUserList",
        "click #chatAdminBox": "handleChatClick"
    },

    initialize: function () {
        this.adminTournamentPannelView = AdminTournamentPannelView_generated;
    },

    render: function () {
        var self = this;
        self.panelTournamentAdminIsOpen = false;
        axios.get(`/api/users/${Cookies.get("login")}`).then((res) => {
            if (res.data.admin == false) {
                $(".social").empty();
                $(".Menu").empty();
                $(".Center").html(`
				<div id="confirmDiv">
					<h1> ERROR: YOU NEED TO BE AN ADMIN TO ACCESS THIS PAGE </h1>
					<h1> Click <span id="loginSpan"> here </span> to go to login page </h1>
				</div>`)
                $("body").append(`<div class="BackClick"></div>`);
                $("#loginSpan").click(() => {
                    $(".BackClick").remove();
                    $("#confirmDiv").remove();
                    $(".Menu").css({ "background-color": "black" });
                    router.navigate("", { trigger: true })
                })
            }
            else {
                this.$el.html(`
                <div id="select">
                <select id="selectValAdmin">
                    <option value="0">users</option>
                    <option value="1">guilds</option>
                    <option value="2">chatrooms</option>
                    <option value="3">tournaments</option>
                </select>
                </div>
                <input id="adminSearch"/>
                <div id="listAdmin"> </div>
                `)
                $("#selectValAdmin").css({ "background-color": "#0356fc" });
                this.updateList();
            }
            return this;
        });
    },
    updateList: function () {
        var self = this;
        $("#listAdmin").empty();
        if ($("#selectValAdmin option:selected").text() == "users") {
            usersCollection.fetch({
                data: {
                    pseudo: $("#adminSearch").val()
                }
            }).then((res) => {
                usersCollection.each((model) => {
                    $("#listAdmin").append(`
                    <div class="adminBox">
                        <p id="login">${model.attributes["login"]}</p>
                        <p id="pseudo">${model.attributes["pseudo"]}</p>
                    </div>
                    `)
                });
            })
        }
        else if ($("#selectValAdmin option:selected").text() == "guilds") {
            guildCollection.fetch({
                data: {
                    name: $("#adminSearch").val(),
                    admin: true
                }
            }).then((res) => {
                guildCollection.each((model) => {
                    $("#listAdmin").append(`
                    <div class="adminBox" id=${model.attributes["id"]}>
                        <p id="name">${model.attributes["name"]}</p>
                        <p id="anagram">${model.attributes["anagram"]}</p>
                        <p>${model.attributes["points"]}</p>
                    </div>
                    `)
                });
            })
        }
        else if ($("#selectValAdmin option:selected").text() == "chatrooms") {
            var chatrooms = new Chatrooms;
            chatrooms.fetch({
                data: {
                    search_entry: $("#adminSearch").val(),
                    admin: true
                }
            }).then((res) => {
                chatrooms.each((model) => {
                    $("#listAdmin").append(`
                    <div class="adminBox" id=${model.attributes["id"]}>
                        <p id="name">${model.attributes["name"]}</p>
                    </div>
                    `)
                });
            })
        }
        else if ($("#selectValAdmin option:selected").text() == "tournaments") {
            var tournaments = new Tournaments();
            tournaments.fetch({ data: { name: $("#adminSearch").val() } }).then(function () {
                $("#listAdmin").html('<div id="list-tournament"></div>')
                tournaments.each((model) => {
                    var date_start = new Date(model.attributes["start_at"]);
                    var date_start_string = date_start.getDate() + '/' + date_start.getMonth() + '/' + date_start.getFullYear() + '  ' + date_start.getHours() + ':' + date_start.getMinutes();
                    var date_end = new Date(model.attributes["end_at"]);
                    var date_end_string = date_end.getDate() + '/' + date_end.getMonth() + '/' + date_end.getFullYear() + '  ' + date_end.getHours() + ':' + date_end.getMinutes();



                    $("#list-tournament").append('<div class="adminBox-tab">\
                    <p class="tab-name">' + model.attributes["name"] + '</p>\
                    <p class="tab-time">[' + date_start_string + ' - ' + date_end_string + ']</p>\
                    </div>'
                    )
                });
                $("#listAdmin").append('<div class="create-tournament">\
                    <h2>create new tournament</h2>\
                    <p class="create-tournament-input-p">regisration start:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-1" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">regisration end:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-2" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">tournament start:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-3" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">tournament end:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-4" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">prize</p>\
                    <input class="create-tournament-input" id="create-tournament-input-5" type="number"></input>\
                    <br>\
                    <p class="create-tournament-input-p">name</p>\
                    <input class="create-tournament-input" id="create-tournament-input-6" type="texte"></input>\
                    <br>\
                    <input id="button-create-tournament" class="create-tournament-input" type="button" value="create">\
                </div>');

                $("#button-create-tournament").click(function () {
                    if ($("#create-tournament-input-1").val() != '' &&
                        $("#create-tournament-input-2").val() != '' &&
                        $("#create-tournament-input-3").val() != '' &&
                        $("#create-tournament-input-4").val() != '') {
                        var tournament = new Tournament({
                            start_registration: $("#create-tournament-input-1").val(),
                            end_registration: $("#create-tournament-input-2").val(),
                            start_at: $("#create-tournament-input-3").val(),
                            end_at: $("#create-tournament-input-4").val(),
                            prize: $("#create-tournament-input-5").val(),
                            name: $("#create-tournament-input-6").val()
                        });
                        tournament.save().then(function (res) {
                            if (res["res"] != "success") {
                                alert(res["res"])
                            }
                            self.updateList();
                        })
                    }
                })

                $(".adminBox-tab").click(function (e) {
                    self.adminTournamentPannelView.render(self, e);
                })
            })
        }
    },

    handleClick: function (e) {
        if ($("#selectValAdmin option:selected").text() == "users" && $(".PopUp").length == 0) {
            $("body").append(`<div class="BackClick"></div>`);
            $(".BackClick").click(() => {
                this.removePopUp();
            });
            this.login = e.currentTarget.querySelector("#login").innerHTML;
            $(".Center").append(`
            <div class="PopUp" id="PopUpAdmin">
            <p class="QuitPopUp" id="quitPopUpAdmin">❌</p>
            <h1>login: ${e.currentTarget.querySelector("#login").innerHTML}</h1>
            <h1>pseudo: ${e.currentTarget.querySelector("#pseudo").innerHTML}</h1>
            <div class="AdminCheckBox">
            <h1> Ban user </h1>
            <input id="banUserCheck" type="checkbox"/>
            </div>
            <button id="confirmAdmin"> confirm </button>
            </div>
            `);
            var user = new User;
            user.set({ id: e.currentTarget.querySelector("#login").innerHTML });
            user.fetch().then((res) => {
                if (res["ban"] == "true") {
                    $('#banUserCheck').prop('checked', true);
                }
            });
        }
        else if ($("#selectValAdmin option:selected").text() == "guilds" && $(".PopUp").length == 0) {
            $("body").append(`<div class="BackClick"></div>`);
            $(".BackClick").click(() => {
                this.removePopUp();
            });
            this.guildId = $(e.currentTarget).attr("id");
            $("body").append(`<div class="BackClick"></div>`);
            $(".BackClick").click(() => {
                this.removePopUp();
            });
            $(".Center").append(`
            <div class="PopUp" id="PopUpAdmin">
            <p class="QuitPopUp" id="quitPopUpAdmin">❌</p>
            <h1>name: ${e.currentTarget.querySelector("#name").innerHTML}</h1>
            <h1>anagram: ${e.currentTarget.querySelector("#anagram").innerHTML}</h1>
            <input placeholder="search for guild member" id="adminGuildSearch"/>
            <div id="listGuildAdmin"></div>
            </div>
            `);
            this.updateMemberList();
        }
        else if ($("#selectValAdmin option:selected").text() == "chatrooms" && $(".PopUp").length == 0) {
            $("body").append(`<div class="BackClick"></div>`);
            $(".BackClick").click(() => {
                this.removePopUp();
            });
            $(".Center").append(`
            <div class="PopUp" id="PopUpAdmin">
            <p class="QuitPopUp" id="quitPopUpAdmin">❌</p>
            <h1>${e.currentTarget.querySelector("#name").innerHTML}</h1>
            <input placeholder="search for chatroom member" id="adminChatSearch"/>
            <div id="listChatAdmin"></div>
            </div>`);
            this.chatroom = e.currentTarget.querySelector("#name").innerHTML;
            this.updateChatroomUserList();
        }
    },
    removePopUp: function () {
        $(".PopUp").remove();
        $(".BackClick").remove();
    },
    confirm: function () {
        var user = new User({ id: this.login });
        var banned;
        if ($('#banUserCheck').prop('checked'))
            banned = "true";
        else
            banned = "false";
        user.fetch().then(() => {
            user.set({ banned: banned })
            user.save();
            this.removePopUp();
        });
    },
    updateMemberList: function () {
        axios.get(`/api/guilds/${this.guildId}?pseudo=${$("#adminGuildSearch").val()}&admin=true`).then((res) => {
            var object = JSON.parse(res["request"].response);
            $("#listGuildAdmin").empty();
            $.each(object, (i) => {
                $("#listGuildAdmin").append(`
                <div class="adminMemberBox">
                <p id="name">${object[i]["pseudo"]}</p>
                <p>${object[i]["guildStatus"]}</p>
                <p id="ban">ban</p>
                <p id="promote">promote</p>
                <p id="demote">demote</p>
                </div>
                `)
            })
        })
    },
    handleMemberClick: function (e) {
        if (e.target.innerHTML == "ban") {
            var user = e.currentTarget.querySelector("#name").innerHTML;
            axios.patch(`/api/guilds/${this.guildId}?ban=${user}`).then((res) => {
                this.updateMemberList();
            });
        }
        else if (e.target.innerHTML == "promote") {
            var user = e.currentTarget.querySelector("#name").innerHTML;
            axios.patch(`/api/guilds/${this.guildId}?promote=${user}`).then((res) => {
                this.updateMemberList();
            });
        }
        else if (e.target.innerHTML == "demote") {
            var user = e.currentTarget.querySelector("#name").innerHTML;
            axios.patch(`/api/guilds/${this.guildId}?demote=${user}`).then((res) => {
                this.updateMemberList();
            });
        }
    },
    updateChatroomUserList: function () {
        $("#listChatAdmin").empty();
        axios.get(`/api/chatrooms/${this.chatroom}?user=${$("#adminChatSearch").val()}`).then((res) => {
            $.each(res.data, (i) => {
                var status;
                if (res.data[i].owner == true)
                    status = "owner";
                else if (res.data[i].admin == true)
                    status = "admin";
                else
                    status = "member";
                $("#listChatAdmin").append(`
                <div class="adminBox" id="chatAdminBox" chat_id=${res.data[i].chat_id} user_id=${res.data[i].id}>
                <p id="login">${res.data[i].login}</p>
                <p id="pseudo">${res.data[i].pseudo}</p>
                <p id="status">${status}</p>
                <p id="promote">promote</p>
                <p id="demote">demote</p>
                </div>
                `);
            });
        });
    },
    handleChatClick: function (e) {
        if ($(e.target).attr("id") == "promote") {
            axios.patch(`/api/userschatrooms/${$(e.currentTarget).attr("chat_id")}?user_id=${$(e.currentTarget).attr("user_id")}&promote=true`).then((res) => {
                this.updateChatroomUserList();
            });
        }
        else if ($(e.target).attr("id") == "demote")
            axios.patch(`/api/userschatrooms/${$(e.currentTarget).attr("chat_id")}?user_id=${$(e.currentTarget).attr("user_id")}&demote=true`).then((res) => {
                this.updateChatroomUserList();
            });
    }
});

var AdminMenuView = Backbone.View.extend({

    render: function () {
        $(".Menu").html(`
        <div class="NavBar">
        <h1 id="title"> Ultimate Pong Tournament </h1>
        <div>
        <h1 id="disconnect"> Disconnect </h1>
        </div>
        </div>
        `)
        $(".Menu").css({ "background-color": "#0356fc" });
        return this;
    }
});

var adminContentView = new AdminContentView({ el: ".Center" });
var adminMenuView = new AdminMenuView({ el: ".Menu" });

export { adminContentView, adminMenuView }