import { User } from "./user_model";

var Guild = Backbone.Model.extend({
    urlRoot: "/api/guilds",
})

var GuildCollection = Backbone.Collection.extend({
    url: "/api/guilds"
});

var guildCollection = new GuildCollection;

export { Guild, guildCollection, GuildCollection }