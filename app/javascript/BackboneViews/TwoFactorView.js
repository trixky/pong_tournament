import {router} from "../BackboneRouter/application_router"

var TwoFactorContent = Backbone.View.extend({
    events: {
        "click #authenticate" : "verifyCode"
    },
    render: function ()
    {
        $(".Menu").html(`
        <div class="NavBar">
            <h1 id="title"> Ultimate Pong Tournament </h1>
        </div>
        `)
        this.$el.html(`
        <div class="AuthBox">
            <h1> Enter google authentification code to authenticate </h1>
            <input id="authInput" placeholder="two factor code"/>
            <button id="authenticate">Confirm</button>
        </div>
        `)
    },
    verifyCode: function ()
    {
        axios.get(`/api/twofactor/${Cookies.get("login")}?code=${$("#authInput").val()}`).then((res)=>
        {
            if (res.data["error"])
            {
                if (!$("#errorCreate").length)
                    $(".Center").append(`
                        <p id="errorCreate"> error: incorrect code </p>
                    `)
            }
            else
                router.navigate("connected/play", {trigger: true});
        });
    }
});

var twoFactorContent = new TwoFactorContent({el: ".Center"});

export {twoFactorContent}
