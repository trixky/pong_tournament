import {router} from "../BackboneRouter/application_router";
import {User} from "../BackboneModel/user_model"
import {getUrlParam} from "../utils/utils_1"

var CreateUserContent = Backbone.View.extend({
    events:
    {
        "click #registerButton" : "registerUser",
    },
    render : function()
    {
        this.$el.html(`
        <div id="flex_div">
            <h1> Create User </h1>
            <input id="pseudo" placeholder="pseudo"/>
            <button id="registerButton"> create </button>
        </div>
        `);
        return this;
    },
    registerUser: function()
    {
        if ($("#pseudo").val().length < 3)
        {
            if ($("#errorCreate").length == 0)
                $(".Center").append(`<p id="errorCreate"> The user pseudo must be at least 3 character </p>`);
            return ;
        }
        var user = new User({login: Cookies.get("login"), pseudo: $("#pseudo").val()});
        user.save(null, {
            success : (res)=>{
                if (res.attributes.error)
                {
                    if (!$("#errorCreate").length)
                        $(".Center").append(`<p id="errorCreate"> error: Username already exist in the database </p>`)
                }
                else
                {
                    Cookies.set("id", res.attributes["id"])
                    Cookies.set("need_reload", "true")
                    router.navigate("/connected/play", {trigger: true})
                }
            }
        });
    }
})

var CreateUserMenu = Backbone.View.extend({
    render : function()
    {
        this.$el.html(` <div class="NavBar">
            <h1 id="title"> Ultimate Pong Tournament </h1>
        </div>`);
        return this;
    },
    home: function ()
    {
        router.navigate("", {trigger: true})
    }
})

var createUserContent = new CreateUserContent({el: ".Center"});
var createUserMenu = new CreateUserMenu({el: ".Menu"});

export {createUserContent, createUserMenu}