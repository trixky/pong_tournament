var Tournament = Backbone.Model.extend({
    urlRoot: "/api/tournaments",
});

var Tournaments = Backbone.Collection.extend({
    model: Tournament,

    url: "/api/tournaments.json",
});

export { Tournament, Tournaments }