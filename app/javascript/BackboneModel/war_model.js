var War = Backbone.Model.extend({
    urlRoot: "/api/wars",
});

var Wars = Backbone.Collection.extend({
    model: War,

    url: "/api/wars.json",
});

export { Wars, War }