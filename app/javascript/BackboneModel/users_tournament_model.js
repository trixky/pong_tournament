var UserTourament = Backbone.Model.extend({
    urlRoot: "/api/userstournament",
});

var UsersTourament = Backbone.Collection.extend({
    model: UserTourament,

    url: "/api/userstournament.json",
});

export { UserTourament, UsersTourament }