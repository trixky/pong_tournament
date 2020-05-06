import { loginContent, loginMenu } from "../BackboneViews/LoginView";
import { createUserMenu, createUserContent } from "../BackboneViews/CreateUserView";
import { connectedContent, connectedMenu } from "../BackboneViews/ConnectedView";
import { settingsContent } from "../BackboneViews/SettingsView"
import { socialView } from "../BackboneViews/SocialView"
import { guildCreateContent, guildContent, guildJoinContent, guildManageContent } from "../BackboneViews/GuildView";
import { tokenValidity } from "../utils/utils_1"
import { adminContentView, adminMenuView } from "../BackboneViews/AdminView"
import { denied, banned } from "../BackboneViews/DeniedView"
import { twoFactorContent } from "../BackboneViews/TwoFactorView"
import { gameContent } from "../BackboneViews/GameView"
import { tournamentContent } from "../BackboneViews/TournamentView"

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({ pushState: true });
  },
  routes: {
    '': "home",
    "connected/create_user": "createUser",
    "connected/play": "connectedUser",
    "connected/settings": "connectedSettings",
    "connected/guild": "connectedGuild",
    "connected/guild/create": "createGuild",
    "connected/guild/join": "joinGuild",
    "connected/guild/manage": "manageGuild",
    "admin": "admin",
    "acces_denied": "denied",
    "banned": "banned",
    "twofactor": "twofactor",
    "connected/game": "game",
    "connected/tournament": "tournament"
  },
  home: function () {
    $(".social").html("");
    loginContent.render();
    loginMenu.render();
    $('#left-button-minimize').remove()
  },
  createUser: function () {
    createUserContent.render();
    createUserMenu.render();
  },
  connectedUser: function () {
    tokenValidity([connectedContent]);
  },
  connectedSettings: function () {
    tokenValidity([settingsContent]);
  },
  connectedGuild: async function () {
    tokenValidity([guildContent]);
  },
  createGuild: function () {
    tokenValidity([guildCreateContent]);
  },
  joinGuild: function () {
    tokenValidity([guildJoinContent]);
  },
  manageGuild: function () {
    tokenValidity([guildManageContent]);
  },
  admin: function () {
    $(".social").html("");
    tokenValidity([adminContentView, adminMenuView]);
  },
  denied: function () {
    denied.render();
  },
  banned: function () {
    banned.render();
  },
  twofactor: function () {
    twoFactorContent.render();
  },
  game: function () {
    tokenValidity([gameContent]);
  },
  tournament: function () {
    tokenValidity([tournamentContent]);
  }
});
var router = new Router;

export { router };
