var Battle = Backbone.Model.extend({
    urlRoot: "/api/battles",
});

var Battles = Backbone.Collection.extend({
    model: Battle,

    url: "/api/battles.json",
});

export {Battle, Battles}
