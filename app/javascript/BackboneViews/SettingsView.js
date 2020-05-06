import {router} from "../BackboneRouter/application_router";
import {getUrlParam} from "../utils/utils_1"
import {User} from "../BackboneModel/user_model"

var SettingsContent = Backbone.View.extend({
    events:
    {
        "click #saveImageButton" : "updateUser",
        "change #fileUpload" : "confirmUpload",
        "click #disable2FA" : "disable2FA"
    },
    render : function()
    {
        this.$el.html(`
        <div id="flex_div">
            <h2 id="settingsTitle"> Settings </h2>
            <div class="CheckBox">
                <p> enable two factor auth </p>
                <input id="TwoFactor" type="checkbox"/>
            </div>
            <div class="CheckBox">
                <p> select an avatar image </p>
                <label id="fileLabel" for="fileUpload"> Select a file </label>
                <input id="fileUpload" type="file" accept="image/*"/>
            </div>
            <button id="saveImageButton"> save </button>
        </div>
        `);
        var user = new User({id: Cookies.get("login")});
        user.fetch().then((res)=>
        {
            if (res["two_factor"] == true)
                $('#TwoFactor').prop('checked', true);
        })
        return this;
    },
    confirmUpload: function()
    {
        $("#fileLabel").css("background-color", "#93E493");
        $("#fileLabel").html("file selected");
    },
    updateUser: function(e)
    {
        var user = new User({id: Cookies.get("login")});
        user.fetch();
        const formData = new FormData();
        var i = 0;
        if (document.getElementById("fileUpload").files.length > 0)
        {
            i = 1;
            var file = document.getElementById("fileUpload").files[0];
            var blob = new Blob([file]);
            formData.append("avatar_pers", blob);
        }
        if (!$("#TwoFactor").is(":checked"))
        {
            formData.append("two_factor", $("#TwoFactor").is(":checked"));
            axios({
                url: `/api/users/${user.attributes.id}`,
                method: "PATCH",
                data: formData
            }).then((res)=>{
                if (i == 1)
                    Cookies.set("url", res.data.url);
                this.removeQRcode();
            })
        }
        else
        {
            axios({
                url: `/api/users/${user.attributes.id}`,
                method: "PATCH",
                data: formData
            }).then((res)=>{
                if (i == 1)
                    Cookies.set("url", res.data.url);
                if ($("#TwoFactor").is(":checked"))
                    this.displayQRCode();
                });
        }
    },
    displayQRCode: function ()
    {
        axios.post(`/api/twofactor`).then((res)=>{
            if (res.data["error"])
            {
                router.navigate(`connected/play`, {trigger: true});
                return ;
            }
            $("body").append(`<div class="BackClick"></div>`);
            $(".BackClick").click(()=>{
                this.removePopUp();
            });
            $(".Center").append(`
            <div class="PopUp" id="qrCodePopUp">
                <img id="imageQRcode" src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${res.data["uri"]}"/>
            </div>`)
        });
    },
    removePopUp: function ()
    {
        $("#qrCodePopUp").remove();
        $(".BackClick").remove();
        router.navigate(`connected/play`, {trigger: true});
    },
    removeQRcode: function ()
    {
        axios.get(`/api/users/${Cookies.get("login")}`).then((res)=>{
            if (res.data["two_factor"] == true)
            {
                $("body").append(`<div class="BackClick"></div>`);
                $(".BackClick").click(()=>{
                    this.removePopUp();
                });
                $(".Center").append(`
                <div class="PopUp" id="2faDisablePopUp">
                    <h1> Enter google authentification code to disable 2FA </h1>
                    <input id="twoFactorCode" placeholder="two factor code"/>
                    <button id="disable2FA">Confirm</button>
                </div>`)
            }
            else
                this.removePopUp();

        });
    },
    disable2FA: function()
    {
        var code = $("#twoFactorCode").val();
        axios.delete(`/api/twofactor/${Cookies.get("login")}?code=${code}`).then((res)=>{
            if (res.data["success"])
                this.removePopUp();
            else
            {
                if (!$("#errorCreate").length)
                    $("#2faDisablePopUp").append(`
                        <p id="errorCreate"> error: incorrect code </p>
                    `)
            }
        });
    }
})

var settingsContent = new SettingsContent({el: ".Center"});

export {settingsContent}