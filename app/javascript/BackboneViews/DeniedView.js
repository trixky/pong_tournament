var Denied = Backbone.View.extend({
    render: function ()
    {
        $("body").append(`<div class="BackClick"></div>`);
        $(".BackClick").click(()=>{
            this.removePopUp();
        });
        $(".App").html(`
            <div id="confirmDiv">
                <h1> ACCES DENIED </h1>
            </div>
        `)    
    }
})


var Banned = Backbone.View.extend({
    render: function ()
    {
        $("body").append(`<div class="BackClick"></div>`);
        $(".BackClick").click(()=>{
            this.removePopUp();
        });
        $(".App").html(`
            <div id="confirmDiv">
                <h1> BANNED  </h1>
            </div>
        `)    
    }
})

var denied = new Denied;
var banned = new Banned;
export {denied, banned};
