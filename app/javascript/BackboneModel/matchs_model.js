var Match = Backbone.Model.extend({
    urlRoot: "/api/matchs",
});

var Matchs = Backbone.Collection.extend({
    model: Match,

    url: "/api/matchs.json",
});

export { Match, Matchs }