import {GameModel} from "../BackboneModel/game_model"
import {getUrlParam} from "../utils/utils_1"
import {game_channel} from "../channels/game_channel"
import consumer from "../channels/consumer"
import {router} from "../BackboneRouter/application_router"

var interval;

var GameContent = Backbone.View.extend({
    events: {
        "click #menu" : "launch_game",
        "keyup" : "keyup_event",
        "keydown" : "keydown_event",
    },
    render: function ()
    {
        var game_id = getUrlParam("game_id");
        var game = new GameModel({id: game_id});
        game.fetch().then((res)=>{
            this.$el.html(`
            <div id="flex_div">
            <div id="top">
            <h2 id="score"> <span id="player1">${res["player_1"]}</span>: <span id="scoreP1">0</span> <span class="VS">VS</span> <span id="player2">${res["player_2"]}</span>: <span id="scoreP2">0</span></h2>
            <h1 id="menu"></h1>
            </div>
            <canvas id="pongBoard" width=750 height=750> </canvas>
            </div>
            `);
            if (Cookies.get("pseudo") != res["player_1"] && Cookies.get("pseudo") != res["player_2"])
                var guest = true
            else
                var guest = false
            this.socket = game_channel(guest, res["player_1"], this);
            return this;
        });
    },
    end_game: function ()
    {
        this.socket.unsubscribe();
        clearInterval(interval);
        var winner;
        if (this.p1.score == 10)
            winner = $("#player1").text();
        else
            winner = $("#player2").text();
        $("#score").hide();
        if ($(".BackClick").length == 0)
            $("body").append(`<div class="BackClick"></div>`);
        if ($("#partyEnding").length == 0)
            $(".Center").append(`
                <div class="PopUp" id="partyEnding">
                    <h1> ${winner} <span style="color: green">WIN</span> THE GAME </h1>
                    <button id="endMatchButton"> Go back to menu </button>
                </div>
            `);
        $(".BackClick").click(()=>{
            this.end = false;
            router.navigate("connected/play", {trigger: true});
            $(".BackClick").remove();
        });
        $("#endMatchButton").click(()=>{
            this.end = false;
            router.navigate("connected/play", {trigger: true});
            $(".BackClick").remove();
        })
    }
});

var gameContent = new GameContent({el: ".Center"});

export {gameContent};