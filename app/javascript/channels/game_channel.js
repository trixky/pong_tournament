import consumer from "./consumer"
import {router} from "../BackboneRouter/application_router"
import {Player, Game, Ball} from "../utils/game_class"

var game_channel = (guest, channel_name, game) => {
    var new_channel = consumer.subscriptions.create({ channel: "GameChannel", room: channel_name}, {
        connected() {
            this.data = game;
            this.guest = guest
            router.on("route", () => {
                if (this.intervalSet == true)
                {
                    clearInterval(this.interval);
                    this.intervalSet = false;
                }
                if (this.started == true)
                    this.unsubscribe();
            });
        },
  
      disconnected() {
        clearInterval(this.interval);
        this.interval = false;
      },
  
      rejected() {
          $(".Center").html(`
            <div class="PopUp">
                <h1> ERROR: YOU ARE ALREADY PLAYING </h1>
            </div>
          `);
      },
      received(data) {
        if (data["ended"])
        {
            this.ended_game_error();
        }
        if (data["end_game"])
            this.end_game();
        if (data["rebound"] && data["pseudo"] != Cookies.get("pseudo"))
        {
            this.ball.object.x = data["x"];
            this.ball.object.y = data["y"];
            this.ball.x_dir = data['x_dir'];
            this.ball.y_dir = data['y_dir'];

        }
        else if (data["start"] && this.started != true)
        {
            if (this.stageInit != true)
            {
                this.stageInit = true
                this.started = true;
                this.player_1 = $("#player1").text();
                this.player_2 = $("#player2").text();
                this.host_name = data["host"]
                if (data["host"] == Cookies.get("pseudo"))
                    this.host = true;
                else
                    this.host = false;
                this.game = new Game(data["width"], data["height"], data["max_score"], "pongBoard");
                this.p1 = new Player;
                this.p2 = new Player;
                this.ball = new Ball(data["speed"], data["x_dir"], data["y_dir"]);
                this.init_stage(data);
                if (this.guest == false)
                    this.initListenner();           
            }
        }
        else if (data["break"])
        {
            this.interval = false;
            clearInterval(this.interval);
        }
        else if (data["move_up"] && (data["move_up"] != Cookies.get("pseudo")))
        {
            if (this.guest)
            {
                if (this.host_name != data["move_up"])
                    this.p2.up = data["up"];
                else
                    this.p1.up = data["up"];
            }
            else
            {
                if (this.host)
                    this.p2.up = data["up"];
                else
                    this.p1.up = data["up"];
            }
        }
        else if (data["move_down"] && (data["move_down"] != Cookies.get("pseudo")))
        {
            if (this.guest)
            {
                if (this.host_name != data["move_down"])
                    this.p2.down = data["down"];
                else
                    this.p1.down = data["down"]
            }
            else
            {
                if (this.host)
                    this.p2.down = data["down"];
                else
                    this.p1.down = data["down"]
            }
        }
        if (data["go"] || data["catch"])
        {
            this.score_p1 = data["score_p1"];
            this.score_p2 = data["score_p2"];
            this.player_1 = data["player_1"];
            this.player_2 = data["player_2"];
            $("#score").html(`<span id="player1">${this.player_1}</span>: <span id="scoreP1">${this.score_p1}</span> <span class="VS">VS</span> <span id="player2">${this.player_2}</span>: <span id="scoreP2">${this.score_p2}</span>`)
            this.intervalSet = true;
            this.interval = setInterval(()=>{
                this.move(this.game, this.p1, this.p2, this.ball, this.socket)
            }, 5);
        }
        else if (data["goal"])
        {
            clearInterval(this.interval);
            this.intervalSet = false;
            if (data["goal"] == "p1")
            {
                this.p1.score += 1;
            }
            else if (data["goal"] == "p2")
            {
                this.p2.score += 1;
            }
            this.ball.x_dir = data["x_dir"];
            this.ball.y_dir = data["y_dir"];
            this.ball.object.x = data["x"];
            this.ball.object.y = data["y"];
            this.p1.object.x = data["p1_x"];
            this.p1.object.y = data["p1_y"];
            this.p2.object.x = data["p2_x"];
            this.p2.object.y = data["p2_y"];
            this.game.stage.update();
        }
        else if (data["3"])
            $("#score").text("3");
        else if (data["2"])
            $("#score").text("2");
        else if (data["1"])
            $("#score").text("1");
        else if (data["forfait"])
        {
            if (this.guest == false)
                this.forfait(data["forfait"]);
            else
                router.navigate("connected/play", {trigger: true});
        }
    },
    move : function (game, p1, p2, ball, socket)
    {
        var canvs = document.getElementById("pongBoard");
        var middle;

        if (p1.up == 1 && p1.object.y - this.hgt(1) >= -5)
            p1.object.y -= this.hgt(0.5);
        else if (p1.down == 1 && p1.object.y + this.hgt(17) <= canvs.height - 55)
            p1.object.y += this.hgt(0.5);
        if (p2.up == 1 && p2.object.y - this.hgt(1) >= -5)
            p2.object.y -= this.hgt(0.5);
        else if (p2.down == 1 && p2.object.y + this.hgt(17) <= canvs.height - 55)
            p2.object.y += this.hgt(0.5);
        if ((ball.object.y > p1.object.y && ball.object.y < p1.object.y + game.height() && ball.object.x > p1.object.x + game.width() && ball.object.x + ball.x_dir < p1.object.x + game.width()))
        {
            middle = p1.object.y + game.height() / 2;
            ball.y_dir = (ball.object.y - middle) / (game.height() / 2) * (ball.max_speed * 0.75);
            ball.x_dir = Math.sqrt(Math.pow(ball.max_speed, 2) - Math.pow(ball.y_dir, 2));
            if (this.host && !this.guest)
            {
                this.send({
                    rebound: true,
                    x_dir: ball.x_dir,
                    y_dir: ball.y_dir,
                    x: ball.object.x,
                    y: ball.object.y
                })
            }
        }
        else if ((ball.object.y > p2.object.y && ball.object.y < p2.object.y + game.height() && ball.object.x < p2.object.x && ball.object.x + ball.x_dir > p2.object.x))
        {
            middle = p2.object.y + game.height() / 2;
            ball.y_dir = (ball.object.y - middle) / (game.height() / 2) * (ball.max_speed * 0.75);
            ball.x_dir = Math.sqrt(Math.pow(ball.max_speed, 2) - Math.pow(ball.y_dir, 2)) * -1;
            if (!this.host && !this.guest)
            {
                this.send({
                    rebound: true,
                    x_dir: ball.x_dir,
                    y_dir: ball.y_dir,
                    x: ball.object.x,
                    y: ball.object.y
                })
            }
        }
        else if (ball.object.y > 0 && ball.object.y + ball.y_dir < 0)
        {
            ball.y_dir *= -1;
        }
        else if (ball.object.y < canvs.height && ball.object.y + ball.y_dir > canvs.height)
        {
            ball.y_dir *= -1;
        }
        else
        {
            ball.object.x += ball.x_dir;
            ball.object.y += ball.y_dir;
        }
        game.stage.update();
      },
    init_stage: function (data)
    {
        this.ball.object.graphics.beginFill("white").drawCircle(0, 0, data["ball_size"]);
        this.ball.object.x = data["x"];
        this.ball.object.y = data["y"];
        this.p1.object.graphics.beginFill("white").drawRoundRect(0, 0, this.game.width(), this.game.height(),  0);
        this.p1.object.x = data["p1_x"];
        this.p1.object.y = data["p1_y"];
        this.p2.object.graphics.beginFill("white").drawRoundRect(0, 0, this.game.width(), this.game.height(),  0);
        this.p2.object.x = data["p2_x"];
        this.p2.object.y = data["p2_y"];
        this.game.stage.addChild(this.p1.object);
        this.game.stage.addChild(this.p2.object);
        this.game.stage.addChild(this.ball.object);
        this.game.stage.update();
      },
    initListenner: function ()
    {
        var self = this;
        $("body").keyup(function(){
            self.keyup_event();
        });
        $("body").keydown(function(){
            self.keydown_event();
        });
      },
    keyup_event: function ()
    {
        if ($("#pongBoard").length)
        {
            if (event.code == "ArrowDown")
            {
                if (this.host == false && this.p2.down != 0)
                    this.p2.down = 0;
                else if (this.host && this.p1.down != 0)
                    this.p1.down = 0;
                this.send({
                    move_down: true,
                    down: 0
                })
            }
            else if (event.code == "ArrowUp")
            {
                if (this.host == false && this.p2.up != 0)
                    this.p2.up = 0;
                else if (this.host && this.p1.up != 0)
                    this.p1.up = 0
                this.send({
                    move_up: true,
                    up: 0
                })
            }
        }
    },
    keydown_event: function ()
    {
        if ($("#pongBoard").length)
        {
            if (event.code == "ArrowDown")
            {
                if (this.host == false && this.p2.down != 1)
                    this.p2.down = 1;
                else if (this.host && this.p1.down != 1)
                    this.p1.down = 1;
                this.send({
                    move_down: true,
                    down: 1
                })
            }
            else if (event.code == "ArrowUp")
            {
                if (this.host == false && this.p2.up != 1)
                    this.p2.up = 1;
                else if (this.host && this.p1.up != 1)
                    this.p1.up = 1;
                this.send({
                    move_up: true,
                    up: 1
                })
            }
        }
    },
    wdh: function (number)
    {
        var canvs = document.getElementById("pongBoard");
        if (canvs)
            number = number / 100 * canvs.width;
        return number;
    },
    hgt : function (number)
    {
        var canvs = document.getElementById("pongBoard");
        if (canvs)
            number = number / 100 * canvs.height;
        return number;
    },
    end_game: function()
    {
        this.unsubscribe();
        clearInterval(this.interval);
        var winner;
        if (this.p1.score == 10)
            winner = this.player_1
        else
            winner = this.player_2
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
            router.navigate("connected/play", {trigger: true});
            $(".BackClick").remove();
        });
        $("#endMatchButton").click(()=>{
            router.navigate("connected/play", {trigger: true});
            $(".BackClick").remove();
        })
    },
    ended_game_error: function()
    {
        this.unsubscribe();
        clearInterval(this.interval);
        this.interval = 0
        router.navigate("connected/play", {trigger: true});
    },
    forfait : function (looser)
    {
        this.unsubscribe();
        clearInterval(this.interval);
        this.interval = 0
        var sentence;
        if (looser == Cookies.get("pseudo"))
            sentence = `Game ended, you left the party`;
        else
            sentence = `You win, ${looser} left the party`;
        $("#score").hide();
        if ($(".BackClick").length == 0)
            $("body").append(`<div class="BackClick"></div>`);
        if ($("#partyEnding").length == 0)
            $(".Center").append(`
                <div class="PopUp" id="partyEnding">
                    <h1> ${sentence} </h1>
                </div>
            `);
        setTimeout(function(){
            router.navigate("connected/play", {trigger: true});
            $(".BackClick").remove();
        }, 2000)
    }
    });
    return (new_channel);
  }
  
  export {game_channel}
  