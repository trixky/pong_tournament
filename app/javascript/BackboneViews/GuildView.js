import { router } from "../BackboneRouter/application_router";
import { User } from "../BackboneModel/user_model"
import { Guild, guildCollection, GuildCollection } from "../BackboneModel/guild_model"
import { War } from "../BackboneModel/war_model"
import { userCollection } from "../BackboneModel/user_model"
import { Battle, Battles } from "../BackboneModel/battle_list_model"
import { GuildListView } from "../BackboneViews/GuildListView"

var Guild_matching_popup = Backbone.View.extend({
    render: function (self) {
        console.log("on m'appelle bien")
        $(".PopUp-guild-matching").remove()
        if (true) {
            var chrono = 15;
            self.stop_matchine = false;

            $(".Center").append('<div class="PopUp PopUp-guild-matching" id="popup-profil">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' +
                '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
                <h2 id="title-popup-chatroom-pannel">' + 'search match' + '</h2>\
                <p id="chrono"><p>\
                <img id="img-chargement-gif" src="https://thumbs.gfycat.com/KnobbyWeirdIlladopsis-size_restricted.gif"><image>\
                </div>');

            var removePopup = function () {
                self.stop_matchine = true;
                var battle = new Battle({ id: 'tournament' })
                battle.destroy({ data: { type_battle: 'tournament' }, processData: true }).then(function () {
                    $(".PopUp").remove()
                })
                $("#popUpWar").remove();
                $(".BackClick").remove();
                $(".PopUp").remove()
                self.mouseIn = true;
            }

            function traitement(chrono) {
                setTimeout(suiteTraitement, 1000, chrono)
            }
            function suiteTraitement(chrono) {
                if (self.stop_matchine == true) {
                    // nothing
                } else if (chrono > 0) {
                    traitement(chrono - 1);
                    $('#chrono').html(chrono)
                } else {
                    removePopup();
                }
            }
            traitement(chrono);

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

var matching_popup = new Guild_matching_popup();

var GuildContent = Backbone.View.extend({

    initialize: function () {
        this.guildListView = new GuildListView();
    },

    events:
    {
        "click #joinGuild": "join",
        "click #createGuild": "create",
        "click #leaveGuild": "leave",
        "click #no": "removeConfirmDiv",
        "click #yes": "exitGuild",
        "click #manageGuild": "manageGuild",
        "click #destroyGuild": "destroyGuildConfirm",
        "click #destroyGuildButton": "destroyGuild",
        "click #exitDestroy": "exitDestroy",
        "click #warMenu": "displayWarMenu",
        "click #quitPopUp": "removeWarMenu",
        "click #giveUpWar": "surrender",
        "click #settingGuildButton": "settings"
    },

    render: function () {
        var self = this;
        self.matchingPopupIsOpen = false;
        var user = new User({ id: Cookies.get("login") });
        user.fetch().then((res) => {
            if (res["guild_id"] == null) {
                this.$el.html(`
                <div id="flex_div">
                    <button id="joinGuild"> Join a Guild </button>
                    <button id="createGuild"> Create a Guild </button>
                </div>
                `);
                self.guildListView.render();
            }
            else {
                var guild = new Guild({ id: res["guild_id"] });
                var user = res;
                guild.fetch().then((res) => {
                    var src;
                    if (res.flag.length > 0)
                        src = res.flag
                    else
                        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pirate_Flag_of_Jack_Rackham.svg/1024px-Pirate_Flag_of_Jack_Rackham.svg.png";
                    this.$el.html(`
                        <div id="flex_div">
                        <img src="${src}"> </img>
                        <h1> ${res["name"]} </h1>
                        <h1> ${res["anagram"]} </h1>
                        <h1> Points: ${res["points"]} </h1> 
                        </div>`);
                    if (user["guildStatus"] == "owner") {
                        $("#flex_div").append(`<button id="manageGuild"> manage the guild </button>`);
                        $("#flex_div").append(`<button id="destroyGuild"> destroy the guild </button>`);
                    }
                    else {
                        $("#flex_div").append(`<button id="leaveGuild"> leave the guild </button>`);
                    }
                    self.guildListView.render();
                })
            }
        }).then(() => {
            var guild = new Guild({ id: Cookies.get("guildId") });
            guild.fetch().then((res) => {
                if (res["error"]) {
                    return;
                }
                var my_guild = res;
                axios.get(`/api/wars/${res["name"]}`).then((res) => {
                    if (res.data) {
                        this.data = res.data;
                        axios.get(`/api/users/${Cookies.get("login")}`).then((res) => {
                            if (res.data["guild_id"] != null) {
                                $("#flex_div").append(`<button id="warMenu"> War menu </button>`);
                            }
                        });
                    };
                });
            });
        });
    },
    join: function () {
        router.navigate("connected/guild/join", { trigger: true })
    },
    create: function () {
        router.navigate("connected/guild/create", { trigger: true })
    },
    leave: function () {
        $(".Center").append(
            `<div id="confirmDiv">
            <h2> Are you sure you want to leave the guild ? </h2>
            <div id="yesno">
                <button id="yes"> yes </button>
                <button id="no"> no </button>
            </div>
        </div>
        `)
    },
    removeConfirmDiv: function () {
        $("#confirmDiv").remove();
    },
    exitGuild: function () {
        var user = new User({ id: Cookies.get("login") });
        user.fetch();
        user.save({ guild_id: null, guildStatus: null }).then(() => {
            $("#confirmDiv").remove();
            this.render();
        });
    },
    manageGuild: function () {
        router.navigate("connected/guild/manage", { trigger: true })
    },
    destroyGuildConfirm: function () {
        if ($("#popUpDestroy").length == 0) {
            $(".Center").append(
                `<div id="popUpDestroy" class="PopUp">
                    <h1> Are you sure you want to destroy the guild ? </h1>
                    <div id="yesno">
                        <button id="destroyGuildButton"> destroy guild </button>
                        <button id="exitDestroy"> exit </button>
                    </div>
                </div>
            `)
        }
    },
    destroyGuild: function () {
        axios.delete(`/api/guilds/${Cookies.get("guildId")}`).then((res) => {
            this.render();
        });
        $("#popUpDestroy").remove();
    },
    exitDestroy: function () {
        $("#popUpDestroy").remove();
    },
    displayWarMenu: function (e) {
        var self = this;
        $("body").append(`<div class="BackClick"></div>`);
        $(".BackClick").click(() => {
            this.removeWarMenu();
        });
        $(".Center").append(`
            <div class="PopUp" id="popUpWar">
                <h1> ${this.data["player1"]} <span style="color: red" > VS </span> ${this.data["player2"]} </h1>
                <h3> <span style="color: #d4af37; font-size: 1.5em">PRIZE :  ${this.data["prize"]} </span></h3>
                <p> ${this.data["player1"]} points : ${this.data["player1_points"]} </p>
                <p> ${this.data["player2"]} points : ${this.data["player2_points"]} </p>
                <h3> <span style="color: red; font-size: 1.5em">MAX UNANSWERED MATCHS : ${this.data["max_unanswered"]} </span></h3>
                <p> unanswered match ${this.data["player1"]}: ${this.data["player1_unanswered"]} </p>
                <p> unanswered match ${this.data["player2"]}: ${this.data["player2_unanswered"]} </p>
                <h3> <span style="color: green; font-size: 1.5em"> FROM ${new Date(this.data["start_at"]).toDateString()} TO ${new Date(this.data["end_at"]).toDateString()} </span> </h3>
                <div id="warTimeList">
                </div>
                <button id="giveUpWar"> surrender </button> 
                <button id="battleGuildWar"> guild battle </button> 
                <p class="QuitPopUp" id="quitPopUp">❌</p>
            </div>
        `)

        $("#battleGuildWar").click(function () {
            var battle = new Battle({ type_battle: 'guild' })
            battle.save().then(function (res) {
                if (res["possible"] == true) {
                    self.removeWarMenu();
                    matching_popup.render(self)
                } else {
                    alert("unable to start matchmaking:\n- match in progress\n- already pending\n- you are not in a combat period")
                }
            })
        })

        $.each(this.data["timetable"], (i) => {
            $("#warTimeList").append(`
                <p>${this.data["timetable"][i]}</p>
            `)
        });
        //si ya match afficher score sinon bouton pour defier
    },
    removeWarMenu: function () {
        $("#popUpWar").remove();
        $(".BackClick").remove();
    },
    surrender: function () {
        var war = new War({ id: this.data.id });
        war.fetch().then(() => {
            war.destroy().then((res) => {
                $(".BackClick").remove();
                this.render();
            });
        });
    },
});

var guildContent = new GuildContent({ el: ".Center" })

var GuildCreateContent = Backbone.View.extend({
    events:
    {
        "click #saveGuildButton": "saveGuild"
    },
    render: function () {
        this.$el.html(`
        <div id="flex_div">
       <h2 id="settingsTitle"> Create a Guild </h2>
        <div id="inputDiv">
        <input id="guildName" placeholder="name"/>
        <input id="guildAnagram" placeholder="anagram"/>
        </div>
        <div class="CheckBox">
        <p> select an flag image </p>
        <label id="fileLabel" for="fileUpload"> Select a file </label>
        <input id="fileUpload" type="file" accept="image/*"/>
        </div>
        <button id="saveGuildButton"> create </button>
        </div>
        `);
        return this;
    },
    saveGuild: function () {
        if ($("#guildName").val().length < 3) {
            if ($("#errorCreate").length == 0)
                $(".Center").append(`<p id="errorCreate"> The guild name must be at least 3 characters </p>`);
            return;
        }
        else
            $("#errorCreate").remove();
        if ($("#guildAnagram").val().length > 5) {
            if ($("#errorCreate").length == 0)
                $(".Center").append(`<p id="errorCreate"> The guild anagram must be less than 6 characters </p>`);
            return;
        }
        else
            $("#errorCreate").remove();
        if ($("#guildAnagram").val().length < 2) {
            if ($("#errorCreate").length == 0)
                $(".Center").append(`<p id="errorCreate"> The guild anagram must at least two character long </p>`);
            return;
        }
        else
            $("#errorCreate").remove();
        var user = new User({ id: Cookies.get("login") });
        user.fetch().then((res) => {
            const formData = new FormData();
            if (document.getElementById("fileUpload").files.length > 0) {
                var file = document.getElementById("fileUpload").files[0];
                var blob = new Blob([file]);
                formData.append("flag", blob);
            }
            formData.append("name", $("#guildName").val());
            formData.append("points", 0);
            formData.append("anagram", $("#guildAnagram").val());
            formData.append("user", user["id"]);
            if (document.getElementById("fileUpload").files.length > 0) {
                var file = document.getElementById("fileUpload").files[0];
                var blob = new Blob([file]);
                formData.append("flag", blob);
            }
            axios({
                url: `/api/guilds`,
                method: "POST",
                data: formData
            }).then((res) => {
                if (res.data.body == "guild name already exist in the database") {
                    if ($("#errorCreate").length == 0)
                        $(".Center").append(`<p id="errorCreate"> The guild name is already register </p>`);
                    return;
                }
                else
                    $("#errorCreate").remove();
                if (res.data.body == "guild anagram already exist in the database") {
                    if ($("#errorCreate").length == 0)
                        $(".Center").append(`<p id="errorCreate"> The guild anagram is already register </p>`);
                    return;
                }
                else
                    $("#errorCreate").remove();
                Cookies.set("guildId", res.data["id"]);
                router.navigate("connected/guild", { trigger: true })
            });
        });
    }
});

var guildCreateContent = new GuildCreateContent({ el: ".Center" });

var GuildJoinContent = Backbone.View.extend({
    events:
    {
        "click .guildBox": "joinGuild",
        "keyup #guildSearch": "updateList",
    },
    render: function () {
        this.$el.html(
            `<h1> Join a guild </h1>
            <input placeholder="search a guild" id="guildSearch"/>
            <div id="guildList">
            </div>
            `)
        guildCollection.fetch().then((res) => {
            guildCollection.each((guild) => {
                $("#guildList").append(`
                    <div class="guildBox" data-guild=${guild.attributes["id"]}>
                        <p> ${guild.attributes["name"]} </p>
                        <p> ${guild.attributes["anagram"]} </p>
                        <p> ${guild.attributes["points"]} </p>
                    </div>
                    `)
            })
        })
    },
    joinGuild: function (e) {
        var guildId = e.currentTarget.getAttribute("data-guild");
        var guild = new Guild({ id: guildId });
        guild.fetch().then((res) => {
            guild.set({ "user": Cookies.get("id") });
            guild.save().then((res) => {
                Cookies.set("guildId", res["id"]);
                router.navigate("connected/guild", { trigger: true })
            })
        })
    },
    updateList: function (e) {
        axios.get(`/api/guilds.json?name=${$("#guildSearch").val()}`).then((res) => {
            var object = JSON.parse(res["request"].response);
            $("#guildList").empty();
            $.each(object, (i) => {
                $("#guildList").append(`
                    <div class="guildBox" data-guild=${object[i]["id"]}>
                    <p> ${object[i]["name"]} </p>
                    <p> ${object[i]["anagram"]} </p>
                    <p> ${object[i]["points"]} </p>
                    </div>
                `)
            })
        })
    }
});

var guildJoinContent = new GuildJoinContent({ el: ".Center" });

var GuildManageContent = Backbone.View.extend({
    events: {
        "keyup #guildManageSearch": "updateList",
        "change #selectVal": "updateList",
        "click .manageBox": "handleClick",
        "change #guildManageSearch": "updateList",
        "click #sendDeclaration": "sendDeclaration",
        "click #exitDeclare": "exitDeclare",
        "click #exitNotif": "exitNotif",
        "click #notifWarDeclaration": "confirmDeclaration",
        "click #declineWar": "declineWar",
        "click #acceptWar": "acceptWar",
        "change #dateRange": "updateDateWar",
        "click #addWarTime": "addWarTime",
        "click .WarTimeBox": "removeWarTime"
    },
    render: function () {
        this.warTimes = [];
        this.$el.html(`
        <div id="select">
        <select id="selectVal">
            <option value="0">ban members</option>
        </select>
        </div>
        <div id="guildManagment">
            <input id="guildManageSearch"/>
            <div id="list"> </div>
        </div>
        `);
        this.updateList();
        return this
    },
    updateList: function () {
        $("#errorCreate").remove();
        axios.get(`/api/guilds/${Cookies.get("guildId")}`).then((res) => {
            axios.get(`/api/wars/${res.data["name"]}`).then((res) => {
                if (!res.data && $("#warManage").length == 0) {
                    $("#selectVal").append(`<option value="1" id="warManage">accept war declaration</option>
                    <option value="2">declare war</option>`)
                }
            });
        });
        if ($("#selectVal option:selected").text() == "declare war") {
            axios.get(`/api/guilds?name=${$("#guildManageSearch").val()}&war=true`).then((res) => {

                var object = JSON.parse(res["request"].response);
                $("#list").empty();
                $.each(object, (i) => {
                    $("#list").append(`
                    <div class="manageBox">
                        <p id="name">${object[i]["name"]}</p>
                        <p id="anagram">${object[i]["anagram"]}</p>
                        <p id="startWar"> ⚔ </p>
                    </div>
                    `)
                })
            })
        }
        else if ($("#selectVal option:selected").text() == "ban members") {
            axios.get(`/api/guilds/${Cookies.get("guildId")}?pseudo=${$("#guildManageSearch").val()}`).then((res) => {
                var object = JSON.parse(res["request"].response);
                $("#list").empty();
                $.each(object, (i) => {
                    $("#list").append(`
                        <div class="manageBox">
                            <p id="name">${object[i]["pseudo"]}</p>
                            <p id="ban">Ban</p>
                        </div>
                    `)
                })
            })
        }
        else {
            $("#list").empty();
            axios.get(`/api/guilds/${Cookies.get("guildId")}`).then((res) => {
                var guild_name = res.data["name"];
                axios.get(`/api/declarations?receiver=${guild_name}`).then((res) => {
                    var object = JSON.parse(res["request"].response);
                    $.each(object, (i) => {
                        $("#list").append(`
                        <div class="manageBox" id="notifWarDeclaration" sender="${object[i]["sender"]}" start-date=${object[i]["start_at"]} end-date=${object[i]["end_at"]}>
                            <p id="sender">${object[i]["sender"]}</p>
                            <p id="points">${object[i]["points"]} points</p>
                        </div>
                        `)
                    });
                })
            })
        }
    },
    handleClick: function (e) {
        if ($("#selectVal option:selected").text() == "ban members" && $(e.target).html() == "Ban") {
            var user = e.currentTarget.querySelector("#name").innerHTML;
            axios.patch(`/api/guilds/${Cookies.get("guildId")}?ban=${user}`).then((res) => {
                this.updateList();
            });
        }
        else if ($("#selectVal option:selected").text() == "declare war" && $("#declareDiv").length == 0) {
            $(".Center").append(
                `<div id="declareDiv" data-guild="${e.currentTarget.querySelector("#name").innerHTML}">
                    <p> How many points do you want to bet ? </p>
                    <input id="pointInput" type="number" min="0" placeholder="points"/>
                    <p> Max unanswered match </p>
                    <input id="unanswered" type="number" placeholder="max unanswered match"/>
                    <p> choose a range date </p>
                    <input id="dateRange"/>
                    <p> Choose war times </p>
                    <input id="timeTable"/>
                    <p id="addWarTime">➕</p>
                    <div id="warTimeList">
                    </div>
                    <div id="yesno">
                        <button id="sendDeclaration"> declare war </button>
                        <button id="exitDeclare"> exit </button>
                    </div>
                </div>
                `)
            $('#dateRange').daterangepicker({
                autoApply: true,
                minDate: new Date()
            });
            $('#timeTable').daterangepicker({
                autoApply: true,
                timePicker: true,
                minDate: $("#dateRange").val().split(" - ")[0],
                maxDate: $("#dateRange").val().split(" - ")[1],
                startDate: moment().startOf('hour'),
                endDate: moment().startOf('hour').add(32, 'hour'),
                locale: {
                    format: 'M/DD hh:mm A'
                }
            });
        }
    },
    sendDeclaration: function () {
        if ($("#pointInput").val() <= 0) {
            if ($("#errorCreate").length == 0)
                $("#declareDiv").append(`<p id="errorCreate"> Points must be superior than 0 </p>`);
            return;
        }
        else
            $("#errorCreate").remove();
        if ($("#warTimeList > *").length == 0) {
            if ($("#errorCreate").length == 0)
                $("#declareDiv").append(`<p id="errorCreate"> You need at least one war time </p>`);
            return;
        }
        else
            $("#errorCreate").remove();
        var date_range = $("#dateRange").val().split(" - ");
        if (date_range[0] == date_range[1]) {
            if ($("#errorCreate").length == 0)
                $("#declareDiv").append(`<p id="errorCreate"> Start date and End date cannot be the same </p>`);
            return;
        }
        else
            $("#errorCreate").remove();
        axios.get(`/api/guilds/${Cookies.get("guildId")}`).then((res) => {
            var guild_name = res.data["name"];
            if (parseInt(res.data["points"]) < parseInt($("#pointInput").val())) {
                if ($("#errorCreate").length == 0)
                    $("#declareDiv").append(`<p id="errorCreate"> You dont have enought points </p>`);
                throw new Error('error');
            }
            else
                $("#errorCreate").remove();
            axios({
                method: 'post',
                url: '/api/declarations',
                data: {
                    receiver: $("#declareDiv").attr("data-guild"),
                    points: $("#pointInput").val(),
                    start_at: new Date(date_range[0]),
                    end_at: new Date(date_range[1]),
                    sender: guild_name,
                    timetable: this.warTimes,
                    unanswered: $("#unanswered").val()
                }
            }).then((res) => {
                $("#declareDiv").remove();
            }).catch((err) => {
                return;
            })
        });
    },
    exitDeclare: function () {
        $("#declareDiv").remove();
    },
    confirmDeclaration: function (e) {
        if ($("#notifWar").length == 0) {
            $(".Center").append(
                `<div id="notifWar">
                    <h1> sender : ${e.currentTarget.getAttribute("sender")} </h1>
                    <h1> start date : ${new Date(e.currentTarget.getAttribute("start-date")).toDateString()} </h1>
                    <h1> end date : ${new Date(e.currentTarget.getAttribute("end-date")).toDateString()} </h1>
                    <div id="warTimeList">
                    </div>
                    <div id="yesno">
                        <button id="acceptWar" declarationId=""> ACCEPT </button>
                        <button sender="${e.currentTarget.getAttribute("sender")}" id="declineWar"> DECLINE </button>
                    </div>
                </div>
            `);
            axios.get(`/api/guilds/${Cookies.get("guildId")}`).then((res) => {
                var guild_name = res.data["name"];
                axios.get(`/api/declarations?receiver=${guild_name}`).then((res) => {
                    $("#acceptWar").attr("declarationId", res.data[0]["id"]);
                    var timeTable = JSON.parse(res["request"].response)[0]["timetable"];
                    $.each(timeTable, (i) => {
                        $("#warTimeList").append(`
                                <p>${timeTable[i]}</p>
                            `)
                    });
                })
            })
        }
    },
    exitNotif: function (e) {
        $("#notifWar").remove();
    },
    declineWar: function (e) {
        axios.delete(`/api/declarations/${e.currentTarget.getAttribute("sender")}`).then((res) => {
            $("#notifWar").remove();
            this.updateList();
        })
    },
    updateDateWar: function () {
        $('#timeTable').daterangepicker({
            autoApply: true,
            timePicker: true,
            minDate: $("#dateRange").val().split(" - ")[0],
            maxDate: $("#dateRange").val().split(" - ")[1],
            startDate: moment().startOf('hour'),
            endDate: moment().startOf('hour').add(32, 'hour'),
            locale: {
                format: 'M/DD hh:mm A'
            }
        });
        $("#warTimeList").empty();
        this.warTimes = [];
    },
    addWarTime: function (e) {
        this.warTimes.push($("#timeTable").val());
        $("#warTimeList").append(`
        <div class="WarTimeBox">
        <p>${$("#timeTable").val()}</p>
            <span class="RedCross"> ❌ </span>
            </div>
        `)
    },
    removeWarTime: function (e) {
        if ($(e.target).attr("class") == "RedCross") {
            for (var i = 0; i < this.warTimes.length; i++) {
                if (this.warTimes[i] == $(e.currentTarget).find("p")[0].innerText) {
                    this.warTimes.splice(i, 1);
                }
            }
            $(e.currentTarget).remove();
        }
    },
    acceptWar: function (e) {
        axios.post(`/api/wars?id=${$(e.target).attr("declarationId")}`).then((res) => {
            $("#notifWar").remove();
            this.render();
            if (res.data["error"]) {
                if (!$("#errorCreate").length)
                    $(".Center").append(`<p id="errorCreate">${res.data["error"]}</p>`)
            }
            else
                $("#errorCreate").remove();
        });
    }
});

var guildManageContent = new GuildManageContent({ el: ".Center" });

export { guildCreateContent, guildContent, guildJoinContent, guildManageContent };