import { Guild, guildCollection, GuildCollection } from "../BackboneModel/guild_model"
import { ProfilGuildView } from "../BackboneViews/ProfilGuildView"

var GuildLiView = Backbone.View.extend({
    render: function () {
        this.$el.html('<li class="glist-li social-hover"><p class="glist-name">' + this.model.get("name") + '</p><p class="glist-anagram">' + this.model.get("anagram") + '</p><p class="glist-points">point: ' + this.model.get("points") + '</p></li>')
        return this;
    }
})

var GuildListView = Backbone.View.extend({

    initialize: function () {
        this.profilGuildView = new ProfilGuildView();
    },

    generate_list: function () {
        var self = this;
        var guildC = new GuildCollection();
        guildC.fetch({ data: { name: $("#guild-list-input").val(), checked: $("#guild-list-input-check").is(":checked") } }).then(function () {
            $("#guild-list").html('');
            guildC.each(function (guild) {
                var guildLiView = new GuildLiView({ model: guild });
                $("#guild-list").append(guildLiView.render().$el);
                120147
            })
            $(".glist-li").click(function (e) {
                self.profilGuildView.render(e);
            })
        })
    },

    render: function () {
        var self = this;
        $("#flex_div").append('<h2 id="guild-list-title">guild list</h2>');
        $("#flex_div").append('<div><input id="guild-list-input" type="text"></input><input id="guild-list-input-check" type="checkbox"></input><p id="guild-list-classed-check">classed by rank</p></div>');
        $("#flex_div").append('<div><ul id="guild-list"></ul></div>');

        $("#guild-list-input").keyup(function () {
            self.generate_list();
        })
        self.generate_list();
    }
})

export { GuildListView }