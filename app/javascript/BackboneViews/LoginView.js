import {router} from "../BackboneRouter/application_router.js";
import { User } from "../BackboneModel/user_model.js";

var LoginContent = Backbone.View.extend({
    render : function()
    {
        this.$el.html(`
        <div id="flex_div">
            <h1> Welcome to pong tournament </h1>
            <h1> You need to be a 42 student to play this game </h1>
            <h1> Please log in to start playing </h1>
        </div>
        `);
        return this;
    }
})

var LoginMenu = Backbone.View.extend({
    events: {
        "click #loginButton": "logIn",
    },
    render : function()
    {
        this.$el.html(` <div class="NavBar">
            <h1 id="title"> Ultimate Pong Tournament </h1>
            <div>
                <h1 id="loginButton"> login </h1>
            </div>
        </div>`);
        return this;
    },
    logIn: function (e)
    {
        $(location).attr('href', 'api/oauth');
    },
    home: function ()
    {
        router.navigate("", {trigger: true})
    },
    guestLogin: function ()
    {
        $(location).attr('href', 'api/oauth?guest=true');
    }
})

var loginContent = new LoginContent({el: ".Center"});
var loginMenu = new LoginMenu({el: ".Menu"});

export {loginContent, loginMenu}