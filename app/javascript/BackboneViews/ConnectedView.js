import {router} from "../BackboneRouter/application_router";
import {User} from "../BackboneModel/user_model"
import {getUrlParam, getCookie, imageExists} from "../utils/utils_1"

var ConnectedContent = Backbone.View.extend({
    events: {
        "click #settingsButton": "settingsClicked",
    },
    render : function()
    {
        if (Cookies.get("need_reload") == "true") {
            document.location.reload(false);
            Cookies.set("need_reload", "false")
        }

        $("#errorCreate").remove();
        var src;
        var pseudo;
        var user = new User({id: Cookies.get("login")});
        
        pseudo = Cookies.get("pseudo");
        src = Cookies.get("url");
        if (src == "null" || src.length == 0)
        {
            src = "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png";
        }
        else if (!imageExists(src))
        {
            user.fetch().then((res)=>
            {
                src = res["url"];
            });
        }
        if (pseudo == "null")
        {
            user.fetch().then((res)=>
            {
                pseudo = res["pseudo"];
                this.displayHtml(pseudo, src);
            });
        }
        else
            this.displayHtml(pseudo, src);
    },
    displayHtml: function (pseudo, src)
    {
        axios.get(`/api/users/${Cookies.get("login")}`).then((res)=>{
            this.$el.html(`
            <div id="flex_div">
                <img src="${src}"> </img>
                <h1> ${pseudo} </h1>
                <h2> rank: ${res["data"]["rank"]} </h2>
                <h2> wins: ${res["data"]["win"]} </h2>
                <h2> loss: ${res["data"]["loss"]} </h2>
                <button id="settingsButton"> settings </button>
            </div>
            `);
            return this;
        });

    },
    settingsClicked: function()
    {
        router.navigate(`connected/settings`, {trigger: true})
    }})
    
    var ConnectedMenu = Backbone.View.extend({
        events: {
        "click #play": "play",
        "click #guild" : "guild",
        "click #disconnect" : "disconnect",
        "click #tournament" : "tournament"
    },
    render : function()
    {
        this.$el.html(` <div class="NavBar">
            <h1 id="title"> Ultimate Pong Tournament </h1>
                <div>
                    <h1 id="play"> Play </h1>
                    <h1 id="tournament"> Tournament </h1>
                    <h1 id="guild"> Guild </h1>
                    <h1 id="disconnect"> Disconnect </h1>
                </div>
            </div>`);
        return this;
    },
    home: function ()
    {
        router.navigate("connected/play", {trigger: true})
    },
    play: function ()
    {
        router.navigate(`connected/play`, {trigger: true})
    },
    guild: function ()
    {
        router.navigate("connected/guild", {trigger: true})
    },
    disconnect: function()
    {
        Cookies.remove("url");
        Cookies.remove("login");
        Cookies.remove("pseudo");
        Cookies.remove("two_factor");
        Cookies.remove("id");
        Cookies.remove("token");
        Cookies.remove("guildId");
        $(".Menu").css({"background-color": "black"});
        axios.get(`/api/log?disconnect=true`).then(()=>{
            router.navigate("", {trigger: true})
        });
    },
    tournament: function ()
    {
        router.navigate("connected/tournament", {trigger: true})
    },
})

var connectedContent = new ConnectedContent({el: ".Center"});
var connectedMenu = new ConnectedMenu({el: ".Menu"});

export {connectedMenu, connectedContent}