/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/BackboneModel/ban_model.js":
/*!***************************************************!*\
  !*** ./app/javascript/BackboneModel/ban_model.js ***!
  \***************************************************/
/*! exports provided: Ban */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ban", function() { return Ban; });
var Ban = Backbone.Model.extend({
  urlRoot: "/api/bans"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/battle_list_model.js":
/*!***********************************************************!*\
  !*** ./app/javascript/BackboneModel/battle_list_model.js ***!
  \***********************************************************/
/*! exports provided: Battle, Battles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Battle", function() { return Battle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Battles", function() { return Battles; });
var Battle = Backbone.Model.extend({
  urlRoot: "/api/battles"
});
var Battles = Backbone.Collection.extend({
  model: Battle,
  url: "/api/battles.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/chat_list_model.js":
/*!*********************************************************!*\
  !*** ./app/javascript/BackboneModel/chat_list_model.js ***!
  \*********************************************************/
/*! exports provided: Chatroom, Chatrooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chatroom", function() { return Chatroom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chatrooms", function() { return Chatrooms; });
var Chatroom = Backbone.Model.extend({
  urlRoot: "/api/chatrooms"
});
var Chatrooms = Backbone.Collection.extend({
  model: Chatroom,
  url: "/api/chatrooms.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/friend_list_model.js":
/*!***********************************************************!*\
  !*** ./app/javascript/BackboneModel/friend_list_model.js ***!
  \***********************************************************/
/*! exports provided: Friend, Friends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Friend", function() { return Friend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Friends", function() { return Friends; });
var Friend = Backbone.Model.extend({
  urlRoot: "/api/friends"
});
var Friends = Backbone.Collection.extend({
  model: Friend,
  url: "/api/friends.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/friends_message_model.js":
/*!***************************************************************!*\
  !*** ./app/javascript/BackboneModel/friends_message_model.js ***!
  \***************************************************************/
/*! exports provided: FriendsMessage, FriendsMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsMessage", function() { return FriendsMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsMessages", function() { return FriendsMessages; });
var FriendsMessage = Backbone.Model.extend({
  urlRoot: "/api/friendsmessages"
});
var FriendsMessages = Backbone.Collection.extend({
  model: FriendsMessage,
  url: "/api/friendsmessages.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/game_model.js":
/*!****************************************************!*\
  !*** ./app/javascript/BackboneModel/game_model.js ***!
  \****************************************************/
/*! exports provided: GameModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModel", function() { return GameModel; });
var GameModel = Backbone.Model.extend({
  urlRoot: "/api/games"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/guild_model.js":
/*!*****************************************************!*\
  !*** ./app/javascript/BackboneModel/guild_model.js ***!
  \*****************************************************/
/*! exports provided: Guild, guildCollection, GuildCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guild", function() { return Guild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guildCollection", function() { return guildCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildCollection", function() { return GuildCollection; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_model */ "./app/javascript/BackboneModel/user_model.js");

var Guild = Backbone.Model.extend({
  urlRoot: "/api/guilds"
});
var GuildCollection = Backbone.Collection.extend({
  url: "/api/guilds"
});
var guildCollection = new GuildCollection();


/***/ }),

/***/ "./app/javascript/BackboneModel/matchs_model.js":
/*!******************************************************!*\
  !*** ./app/javascript/BackboneModel/matchs_model.js ***!
  \******************************************************/
/*! exports provided: Match, Matchs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matchs", function() { return Matchs; });
var Match = Backbone.Model.extend({
  urlRoot: "/api/matchs"
});
var Matchs = Backbone.Collection.extend({
  model: Match,
  url: "/api/matchs.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/message_model.js":
/*!*******************************************************!*\
  !*** ./app/javascript/BackboneModel/message_model.js ***!
  \*******************************************************/
/*! exports provided: Message, Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
var Message = Backbone.Model.extend({
  urlRoot: "/api/messages"
});
var Messages = Backbone.Collection.extend({
  model: Message,
  url: "/api/messages.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/notification_model.js":
/*!************************************************************!*\
  !*** ./app/javascript/BackboneModel/notification_model.js ***!
  \************************************************************/
/*! exports provided: Notification, Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return Notifications; });
var Notification = Backbone.Model.extend({
  urlRoot: "/api/notifications"
});
var Notifications = Backbone.Collection.extend({
  model: Notification,
  url: "/api/notifications.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/tournament_model.js":
/*!**********************************************************!*\
  !*** ./app/javascript/BackboneModel/tournament_model.js ***!
  \**********************************************************/
/*! exports provided: Tournament, Tournaments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tournament", function() { return Tournament; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tournaments", function() { return Tournaments; });
var Tournament = Backbone.Model.extend({
  urlRoot: "/api/tournaments"
});
var Tournaments = Backbone.Collection.extend({
  model: Tournament,
  url: "/api/tournaments.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/user_model.js":
/*!****************************************************!*\
  !*** ./app/javascript/BackboneModel/user_model.js ***!
  \****************************************************/
/*! exports provided: User, usersCollection, usersCollection_2, UsersCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersCollection", function() { return usersCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersCollection_2", function() { return usersCollection_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersCollection", function() { return UsersCollection; });
var User = Backbone.Model.extend({
  urlRoot: "/api/users",
  "default": {
    two_factor: false,
    victory: 0,
    loss: 0,
    status: "",
    banned: false
  }
});
var UsersCollection = Backbone.Collection.extend({
  model: User,
  url: "/api/users"
});
var usersCollection = new UsersCollection();
var usersCollection_2 = new UsersCollection();
var Users = new UsersCollection();


/***/ }),

/***/ "./app/javascript/BackboneModel/users_chatroom_model.js":
/*!**************************************************************!*\
  !*** ./app/javascript/BackboneModel/users_chatroom_model.js ***!
  \**************************************************************/
/*! exports provided: UsersChatroom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersChatroom", function() { return UsersChatroom; });
var UsersChatroom = Backbone.Model.extend({
  urlRoot: "/api/userschatrooms"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/users_tournament_model.js":
/*!****************************************************************!*\
  !*** ./app/javascript/BackboneModel/users_tournament_model.js ***!
  \****************************************************************/
/*! exports provided: UserTourament, UsersTourament */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTourament", function() { return UserTourament; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTourament", function() { return UsersTourament; });
var UserTourament = Backbone.Model.extend({
  urlRoot: "/api/userstournament"
});
var UsersTourament = Backbone.Collection.extend({
  model: UserTourament,
  url: "/api/userstournament.json"
});


/***/ }),

/***/ "./app/javascript/BackboneModel/war_model.js":
/*!***************************************************!*\
  !*** ./app/javascript/BackboneModel/war_model.js ***!
  \***************************************************/
/*! exports provided: Wars, War */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wars", function() { return Wars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "War", function() { return War; });
var War = Backbone.Model.extend({
  urlRoot: "/api/wars"
});
var Wars = Backbone.Collection.extend({
  model: War,
  url: "/api/wars.json"
});


/***/ }),

/***/ "./app/javascript/BackboneRouter/application_router.js":
/*!*************************************************************!*\
  !*** ./app/javascript/BackboneRouter/application_router.js ***!
  \*************************************************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BackboneViews_LoginView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneViews/LoginView */ "./app/javascript/BackboneViews/LoginView.js");
/* harmony import */ var _BackboneViews_CreateUserView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneViews/CreateUserView */ "./app/javascript/BackboneViews/CreateUserView.js");
/* harmony import */ var _BackboneViews_ConnectedView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneViews/ConnectedView */ "./app/javascript/BackboneViews/ConnectedView.js");
/* harmony import */ var _BackboneViews_SettingsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneViews/SettingsView */ "./app/javascript/BackboneViews/SettingsView.js");
/* harmony import */ var _BackboneViews_SocialView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BackboneViews/SocialView */ "./app/javascript/BackboneViews/SocialView.js");
/* harmony import */ var _BackboneViews_GuildView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BackboneViews/GuildView */ "./app/javascript/BackboneViews/GuildView.js");
/* harmony import */ var _utils_utils_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils_1 */ "./app/javascript/utils/utils_1.js");
/* harmony import */ var _BackboneViews_AdminView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BackboneViews/AdminView */ "./app/javascript/BackboneViews/AdminView.js");
/* harmony import */ var _BackboneViews_DeniedView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BackboneViews/DeniedView */ "./app/javascript/BackboneViews/DeniedView.js");
/* harmony import */ var _BackboneViews_TwoFactorView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../BackboneViews/TwoFactorView */ "./app/javascript/BackboneViews/TwoFactorView.js");
/* harmony import */ var _BackboneViews_GameView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../BackboneViews/GameView */ "./app/javascript/BackboneViews/GameView.js");
/* harmony import */ var _BackboneViews_TournamentView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../BackboneViews/TournamentView */ "./app/javascript/BackboneViews/TournamentView.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }













var Router = Backbone.Router.extend({
  initialize: function initialize() {
    Backbone.history.start({
      pushState: true
    });
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
  home: function home() {
    $(".social").html("");
    _BackboneViews_LoginView__WEBPACK_IMPORTED_MODULE_1__["loginContent"].render();
    _BackboneViews_LoginView__WEBPACK_IMPORTED_MODULE_1__["loginMenu"].render();
    $('#left-button-minimize').remove();
  },
  createUser: function createUser() {
    _BackboneViews_CreateUserView__WEBPACK_IMPORTED_MODULE_2__["createUserContent"].render();
    _BackboneViews_CreateUserView__WEBPACK_IMPORTED_MODULE_2__["createUserMenu"].render();
  },
  connectedUser: function connectedUser() {
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_ConnectedView__WEBPACK_IMPORTED_MODULE_3__["connectedContent"]]);
  },
  connectedSettings: function connectedSettings() {
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_SettingsView__WEBPACK_IMPORTED_MODULE_4__["settingsContent"]]);
  },
  connectedGuild: function () {
    var _connectedGuild = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_GuildView__WEBPACK_IMPORTED_MODULE_6__["guildContent"]]);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function connectedGuild() {
      return _connectedGuild.apply(this, arguments);
    }

    return connectedGuild;
  }(),
  createGuild: function createGuild() {
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_GuildView__WEBPACK_IMPORTED_MODULE_6__["guildCreateContent"]]);
  },
  joinGuild: function joinGuild() {
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_GuildView__WEBPACK_IMPORTED_MODULE_6__["guildJoinContent"]]);
  },
  manageGuild: function manageGuild() {
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_GuildView__WEBPACK_IMPORTED_MODULE_6__["guildManageContent"]]);
  },
  admin: function admin() {
    $(".social").html("");
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_AdminView__WEBPACK_IMPORTED_MODULE_8__["adminContentView"], _BackboneViews_AdminView__WEBPACK_IMPORTED_MODULE_8__["adminMenuView"]]);
  },
  denied: function denied() {
    _BackboneViews_DeniedView__WEBPACK_IMPORTED_MODULE_9__["denied"].render();
  },
  banned: function banned() {
    _BackboneViews_DeniedView__WEBPACK_IMPORTED_MODULE_9__["banned"].render();
  },
  twofactor: function twofactor() {
    _BackboneViews_TwoFactorView__WEBPACK_IMPORTED_MODULE_10__["twoFactorContent"].render();
  },
  game: function game() {
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_GameView__WEBPACK_IMPORTED_MODULE_11__["gameContent"]]);
  },
  tournament: function tournament() {
    Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_7__["tokenValidity"])([_BackboneViews_TournamentView__WEBPACK_IMPORTED_MODULE_12__["tournamentContent"]]);
  }
});
var router = new Router();


/***/ }),

/***/ "./app/javascript/BackboneViews/AdminChatroomPannelView.js":
/*!*****************************************************************!*\
  !*** ./app/javascript/BackboneViews/AdminChatroomPannelView.js ***!
  \*****************************************************************/
/*! exports provided: AdminChatroomPannelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminChatroomPannelView", function() { return AdminChatroomPannelView; });
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/users_chatroom_model */ "./app/javascript/BackboneModel/users_chatroom_model.js");
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");



var AdminChatroomPannelView = Backbone.View.extend({
  render: function render(self, e) {
    if (self.panelChatroomAdminIsOpen == false) {
      self.panelChatroomAdminIsOpen = true;
      $(".Center").append('<div class="PopUp" id="popup-chatroom-administration">\
            <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' + ($(e.currentTarget).html() == '♔' ? '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-delete" value="🗑"></input>' : '') + '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
            <h2 id="title-popup-chatroom-pannel">' + $(e.currentTarget).prev().html() + '</h2>\
            <div id="owner-input-chat-controller-pannel">\
            </div>\
            <ul id="pseudo-list-adminstation-list">\
            </ul>\
            </div>');

      if ($(e.currentTarget).html() == '♔') {
        $("#owner-input-chat-controller-pannel").append('<input type="password" id="picpc-1" placeholder="current password  (to change an old password)"></input>\
                <input type="password" id="picpc-2" placeholder="new password"></input>\
                <input type="password" id="picpc-3" placeholder="new password  (again)"></input>\
                <p id="nacp" >need actual password for change the password</p>\
                <input type="button" class="social-hover" id="cap-input-1" value="add/change password"></input>\
                <input type="button" class="social-hover" id="cap-input-2" value="remove password"></input>');
      } else {
        $("#owner-input-chat-controller-pannel").remove();
      }

      var refreshList = function refreshList() {
        var users = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__["UsersCollection"]();
        users.fetch({
          data: {
            findby: "chatroom",
            value: $(e.currentTarget).prev().html()
          }
        }).then(function () {
          $("#pseudo-list-adminstation-list").html('');
          users.each(function (user) {
            var bandate = user.get("bandate");
            if (bandate == null) date_string = "--/--/---";else {
              var date = new Date(bandate);
              var date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
            }
            $("#pseudo-list-adminstation-list").append('<li class="user-li">\
                    <p class="pseudo-adminstation-list">' + user.get("pseudo") + '</p>\
                            <input type="button" class="li-chat-adm cap-input-3 social-hover" value="♙"' + (!user.get("admin") ? 'style="background:yellow;"' : '') + ' ' + (user.get("owner") ? 'disabled' : '') + '></input>\
                            <input type="button" class="li-chat-adm cap-input-4 social-hover" value="♗"' + (user.get("admin") ? 'style="background:yellow;"' : '') + ' ' + (user.get("owner") ? 'disabled' : '') + '></input>\
                            <p class="date-adminstation-list">' + date_string + '</p>\
                            <input type="date" class="li-chat-adm cap-input-5"' + (user.get("admin") ? 'disabled' : '') + '></input>\
                            <input type="button" class="li-chat-adm cap-input-6 social-hover" value="ban"' + (user.get("admin") ? 'disabled' : '') + '></input>\
                            <input type="button" class="li-chat-adm cap-input-7 social-hover" value="unban"' + (user.get("admin") ? 'disabled' : '') + '></input>\
                        </li>');
          });
          $("#cap-input-1").click(function (ee) {
            var chatroom = new _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_2__["Chatroom"]({
              id: $("#title-popup-chatroom-pannel").html()
            });
            chatroom.save({
              change_add_password: true,
              older: $("#picpc-1").val(),
              new_1: $("#picpc-2").val(),
              new_2: $("#picpc-3").val()
            }).then(function () {
              refreshList();
              $("#picpc-1").val('');
              $("#picpc-2").val('');
              $("#picpc-3").val('');
            });
          });
          $("#cap-input-2").click(function (ee) {
            var chatroom = new _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_2__["Chatroom"]({
              id: $("#title-popup-chatroom-pannel").html()
            });
            chatroom.save({
              remove_password: true
            }).then(function () {
              refreshList();
            });
          });
          $(".cap-input-3").click(function (ee) {
            var usersChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]();
            usersChatroom.save({
              id: $(e.currentTarget).prev().html(),
              pseudo: $(ee.currentTarget).prev().html(),
              admin: false
            }).then(function () {
              refreshList();
            });
          });
          $(".cap-input-4").click(function (ee) {
            var usersChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]();
            usersChatroom.save({
              id: $(e.currentTarget).prev().html(),
              pseudo: $(ee.currentTarget).prev().prev().html(),
              admin: true
            }).then(function () {
              refreshList();
            });
          });
          $(".cap-input-6").click(function (ee) {
            var usersChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]();
            usersChatroom.save({
              id: $(e.currentTarget).prev().html(),
              pseudo: $(ee.currentTarget).prev().prev().prev().prev().prev().html(),
              bandate: $(ee.currentTarget).prev().val()
            }).then(function () {
              refreshList();
            });
          });
          $(".cap-input-7").click(function (ee) {
            var usersChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]();
            usersChatroom.save({
              id: $(e.currentTarget).prev().html(),
              pseudo: $(ee.currentTarget).prev().prev().prev().prev().prev().prev().html(),
              annule_bandate: true
            }).then(function () {
              refreshList();
            });
          });
        });
      };

      var removePopup = function removePopup() {
        self.panelChatroomAdminIsOpen = false;
        $(".PopUp").remove();
      };

      refreshList();
      self.mouseIn = false;
      $(".PopUp").hover(function () {
        self.mouseIn = true;
      }, function () {
        self.mouseIn = false;
      });
      $("body").mouseup(function () {
        if (self.mouseIn == false) removePopup();
      });
      $("#popup-chatroom-administration-refresh").click(function () {
        refreshList();
      });
      $("#popup-chatroom-administration-quit").click(function () {
        removePopup();
      });
      $("#popup-chatroom-administration-delete").click(function () {
        var chatroom = new _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_2__["Chatroom"]();
        chatroom.set({
          id: $("#title-popup-chatroom-pannel").html()
        });
        chatroom.fetch().then(function () {
          chatroom.destroy().then(function () {
            self.bus.trigger("leaveChatroom", $("#title-popup-chatroom-pannel").html());
            self.render();
            removePopup();
          });
        });
      });
    }
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/AdminTournamentPannelView.js":
/*!*******************************************************************!*\
  !*** ./app/javascript/BackboneViews/AdminTournamentPannelView.js ***!
  \*******************************************************************/
/*! exports provided: AdminTournamentPannelView_generated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTournamentPannelView_generated", function() { return AdminTournamentPannelView_generated; });
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/users_chatroom_model */ "./app/javascript/BackboneModel/users_chatroom_model.js");
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");
/* harmony import */ var _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneModel/tournament_model */ "./app/javascript/BackboneModel/tournament_model.js");




var AdminTournamentPannelView = Backbone.View.extend({
  render: function render(self, e) {
    var selfself = this;

    if (self.panelTournamentAdminIsOpen == false) {
      self.panelTournamentAdminIsOpen = true;
      var tournament = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_3__["Tournament"]({
        id: $(e.currentTarget).children().html()
      });
      tournament.fetch().then(function () {
        var date_s_r = new Date(tournament.get("start_registration"));
        var date_s_r_string = date_s_r.getDate() + '/' + date_s_r.getMonth() + '/' + date_s_r.getFullYear() + '  ' + date_s_r.getHours() + ':' + date_s_r.getMinutes();
        var date_e_r = new Date(tournament.get("end_registration"));
        var date_e_r_string = date_e_r.getDate() + '/' + date_e_r.getMonth() + '/' + date_e_r.getFullYear() + '  ' + date_e_r.getHours() + ':' + date_e_r.getMinutes();
        var date_s_t = new Date(tournament.get("start_at"));
        var date_s_t_string = date_s_t.getDate() + '/' + date_s_t.getMonth() + '/' + date_s_t.getFullYear() + '  ' + date_s_t.getHours() + ':' + date_s_t.getMinutes();
        var date_e_t = new Date(tournament.get("end_at"));
        var date_e_t_string = date_e_t.getDate() + '/' + date_e_t.getMonth() + '/' + date_e_t.getFullYear() + '  ' + date_e_t.getHours() + ':' + date_e_t.getMinutes();
        $(".Center").append('<div class="PopUp" id="popup-chatroom-administration">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' + '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-delete" value="🗑"></input>\
                <h2 id="title-popup-chatroom-pannel">' + $(e.currentTarget).children().html() + '</h2>\
                <div>\
                    <h3>registration start</h3><p class="atp-date">' + date_s_r_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-1">update</button>\
                </div>\
                <div>\
                    <h3>registration end</h3><p class="atp-date">' + date_e_r_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-2">update</button>\
                </div>\
                <div>\
                    <h3>tournament start</h3><p class="atp-date">' + date_s_t_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-3">update</button>\
                </div>\
                <div>\
                    <h3>tournament end</h3><p class="atp-date">' + date_e_t_string + '</p><input type="date" class="atp-date-input"></input><button class="atp-change-button" id="atpcb-4">update</button>\
                </div>');

        var removePopup = function removePopup() {
          self.panelTournamentAdminIsOpen = false;
          $(".PopUp").remove();
        };

        self.mouseIn = false;
        $(".PopUp").hover(function () {
          self.mouseIn = true;
        }, function () {
          self.mouseIn = false;
        });
        $("body").mouseup(function () {
          if (self.mouseIn == false) removePopup();
        });
        $("#popup-chatroom-administration-quit").click(function () {
          removePopup();
        });
        $("#popup-chatroom-administration-delete").click(function () {
          var tournament = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_3__["Tournament"]({
            id: $(e.currentTarget).children().html()
          });
          tournament.destroy().then(function () {
            removePopup();
            self.updateList();
          });
        });
        $("#atpcb-1").click(function (ee) {
          if ($(ee.currentTarget).prev().val() != "") {
            var tournament_atpcb_1 = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_3__["Tournament"]({
              id: $(e.currentTarget).children().prev().html(),
              start_registration: $(ee.currentTarget).prev().val()
            });
            tournament_atpcb_1.save().then(function (res) {
              if (res["res"] != "success") {
                alert(res["res"]);
              }

              removePopup();
              selfself.render(self, e);
            });
          }
        });
        $("#atpcb-2").click(function (ee) {
          if ($(ee.currentTarget).prev().val() != "") {
            var tournament_atpcb_2 = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_3__["Tournament"]({
              id: $(e.currentTarget).children().prev().html(),
              end_registration: $(ee.currentTarget).prev().val()
            });
            tournament_atpcb_2.save().then(function (res) {
              if (res["res"] != "success") {
                alert(res["res"]);
              }

              removePopup();
              selfself.render(self, e);
            });
          }
        });
        $("#atpcb-3").click(function (ee) {
          if ($(ee.currentTarget).prev().val() != "") {
            var tournament_atpcb_3 = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_3__["Tournament"]({
              id: $(e.currentTarget).children().prev().html(),
              start_at: $(ee.currentTarget).prev().val()
            });
            tournament_atpcb_3.save().then(function (res) {
              if (res["res"] != "success") {
                alert(res["res"]);
              }

              removePopup();
              selfself.render(self, e);
            });
          }
        });
        $("#atpcb-4").click(function (ee) {
          if ($(ee.currentTarget).prev().val() != "") {
            var tournament_atpcb_4 = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_3__["Tournament"]({
              id: $(e.currentTarget).children().prev().html(),
              end_at: $(ee.currentTarget).prev().val()
            });
            tournament_atpcb_4.save().then(function (res) {
              if (res["res"] != "success") {
                alert(res["res"]);
              }

              removePopup();
              selfself.render(self, e);
            });
          }
        });
      });
    }
  }
});
var AdminTournamentPannelView_generated = new AdminTournamentPannelView();


/***/ }),

/***/ "./app/javascript/BackboneViews/AdminView.js":
/*!***************************************************!*\
  !*** ./app/javascript/BackboneViews/AdminView.js ***!
  \***************************************************/
/*! exports provided: adminContentView, adminMenuView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminContentView", function() { return adminContentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminMenuView", function() { return adminMenuView; });
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/guild_model */ "./app/javascript/BackboneModel/guild_model.js");
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");
/* harmony import */ var _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneModel/users_chatroom_model */ "./app/javascript/BackboneModel/users_chatroom_model.js");
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BackboneModel/tournament_model */ "./app/javascript/BackboneModel/tournament_model.js");
/* harmony import */ var _BackboneViews_AdminTournamentPannelView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BackboneViews/AdminTournamentPannelView */ "./app/javascript/BackboneViews/AdminTournamentPannelView.js");







var AdminContentView = Backbone.View.extend({
  events: {
    "keyup #adminSearch": "updateList",
    "change #selectValAdmin": "updateList",
    "click .adminBox": "handleClick",
    "click #quitPopUpAdmin": "removePopUp",
    "click #confirmAdmin": "confirm",
    "keyup #c": "updateMemberList",
    "click .adminMemberBox": "handleMemberClick",
    "keyup #adminChatSearch": "updateChatroomUserList",
    "click #chatAdminBox": "handleChatClick"
  },
  initialize: function initialize() {
    this.adminTournamentPannelView = _BackboneViews_AdminTournamentPannelView__WEBPACK_IMPORTED_MODULE_6__["AdminTournamentPannelView_generated"];
  },
  render: function render() {
    var _this = this;

    var self = this;
    self.panelTournamentAdminIsOpen = false;
    axios.get("/api/users/".concat(Cookies.get("login"))).then(function (res) {
      if (res.data.admin == false) {
        $(".social").empty();
        $(".Menu").empty();
        $(".Center").html("\n\t\t\t\t<div id=\"confirmDiv\">\n\t\t\t\t\t<h1> ERROR: YOU NEED TO BE AN ADMIN TO ACCESS THIS PAGE </h1>\n\t\t\t\t\t<h1> Click <span id=\"loginSpan\"> here </span> to go to login page </h1>\n\t\t\t\t</div>");
        $("body").append("<div class=\"BackClick\"></div>");
        $("#loginSpan").click(function () {
          $(".BackClick").remove();
          $("#confirmDiv").remove();
          $(".Menu").css({
            "background-color": "black"
          });
          _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_4__["router"].navigate("", {
            trigger: true
          });
        });
      } else {
        _this.$el.html("\n                <div id=\"select\">\n                <select id=\"selectValAdmin\">\n                    <option value=\"0\">users</option>\n                    <option value=\"1\">guilds</option>\n                    <option value=\"2\">chatrooms</option>\n                    <option value=\"3\">tournaments</option>\n                </select>\n                </div>\n                <input id=\"adminSearch\"/>\n                <div id=\"listAdmin\"> </div>\n                ");

        $("#selectValAdmin").css({
          "background-color": "#0356fc"
        });

        _this.updateList();
      }

      return _this;
    });
  },
  updateList: function updateList() {
    var self = this;
    $("#listAdmin").empty();

    if ($("#selectValAdmin option:selected").text() == "users") {
      _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__["usersCollection"].fetch({
        data: {
          pseudo: $("#adminSearch").val()
        }
      }).then(function (res) {
        _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__["usersCollection"].each(function (model) {
          $("#listAdmin").append("\n                    <div class=\"adminBox\">\n                        <p id=\"login\">".concat(model.attributes["login"], "</p>\n                        <p id=\"pseudo\">").concat(model.attributes["pseudo"], "</p>\n                    </div>\n                    "));
        });
      });
    } else if ($("#selectValAdmin option:selected").text() == "guilds") {
      _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_1__["guildCollection"].fetch({
        data: {
          name: $("#adminSearch").val(),
          admin: true
        }
      }).then(function (res) {
        _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_1__["guildCollection"].each(function (model) {
          $("#listAdmin").append("\n                    <div class=\"adminBox\" id=".concat(model.attributes["id"], ">\n                        <p id=\"name\">").concat(model.attributes["name"], "</p>\n                        <p id=\"anagram\">").concat(model.attributes["anagram"], "</p>\n                        <p>").concat(model.attributes["points"], "</p>\n                    </div>\n                    "));
        });
      });
    } else if ($("#selectValAdmin option:selected").text() == "chatrooms") {
      var chatrooms = new _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_2__["Chatrooms"]();
      chatrooms.fetch({
        data: {
          search_entry: $("#adminSearch").val(),
          admin: true
        }
      }).then(function (res) {
        chatrooms.each(function (model) {
          $("#listAdmin").append("\n                    <div class=\"adminBox\" id=".concat(model.attributes["id"], ">\n                        <p id=\"name\">").concat(model.attributes["name"], "</p>\n                    </div>\n                    "));
        });
      });
    } else if ($("#selectValAdmin option:selected").text() == "tournaments") {
      var tournaments = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_5__["Tournaments"]();
      tournaments.fetch({
        data: {
          name: $("#adminSearch").val()
        }
      }).then(function () {
        $("#listAdmin").html('<div id="list-tournament"></div>');
        tournaments.each(function (model) {
          var date_start = new Date(model.attributes["start_at"]);
          var date_start_string = date_start.getDate() + '/' + date_start.getMonth() + '/' + date_start.getFullYear() + '  ' + date_start.getHours() + ':' + date_start.getMinutes();
          var date_end = new Date(model.attributes["end_at"]);
          var date_end_string = date_end.getDate() + '/' + date_end.getMonth() + '/' + date_end.getFullYear() + '  ' + date_end.getHours() + ':' + date_end.getMinutes();
          $("#list-tournament").append('<div class="adminBox-tab">\
                    <p class="tab-name">' + model.attributes["name"] + '</p>\
                    <p class="tab-time">[' + date_start_string + ' - ' + date_end_string + ']</p>\
                    </div>');
        });
        $("#listAdmin").append('<div class="create-tournament">\
                    <h2>create new tournament</h2>\
                    <p class="create-tournament-input-p">regisration start:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-1" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">regisration end:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-2" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">tournament start:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-3" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">tournament end:</p>\
                    <input class="create-tournament-input" id="create-tournament-input-4" type="datetime-local"></input>\
                    <br>\
                    <p class="create-tournament-input-p">prize</p>\
                    <input class="create-tournament-input" id="create-tournament-input-5" type="number"></input>\
                    <br>\
                    <p class="create-tournament-input-p">name</p>\
                    <input class="create-tournament-input" id="create-tournament-input-6" type="texte"></input>\
                    <br>\
                    <input id="button-create-tournament" class="create-tournament-input" type="button" value="create">\
                </div>');
        $("#button-create-tournament").click(function () {
          if ($("#create-tournament-input-1").val() != '' && $("#create-tournament-input-2").val() != '' && $("#create-tournament-input-3").val() != '' && $("#create-tournament-input-4").val() != '') {
            var tournament = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_5__["Tournament"]({
              start_registration: $("#create-tournament-input-1").val(),
              end_registration: $("#create-tournament-input-2").val(),
              start_at: $("#create-tournament-input-3").val(),
              end_at: $("#create-tournament-input-4").val(),
              prize: $("#create-tournament-input-5").val(),
              name: $("#create-tournament-input-6").val()
            });
            tournament.save().then(function (res) {
              if (res["res"] != "success") {
                alert(res["res"]);
              }

              self.updateList();
            });
          }
        });
        $(".adminBox-tab").click(function (e) {
          self.adminTournamentPannelView.render(self, e);
        });
      });
    }
  },
  handleClick: function handleClick(e) {
    var _this2 = this;

    if ($("#selectValAdmin option:selected").text() == "users" && $(".PopUp").length == 0) {
      $("body").append("<div class=\"BackClick\"></div>");
      $(".BackClick").click(function () {
        _this2.removePopUp();
      });
      this.login = e.currentTarget.querySelector("#login").innerHTML;
      $(".Center").append("\n            <div class=\"PopUp\" id=\"PopUpAdmin\">\n            <p class=\"QuitPopUp\" id=\"quitPopUpAdmin\">\u274C</p>\n            <h1>login: ".concat(e.currentTarget.querySelector("#login").innerHTML, "</h1>\n            <h1>pseudo: ").concat(e.currentTarget.querySelector("#pseudo").innerHTML, "</h1>\n            <div class=\"AdminCheckBox\">\n            <h1> Ban user </h1>\n            <input id=\"banUserCheck\" type=\"checkbox\"/>\n            </div>\n            <button id=\"confirmAdmin\"> confirm </button>\n            </div>\n            "));
      var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
      user.set({
        id: e.currentTarget.querySelector("#login").innerHTML
      });
      user.fetch().then(function (res) {
        if (res["ban"] == "true") {
          $('#banUserCheck').prop('checked', true);
        }
      });
    } else if ($("#selectValAdmin option:selected").text() == "guilds" && $(".PopUp").length == 0) {
      $("body").append("<div class=\"BackClick\"></div>");
      $(".BackClick").click(function () {
        _this2.removePopUp();
      });
      this.guildId = $(e.currentTarget).attr("id");
      $("body").append("<div class=\"BackClick\"></div>");
      $(".BackClick").click(function () {
        _this2.removePopUp();
      });
      $(".Center").append("\n            <div class=\"PopUp\" id=\"PopUpAdmin\">\n            <p class=\"QuitPopUp\" id=\"quitPopUpAdmin\">\u274C</p>\n            <h1>name: ".concat(e.currentTarget.querySelector("#name").innerHTML, "</h1>\n            <h1>anagram: ").concat(e.currentTarget.querySelector("#anagram").innerHTML, "</h1>\n            <input placeholder=\"search for guild member\" id=\"adminGuildSearch\"/>\n            <div id=\"listGuildAdmin\"></div>\n            </div>\n            "));
      this.updateMemberList();
    } else if ($("#selectValAdmin option:selected").text() == "chatrooms" && $(".PopUp").length == 0) {
      $("body").append("<div class=\"BackClick\"></div>");
      $(".BackClick").click(function () {
        _this2.removePopUp();
      });
      $(".Center").append("\n            <div class=\"PopUp\" id=\"PopUpAdmin\">\n            <p class=\"QuitPopUp\" id=\"quitPopUpAdmin\">\u274C</p>\n            <h1>".concat(e.currentTarget.querySelector("#name").innerHTML, "</h1>\n            <input placeholder=\"search for chatroom member\" id=\"adminChatSearch\"/>\n            <div id=\"listChatAdmin\"></div>\n            </div>"));
      this.chatroom = e.currentTarget.querySelector("#name").innerHTML;
      this.updateChatroomUserList();
    }
  },
  removePopUp: function removePopUp() {
    $(".PopUp").remove();
    $(".BackClick").remove();
  },
  confirm: function confirm() {
    var _this3 = this;

    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]({
      id: this.login
    });
    var banned;
    if ($('#banUserCheck').prop('checked')) banned = "true";else banned = "false";
    user.fetch().then(function () {
      user.set({
        banned: banned
      });
      user.save();

      _this3.removePopUp();
    });
  },
  updateMemberList: function updateMemberList() {
    axios.get("/api/guilds/".concat(this.guildId, "?pseudo=").concat($("#adminGuildSearch").val(), "&admin=true")).then(function (res) {
      var object = JSON.parse(res["request"].response);
      $("#listGuildAdmin").empty();
      $.each(object, function (i) {
        $("#listGuildAdmin").append("\n                <div class=\"adminMemberBox\">\n                <p id=\"name\">".concat(object[i]["pseudo"], "</p>\n                <p>").concat(object[i]["guildStatus"], "</p>\n                <p id=\"ban\">ban</p>\n                <p id=\"promote\">promote</p>\n                <p id=\"demote\">demote</p>\n                </div>\n                "));
      });
    });
  },
  handleMemberClick: function handleMemberClick(e) {
    var _this4 = this;

    if (e.target.innerHTML == "ban") {
      var user = e.currentTarget.querySelector("#name").innerHTML;
      axios.patch("/api/guilds/".concat(this.guildId, "?ban=").concat(user)).then(function (res) {
        _this4.updateMemberList();
      });
    } else if (e.target.innerHTML == "promote") {
      var user = e.currentTarget.querySelector("#name").innerHTML;
      axios.patch("/api/guilds/".concat(this.guildId, "?promote=").concat(user)).then(function (res) {
        _this4.updateMemberList();
      });
    } else if (e.target.innerHTML == "demote") {
      var user = e.currentTarget.querySelector("#name").innerHTML;
      axios.patch("/api/guilds/".concat(this.guildId, "?demote=").concat(user)).then(function (res) {
        _this4.updateMemberList();
      });
    }
  },
  updateChatroomUserList: function updateChatroomUserList() {
    $("#listChatAdmin").empty();
    axios.get("/api/chatrooms/".concat(this.chatroom, "?user=").concat($("#adminChatSearch").val())).then(function (res) {
      $.each(res.data, function (i) {
        var status;
        if (res.data[i].owner == true) status = "owner";else if (res.data[i].admin == true) status = "admin";else status = "member";
        $("#listChatAdmin").append("\n                <div class=\"adminBox\" id=\"chatAdminBox\" chat_id=".concat(res.data[i].chat_id, " user_id=").concat(res.data[i].id, ">\n                <p id=\"login\">").concat(res.data[i].login, "</p>\n                <p id=\"pseudo\">").concat(res.data[i].pseudo, "</p>\n                <p id=\"status\">").concat(status, "</p>\n                <p id=\"promote\">promote</p>\n                <p id=\"demote\">demote</p>\n                </div>\n                "));
      });
    });
  },
  handleChatClick: function handleChatClick(e) {
    var _this5 = this;

    if ($(e.target).attr("id") == "promote") {
      axios.patch("/api/userschatrooms/".concat($(e.currentTarget).attr("chat_id"), "?user_id=").concat($(e.currentTarget).attr("user_id"), "&promote=true")).then(function (res) {
        _this5.updateChatroomUserList();
      });
    } else if ($(e.target).attr("id") == "demote") axios.patch("/api/userschatrooms/".concat($(e.currentTarget).attr("chat_id"), "?user_id=").concat($(e.currentTarget).attr("user_id"), "&demote=true")).then(function (res) {
      _this5.updateChatroomUserList();
    });
  }
});
var AdminMenuView = Backbone.View.extend({
  render: function render() {
    $(".Menu").html("\n        <div class=\"NavBar\">\n        <h1 id=\"title\"> Ultimate Pong Tournament </h1>\n        <div>\n        <h1 id=\"disconnect\"> Disconnect </h1>\n        </div>\n        </div>\n        ");
    $(".Menu").css({
      "background-color": "#0356fc"
    });
    return this;
  }
});
var adminContentView = new AdminContentView({
  el: ".Center"
});
var adminMenuView = new AdminMenuView({
  el: ".Menu"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/ChatListView.js":
/*!******************************************************!*\
  !*** ./app/javascript/BackboneViews/ChatListView.js ***!
  \******************************************************/
/*! exports provided: ChatListViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListViews", function() { return ChatListViews; });
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");
/* harmony import */ var _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/users_chatroom_model */ "./app/javascript/BackboneModel/users_chatroom_model.js");


var NotificationView = Backbone.View.extend({
  initialize: function initialize(options) {
    this.bus = options.bus;
  },
  events: {
    "click .title-notification": "onClick"
  },
  onClick: function onClick() {
    this.bus.trigger("notificationSelected", this);
  },
  render: function render() {
    this.$el.html('<li class="notification"><p class="title-notification social-hover">' + "notification" + '</p></li>');
    return this;
  }
});
var ChatroomView = Backbone.View.extend({
  initialize: function initialize(options) {
    this.bus = options.bus;
  },
  events: {
    "click .title-chatroom": "onClick"
  },
  onClick: function onClick() {
    this.bus.trigger("chatroomSelected", this.model);
  },
  render: function render() {
    this.$el.html('<li class="chatroom"><p class="title-chatroom social-hover">' + this.model.get("name") + '</p><p class="subscribers-grade' + (this.model.get("owner") || this.model.get("admin") == true ? ' social-hover' : '') + '">' + (this.model.get("owner") == true ? '♔' : this.model.get("admin") == true ? '♗' : '♙') + '</p><p class="user-leave social-hover">⎋</p></li>');
    return this;
  }
});
var ChatListViews = Backbone.View.extend({
  el: ".chat-list",
  initialize: function initialize(options) {
    var self = this;
    this.chatrooms = new _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_0__["Chatrooms"]();
    this.search_is_open = false;
    this.bus = options.bus;
    this.adminChatroomPannelView = options.adminChatroomPannelView;
    this.notifications = options.notifications;
  },
  generateSearchList: function generateSearchList() {
    var self = this;
    $("#search-corps").html('<ul id="chat-search-list">\
        </ul>');
    this.chatrooms.fetch({
      data: {
        search_entry: $("#input-button-search-chatroom").val()
      }
    }).then(function () {
      $("#chat-search-list").html("");
      self.chatrooms.each(function (chatroom) {
        $("#chat-search-list").append('<li class="chatroom"><p class="title-chatroom-search">' + chatroom.get("name") + (chatroom.get("private") ? ' 🔒' : '') + '</p><p class="user-enter social-hover" data-private="' + (chatroom.get("private") ? true : false) + '" data-open="false">⎆</p></li><input type="text" class="pass chatroom-text-input" placeholder="password..." style="display:none;"></input>');
      });
      $(".user-enter").click(function (e) {
        var green_button = this;

        if (green_button.getAttribute("data-private") == 'true') {
          var password_input = $(e.currentTarget).parent().next();

          if ($(e.currentTarget).parent().next().attr("style") == "display:none;") {
            password_input.attr("style", "display:block;");
            password_input.focus();
          } else {
            var userChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]();
            var chatroom_name = $(e.currentTarget).parent().children(".title-chatroom-search").html();
            userChatroom.set({
              chatroom: chatroom_name.substring(0, chatroom_name.length - 3),
              password: password_input.val()
            });
            userChatroom.save({}, {
              success: function success(model, response) {
                if (response.created != "success") alert("imposssible de rejoindre le channel: " + response.created);
              }
            }).then(function () {
              // userChatroom.destroy()
              self.render();
            });
          }
        } else {
          var userChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]();
          userChatroom.set({
            chatroom: $(e.currentTarget).parent().children(".title-chatroom-search").html()
          });
          userChatroom.save({}, {
            success: function success(model, response) {
              if (response.created != "success") alert("imposssible de rejoindre le channel: " + response.created);
            }
          }).then(function () {
            // userChatroom.destroy()
            self.render();
          });
        }
      });
    });
  },
  events: {
    "click #right-button-sub": "onClickForSearch",
    "click .user-leave": "onClickForLeave"
  },
  onClickForSearch: function onClickForSearch() {
    var self = this;

    if (this.search_is_open == false) {
      $("#chat-list").prepend('<div id="search-sub">\
                    <input type="text" id="input-button-search-chatroom"></input><p class="private-chatroom-button social-hover">🤫</p><p class="create-chatroom-button social-hover">C</p>\
                    <div id="search-corps">\
                    </div>\
                </div>');
      $("#input-button-search-chatroom").keyup(function (e) {
        self.generateSearchList();
      });
      self.generateSearchList();
      $(".private-chatroom-button").click(function (e) {
        $("#search-corps").html('<div id="div-private-chatroom-search-topbar"><p class="private-chatroom-search-topbar">join private chatroom</p><p class="user-enter-private social-hover">⎆</p></div>\
                    <input class="chatroom-text-input private-input" id="private-chatroom-name-input" placeholder="chatroom name" type="texte"></input>\
                    <input class="pass chatroom-text-input private-input" id="private-chatroom-password-input" placeholder="password" type="text"></input>');
        $(".user-enter-private").click(function (e) {
          var userChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]();
          userChatroom.set({
            chatroom: $("#private-chatroom-name-input").val(),
            password: $("#private-chatroom-password-input").val()
          });
          userChatroom.save({}, {
            success: function success(model, response) {
              if (response.created != "success") alert("imposssible de rejoindre le channel: " + response.created);
            }
          }).then(function () {
            // userChatroom.destroy()
            self.render();
          });
        });
      });
      $(".create-chatroom-button").click(function (e) {
        $("#search-corps").html('<div id="div-create-chatroom-search-topbar"><p class="create-chatroom-search-topbar">create your chatroom</p><p class="user-enter-create social-hover">⎆</p></div>\
                    <input class="chatroom-text-input create-input" id="private-chatroom-name-input" placeholder="chatroom name" type="texte"></input>\
                    <input class="chatroom-text-input create-input" id="private-chatroom-password-input" placeholder="password" type="text" disabled></input>\
                    <input class="pass chatroom-check-input create-input" id="chatroom-check-password-input" type="checkbox"></input><p class="chatroom-tag-create-input">password</p>\
                    <input class="chatroom-check-input create-input" id="chatroom-check-private-input" type="checkbox"></input><p class="chatroom-tag-create-input">private</p>');
        $(".user-enter-create").click(function (e) {
          /* create */
          var chatroom = new _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_0__["Chatroom"]();
          chatroom.set({
            chatroom: $("#private-chatroom-name-input").val(),
            "protected": $("#chatroom-check-password-input").is(":checked"),
            password: $("#private-chatroom-password-input").val(),
            "private": !$("#chatroom-check-private-input").is(":checked")
          });
          chatroom.save({}, {
            success: function success(model, response) {
              if (response.created != "success") alert("imposssible de rejoindre le channel: " + response.created);
            }
          }).then(function () {
            // chatroom.destroy()
            self.render();
          });
        });
        $("#chatroom-check-password-input").click(function (e) {
          /* password check */
          if ($("#chatroom-check-password-input").is(":checked")) {
            $("#private-chatroom-password-input").prop("disabled", false);
          } else {
            $("#private-chatroom-password-input").prop("disabled", true);
            $("#private-chatroom-password-input").val('');
          }
        });
        $("#chatroom-check-private-input").click(function (e) {
          /* private check */
          if ($("#chatroom-check-private-input").is(":checked")) {
            $("#private-chatroom-password-input").prop("disabled", false);
            $("#chatroom-check-password-input").prop("checked", true);
            $("#chatroom-check-password-input").prop("disabled", true);
          } else {
            $("#chatroom-check-password-input").prop("checked", false);
            $("#chatroom-check-password-input").prop("disabled", false);
            $("#private-chatroom-password-input").prop("disabled", true);
            $("#private-chatroom-password-input").val('');
          }
        });
      });
      $("#right-button-sub").html("−");
      $("#right-button-sub").css("background", "red");
      this.search_is_open = true;
    } else {
      $("#right-button-sub").html("✚");
      $("#right-button-sub").css("background", "green");
      $("#search-sub").remove();
      this.search_is_open = false;
    }
  },
  onClickForLeave: function onClickForLeave(e) {
    var self = this;

    if ($(e.currentTarget).prev().html() == '♔') {
      alert("attention, en tant que owner de la chatroom, pour quitter celle-ci, vous devez la detruire via le chat-pannel-controller");
    } else {
      var userChatroom = new _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__["UsersChatroom"]({
        id: $(e.currentTarget).parent().children(".title-chatroom").html()
      });
      userChatroom.destroy().then(function () {
        self.render();
      });
    }
  },
  render: function render() {
    var self = this;
    self.panelChatroomAdminIsOpen = false;
    this.search_is_open = false;
    this.$el.html('<div id="chat-list">\
            <div id="chat-list-top-bar">\
                <p id="center">YourSubs</p><p id="right-button-sub" class="social-hover">✚</p>\
            </div>\
            <ul id="chat-list-container">\
            </ul>\
            </div>');
    $("#right-button-sub").css("background", "green");
    var notificationView = new NotificationView({
      bus: self.bus
    });
    self.$el.find("ul#chat-list-container").append(notificationView.render().$el);
    self.notifications.fetch().then(function () {
      if (self.notifications.length > 0) {
        $(".title-notification").addClass("notification-blink");
      }
    });
    self.model.fetch().then(function () {
      self.model.each(function (chatroom) {
        var chatroomView = new ChatroomView({
          model: chatroom,
          bus: self.bus
        });
        self.$el.find("ul#chat-list-container").append(chatroomView.render().$el);
      });
      self.generateSearchList();
      $(".subscribers-grade.social-hover").click(function (e) {
        self.adminChatroomPannelView.render(self, e);
      });
      return self;
    });
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/ChatView.js":
/*!**************************************************!*\
  !*** ./app/javascript/BackboneViews/ChatView.js ***!
  \**************************************************/
/*! exports provided: ChatViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViews", function() { return ChatViews; });
/* harmony import */ var _channels_chat_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../channels/chat_channel */ "./app/javascript/channels/chat_channel.js");
/* harmony import */ var _channels_consumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channels/consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/friend_list_model */ "./app/javascript/BackboneModel/friend_list_model.js");
/* harmony import */ var _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneModel/battle_list_model */ "./app/javascript/BackboneModel/battle_list_model.js");
/* harmony import */ var _BackboneModel_friends_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneModel/friends_message_model */ "./app/javascript/BackboneModel/friends_message_model.js");





var ChatFriendMessageView = Backbone.View.extend({
  render: function render() {
    var date = new Date(this.model.get("date"));
    var date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
    this.$el.html('<li class="message"><p class="user-message">' + this.model.get("username") + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + this.model.get("content") + '</p></li>');
    return this;
  }
});
var ChatMessageView = Backbone.View.extend({
  render: function render() {
    var date = new Date(this.model.get("date"));
    var date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
    this.$el.html('<li class="message"><p class="user-message">' + this.model.get("username") + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + this.model.get("content") + '</p></li>');
    return this;
  }
});
var ChatNotificationView = Backbone.View.extend({
  render: function render() {
    var date = new Date(this.model.get("date"));
    var date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();

    if (this.model.get("type") != undefined) {
      if (this.model.get("type") == 'friend-request') {
        this.$el.html('<li class="notification"><p class="time-notification-message">' + date_string + '</p><br><p class="content-notification">' + this.model.get("value") + '</p><p class="accept-notification social-hover">✓</p><p class="decline-notification social-hover">✖</p></li>');
      } else if (this.model.get("type") == 'casual-battle') {
        this.$el.html('<li class="notification"><p class="time-notification-message">' + date_string + '</p><br><p class="content-notification">' + this.model.get("value") + '</p><p class="accept-notification social-hover">⚔</p><p class="decline-notification social-hover">✖</p></li>');
      }
    }

    return this;
  }
});
var ChatViews = Backbone.View.extend({
  el: ".chat-message",
  disconnected: function disconnected(room) {
    if (room != undefined) {
      for (var i = 0; i < _channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions.length; i++) {
        if (JSON.parse(_channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i].identifier).room == room && JSON.parse(_channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i].identifier).channel == "ChatChannel") {
          _channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i].unsubscribe();
        }

        ;
      }

      ;
    }
  },
  initialize: function initialize(options) {
    this.notificationInChat = false;
    this.friendInChat = undefined;
    this.bus = options.bus;
    this.bus.on("chatroomSelected", this.chatroomSelected, this);
    this.bus.on("chatroomRefresh", this.chatroomRefresh, this);
    this.bus.on("notificationReceived", this.notificationReceived, this);
    this.bus.on("notificationSelected", this.notificationSelected, this);
    this.bus.on("friendChatroomSelected", this.friendChatroomSelected, this);
    this.bus.on("friendChatroomRefresh", this.friendChatroomRefresh, this);
    this.bus.on("leaveChatroom", this.leaveChatroom, this);
    this.message_model = options.message_model;
    this.notifications = options.notifications;
    this.friendsMessages = options.friendsMessages;
  },
  select_chatroom_connection: function select_chatroom_connection() {
    if (this.chatroom_model != undefined) {
      for (var i = 0; i < _channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions.length; i++) {
        if (JSON.parse(_channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i].identifier).room == this.chatroom_model.get("name") && JSON.parse(_channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i].identifier).channel == "ChatChannel") {
          return _channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i];
        }

        ;
      }

      ;
    }
  },
  chatroomRefresh: function chatroomRefresh(data) {
    if (this.chatroom_model != undefined && data["messageContent"] == this.chatroom_model.get("name")) this.render();
  },
  select_user_connection: function select_user_connection() {
    for (var i = 0; i < _channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions.length; i++) {
      if (JSON.parse(_channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i].identifier).channel == 'UserChannel') {
        return _channels_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.subscriptions[i];
      }

      ;
    }

    ;
  },
  chatroomSelected: function chatroomSelected(chatroom) {
    this.notificationInChat = false;
    this.friendInChat = undefined;
    var needToDisconnect = this.chatroom_model == undefined;

    if (needToDisconnect || chatroom.get("name") != this.chatroom_model.get("name")) {
      if (!needToDisconnect) {
        this.disconnected(this.chatroom_model.get("name"));
      }

      this.chatroom_model = chatroom;
      this.render();
    }
  },
  friendChatroomRefresh: function friendChatroomRefresh() {
    this.render();
  },
  notificationReceived: function notificationReceived() {
    var self = this;
    self.notifications.fetch().then(function () {
      if (self.notifications.length > 0) {
        $(".title-notification").addClass("notification-blink");
      } else {
        $(".title-notification").removeClass("notification-blink");
      }
    });
  },
  notificationSelected: function notificationSelected() {
    this.notificationInChat = true;
    this.friendInChat = undefined;

    if (this.chatroom_model != undefined) {
      this.disconnected(this.chatroom_model.get("name"));
      this.chatroom_model = undefined;
    }

    $(".title-notification").removeClass("notification-blink");
    this.render();
  },
  friendChatroomSelected: function friendChatroomSelected(friend) {
    this.friendInChat = friend.get("pseudo");
    this.notificationInChat = false;

    if (this.chatroom_model != undefined) {
      this.disconnected(this.chatroom_model.get("name"));
      this.chatroom_model = undefined;
    }

    $("#chat-top-bar > p#center").data("friend-chat-open", "true");
    this.render();
  },
  leaveChatroom: function leaveChatroom(chatroom_name) {
    this.notificationInChat = false;

    if (this.chatroom_model && this.chatroom_model.get("name") == chatroom_name) {
      this.disconnected(chatroom_name);
      this.chatroom_model = undefined;
      this.notificationInChat = false;
      this.render();
    }
  },
  events: {
    "click #input-button": "onClick",
    "keydown": "keyDown"
  },
  onClick: function onClick() {
    this.sendMessage();
  },
  keyDown: function keyDown(e) {
    var code = e.keyCode || e.which;

    if (code == 13) {
      this.sendMessage();
    }
  },
  sendMessage: function sendMessage() {
    if (this.chatroom_model) {
      if (this.friendInChat == undefined) {
        this.select_chatroom_connection().send({
          messageContent: $("#input_content").val()
        });
      }
    } else if ($("#chat-top-bar > p#center").attr("friend-chat-open") != undefined) {
      this.select_user_connection().send({
        recipient: $("#chat-top-bar > p#center").html(),
        messageContent: $("#input_content").val()
      });
    }

    $("#input_content").val("");
  },
  render: function render() {
    var self = this;

    if (this.chatroom_model) {
      Object(_channels_chat_channel__WEBPACK_IMPORTED_MODULE_0__["channel_gen"])("ChatChannel", this.chatroom_model.get("name"), "", undefined);
    }

    this.$el.html('<div id="chat-message">\
            <div id="chat-top-bar">\
                <p id="center">no chatroom selected</p>\
            </div>\
            <ul id="message-container">\
            </ul>\
            <div id="inputs">\
                <input type="text" id="input_content" placeholder="your message...">\
                <button id="input-button">send</button>\
            </div>\
        </div> ');

    if (this.friendInChat != undefined) {
      $("#chat-top-bar > p#center").attr("friend-chat-open", "true");
    }

    if (this.chatroom_model) {
      $("#chat-top-bar > p#center").html(this.chatroom_model.get("name"));
      this.message_model.fetch({
        data: {
          chatroom_name: this.chatroom_model.get("name")
        }
      }).then(function () {
        self.message_model.each(function (message) {
          var chatMessageView = new ChatMessageView({
            model: message
          });
          self.$el.find("#message-container").append(chatMessageView.render().$el);
        });
        $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
      });
    } else if (this.notificationInChat == true) {
      $("#chat-top-bar > p#center").html('notification');
      self.notifications.fetch().then(function () {
        self.$el.find("#message-container").html('');
        self.notifications.each(function (notification) {
          var chatNotificationView = new ChatNotificationView({
            model: notification
          });
          self.$el.find("#message-container").append(chatNotificationView.render().$el);
        });
        $(".accept-notification").click(function (e) {
          if ($(e.currentTarget).html() == '✓') {
            var friend = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__["Friend"]({
              id: $(e.currentTarget).prev().html(),
              order: 'accept-invitation'
            });
            friend.save().then(function () {
              self.bus.trigger("refreshFriendsList", self);
              self.render();
            });
          } else if ($(e.currentTarget).html() == '⚔') {
            var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_3__["Battle"]({
              id: $(e.currentTarget).prev().html(),
              type_battle: 'casual'
            });
            battle.save().then(function (res) {
              if (res && res["error"]) alert("user not connected");
              self.render();
            });
          }
        });
        $(".decline-notification").click(function (e) {
          if ($(e.currentTarget).prev().html() == '✓') {
            var friend = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__["Friend"]({
              id: $(e.currentTarget).prev().prev().html(),
              order: 'decline-invitation'
            });
            friend.save().then(function () {
              self.bus.trigger("refreshFriendsList", self);
              self.render();
            });
          } else if ($(e.currentTarget).prev().html() == '⚔') {
            var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_3__["Battle"]({
              id: $(e.currentTarget).prev().prev().html()
            });
            battle.destroy({
              data: {
                type_battle: 'casual'
              },
              processData: true
            }).then(function () {
              self.render();
            });
          }
        });
      });
    } else if (this.friendInChat != undefined) {
      var self = this;
      $("#chat-top-bar > p#center").html(this.friendInChat);
      this.friendsMessages.fetch().then(function () {
        self.friendsMessages.each(function (friendMessage) {
          var chatFriendMessageView = new ChatFriendMessageView({
            model: friendMessage
          });
          self.$el.find("#message-container").append(chatFriendMessageView.render().$el);
        });
        $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
      });
    }

    return this;
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/ConnectedView.js":
/*!*******************************************************!*\
  !*** ./app/javascript/BackboneViews/ConnectedView.js ***!
  \*******************************************************/
/*! exports provided: connectedMenu, connectedContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectedMenu", function() { return connectedMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectedContent", function() { return connectedContent; });
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _utils_utils_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils_1 */ "./app/javascript/utils/utils_1.js");



var ConnectedContent = Backbone.View.extend({
  events: {
    "click #settingsButton": "settingsClicked"
  },
  render: function render() {
    var _this = this;

    $("#errorCreate").remove();
    var src;
    var pseudo;
    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]({
      id: Cookies.get("login")
    });
    pseudo = Cookies.get("pseudo");
    src = Cookies.get("url");

    if (src == "null" || src.length == 0) {
      src = "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png";
    } else if (!Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_2__["imageExists"])(src)) {
      user.fetch().then(function (res) {
        src = res["url"];
      });
    }

    if (pseudo == "null") {
      user.fetch().then(function (res) {
        pseudo = res["pseudo"];

        _this.displayHtml(pseudo, src);
      });
    } else this.displayHtml(pseudo, src);
  },
  displayHtml: function displayHtml(pseudo, src) {
    var _this2 = this;

    axios.get("/api/users/".concat(Cookies.get("login"))).then(function (res) {
      _this2.$el.html("\n            <div id=\"flex_div\">\n                <img src=\"".concat(src, "\"> </img>\n                <h1> ").concat(pseudo, " </h1>\n                <h2> rank: ").concat(res["data"]["rank"], " </h2>\n                <h2> wins: ").concat(res["data"]["win"], " </h2>\n                <h2> loss: ").concat(res["data"]["loss"], " </h2>\n                <button id=\"settingsButton\"> settings </button>\n            </div>\n            "));

      return _this2;
    });
  },
  settingsClicked: function settingsClicked() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/settings", {
      trigger: true
    });
  }
});
var ConnectedMenu = Backbone.View.extend({
  events: {
    "click #play": "play",
    "click #guild": "guild",
    "click #disconnect": "disconnect",
    "click #tournament": "tournament"
  },
  render: function render() {
    this.$el.html(" <div class=\"NavBar\">\n            <h1 id=\"title\"> Ultimate Pong Tournament </h1>\n                <div>\n                    <h1 id=\"play\"> Play </h1>\n                    <h1 id=\"tournament\"> Tournament </h1>\n                    <h1 id=\"guild\"> Guild </h1>\n                    <h1 id=\"disconnect\"> Disconnect </h1>\n                </div>\n            </div>");
    return this;
  },
  home: function home() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/play", {
      trigger: true
    });
  },
  play: function play() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/play", {
      trigger: true
    });
  },
  guild: function guild() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/guild", {
      trigger: true
    });
  },
  disconnect: function disconnect() {
    Cookies.remove("url");
    Cookies.remove("login");
    Cookies.remove("pseudo");
    Cookies.remove("two_factor");
    Cookies.remove("id");
    Cookies.remove("token");
    Cookies.remove("guildId");
    $(".Menu").css({
      "background-color": "black"
    });
    axios.get("/api/log?disconnect=true").then(function () {
      _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("", {
        trigger: true
      });
    });
  },
  tournament: function tournament() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/tournament", {
      trigger: true
    });
  }
});
var connectedContent = new ConnectedContent({
  el: ".Center"
});
var connectedMenu = new ConnectedMenu({
  el: ".Menu"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/CreateUserView.js":
/*!********************************************************!*\
  !*** ./app/javascript/BackboneViews/CreateUserView.js ***!
  \********************************************************/
/*! exports provided: createUserContent, createUserMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserContent", function() { return createUserContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserMenu", function() { return createUserMenu; });
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _utils_utils_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils_1 */ "./app/javascript/utils/utils_1.js");



var CreateUserContent = Backbone.View.extend({
  events: {
    "click #registerButton": "registerUser"
  },
  render: function render() {
    this.$el.html("\n        <div id=\"flex_div\">\n            <h1> Create User </h1>\n            <input id=\"pseudo\" placeholder=\"pseudo\"/>\n            <button id=\"registerButton\"> create </button>\n        </div>\n        ");
    return this;
  },
  registerUser: function registerUser() {
    if ($("#pseudo").val().length < 3) {
      if ($("#errorCreate").length == 0) $(".Center").append("<p id=\"errorCreate\"> The user pseudo must be at least 3 character </p>");
      return;
    }

    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]({
      login: Cookies.get("login"),
      pseudo: $("#pseudo").val()
    });
    user.save(null, {
      success: function success(res) {
        if (res.attributes.error) {
          if (!$("#errorCreate").length) $(".Center").append("<p id=\"errorCreate\"> error: Username already exist in the database </p>");
        } else {
          Cookies.set("id", res.attributes["id"]);
          _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("/connected/play", {
            trigger: true
          });
        }
      }
    });
  }
});
var CreateUserMenu = Backbone.View.extend({
  render: function render() {
    this.$el.html(" <div class=\"NavBar\">\n            <h1 id=\"title\"> Ultimate Pong Tournament </h1>\n        </div>");
    return this;
  },
  home: function home() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("", {
      trigger: true
    });
  }
});
var createUserContent = new CreateUserContent({
  el: ".Center"
});
var createUserMenu = new CreateUserMenu({
  el: ".Menu"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/DeniedView.js":
/*!****************************************************!*\
  !*** ./app/javascript/BackboneViews/DeniedView.js ***!
  \****************************************************/
/*! exports provided: denied, banned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "denied", function() { return denied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banned", function() { return banned; });
var Denied = Backbone.View.extend({
  render: function render() {
    var _this = this;

    $("body").append("<div class=\"BackClick\"></div>");
    $(".BackClick").click(function () {
      _this.removePopUp();
    });
    $(".App").html("\n            <div id=\"confirmDiv\">\n                <h1> ACCES DENIED </h1>\n            </div>\n        ");
  }
});
var Banned = Backbone.View.extend({
  render: function render() {
    var _this2 = this;

    $("body").append("<div class=\"BackClick\"></div>");
    $(".BackClick").click(function () {
      _this2.removePopUp();
    });
    $(".App").html("\n            <div id=\"confirmDiv\">\n                <h1> BANNED  </h1>\n            </div>\n        ");
  }
});
var denied = new Denied();
var banned = new Banned();


/***/ }),

/***/ "./app/javascript/BackboneViews/FriendListView.js":
/*!********************************************************!*\
  !*** ./app/javascript/BackboneViews/FriendListView.js ***!
  \********************************************************/
/*! exports provided: FriendListViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListViews", function() { return FriendListViews; });
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");
/* harmony import */ var _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/users_chatroom_model */ "./app/javascript/BackboneModel/users_chatroom_model.js");
/* harmony import */ var _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/friend_list_model */ "./app/javascript/BackboneModel/friend_list_model.js");
/* harmony import */ var _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneModel/battle_list_model */ "./app/javascript/BackboneModel/battle_list_model.js");
/* harmony import */ var _BackboneModel_ban_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneModel/ban_model */ "./app/javascript/BackboneModel/ban_model.js");





var FriendListView = Backbone.View.extend({
  initialize: function initialize(options) {
    this.bus = options.bus;
  },
  events: {
    "click .speech-friend": "onClick"
  },
  onClick: function onClick(e) {
    this.bus.trigger("friendChatroomSelected", this.model);
  },
  render: function render() {
    var right_buttons = '<p class="speech-friend social-hover">💬</p><p class="mute-friend social-hover">' + (this.model.get("i_mute") ? '🔇' : '🔉') + '</p><p class="flb quite-friend social-hover">✖</p>';
    this.$el.html('<li class="friend">\
            <p class="friend-name ' + (this.model.get('onsite') == true ? 'green-dot ' : 'red-dot ') + 'social-hover">' + this.model.get("pseudo") + '</p>' + right_buttons + '</li>');
    return this;
  }
});
var FriendListViews = Backbone.View.extend({
  el: ".friend-list",
  initialize: function initialize(options) {
    var self = this;
    this.friends = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__["Friends"]();
    this.search_is_open = false;
    this.bus = options.bus;
    this.users = options.users;
    this.profilView = options.profilView;
    this.bus.on("refreshFriendsList", this.refreshFriendsList, this);
  },
  refreshFriendsList: function refreshFriendsList(e) {
    if (e.status != undefined) {
      if (e.status) {
        $(".friend-name:contains('" + e.pseudo + "')").addClass('green-dot');
        $(".friend-name:contains('" + e.pseudo + "')").removeClass('red-dot');
      } else {
        $(".friend-name:contains('" + e.pseudo + "')").addClass('red-dot');
        $(".friend-name:contains('" + e.pseudo + "')").removeClass('green-dot');
      }
    }
  },
  generateSearchList: function generateSearchList() {
    var self = this;
    $("#search-friend-corps").html('<ul id="friend-search-list">\
        </ul>');
    this.users.fetch({
      data: {
        pseudo: $("#input-button-search-friend").val(),
        findby: "friend"
      }
    }).then(function () {
      $("#friend-search-list").html("");
      self.users.each(function (user) {
        $("#friend-search-list").append('<li class="friend">\
                <p class="title-friend-search social-hover">' + user.get("pseudo") + '</p>' + (user.get("blocked") == false && user.get("invitation") != "cant_do_anything" ? '<p class="user-invitation social-hover">' + (user.get("invitation") == "can_invite" ? '✋' : '❌') + '</p>' : '') + (user.get("blocked") == false && user.get("battle") != "cant_do_anything" ? '<p class="user-challenge social-hover">' + (user.get("battle") == "can_invite" ? '⚔' : '❌') + '</p>' : '') + (user.get("are_friend") == false ? '<p class="user-ban social-hover">' + (user.get("blocked") == true ? '🏴' : '🏳') + '</p>' : '') + '</li>');
      });
      $("p.title-friend-search").click(function (e) {
        self.profilView.render(self, e);
      });
      $(".user-invitation").click(function (e) {
        if ($(e.currentTarget).html() == '✋') {
          var friend = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__["Friend"]({
            pseudo: $(e.currentTarget).prev().html()
          });
          friend.save().then(function () {
            self.render();
          });
        } else if ($(e.currentTarget).html() == '❌') {
          var friend = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__["Friend"]({
            id: $(e.currentTarget).prev().html()
          });
          friend.destroy().then(function () {
            self.render();
          });
        }
      });
      $(".user-challenge").click(function (e) {
        var left_pseudo = $(e.currentTarget).prev().html();
        if (left_pseudo == '✋' || left_pseudo == '❌') left_pseudo = $(e.currentTarget).prev().prev().html();

        if ($(e.currentTarget).html() == '⚔') {
          var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_3__["Battle"]({
            pseudo: left_pseudo,
            type_battle: 'casual'
          });
          battle.save().then(function () {
            self.render();
          });
        } else if ($(e.currentTarget).html() == '❌') {
          var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_3__["Battle"]({
            id: left_pseudo
          });
          battle.destroy({
            data: {
              type_battle: 'casual'
            },
            processData: true
          }).then(function () {
            self.render();
          });
        }
      });
      $(".user-ban").click(function (e) {
        var left_pseudo = $(e.currentTarget).prev().html();

        if (left_pseudo == '✋' || left_pseudo == '❌' || left_pseudo == '⚔') {
          left_pseudo = $(e.currentTarget).prev().prev().html();

          if (left_pseudo == '✋' || left_pseudo == '❌' || left_pseudo == '⚔') {
            left_pseudo = $(e.currentTarget).prev().prev().prev().html();
          }
        }

        if ($(e.currentTarget).html() == '🏴') {
          var ban = new _BackboneModel_ban_model__WEBPACK_IMPORTED_MODULE_4__["Ban"]({
            id: left_pseudo,
            new_status: false
          });
          ban.save().then(function () {
            self.render();
          });
        } else if ($(e.currentTarget).html() == '🏳') {
          var ban = new _BackboneModel_ban_model__WEBPACK_IMPORTED_MODULE_4__["Ban"]({
            id: left_pseudo,
            new_status: true
          });
          ban.save().then(function () {
            self.render();
          });
        }
      });
    });
  },
  events: {
    "click #right-button-friend": "onClickForSearch",
    "click .user-leave": "onClickForLeave"
  },
  onClickForSearch: function onClickForSearch() {
    var self = this;

    if (this.search_is_open == false) {
      $("#friend-list").prepend('<div id="search-friend">\
                    <input type="text" id="input-button-search-friend"><p class="show-more-friend social-hover">C</p>\
                    <div id="search-friend-corps">\
                    </div>\
                </div>');
      $("#input-button-search-friend").keyup(function (e) {
        self.generateSearchList();
      });
      self.generateSearchList();
      $("#right-button-friend").html("−");
      $("#right-button-friend").css("background", "red");
      this.search_is_open = true;
    } else {
      $("#right-button-friend").html("✚");
      $("#right-button-friend").css("background", "green");
      $("#search-friend").remove();
      this.search_is_open = false;
    }
  },
  quite_friend: function quite_friend() {
    var self = this;
    $(".quite-friend").click(function (e) {
      var friend = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__["Friend"]({
        id: $(e.currentTarget).prev().prev().prev().html()
      });
      friend.destroy().then(function () {
        self.render();
      });
    });
  },
  mute_friend: function mute_friend() {
    var self = this;
    $(".mute-friend").click(function (e) {
      var mute = $(e.currentTarget).html() == '🔉' ? true : false;
      var friend = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_2__["Friend"]({
        id: $(e.currentTarget).prev().prev().html(),
        order: 'mute-friend',
        mute: mute
      });
      friend.save().then(function () {
        if (!mute && $("#chat-top-bar > p#center").html() == $(e.currentTarget).prev().prev().html()) {
          self.bus.trigger("friendChatroomRefresh", this.model);
        }

        self.render();
      });
    });
  },
  render: function render() {
    var self = this;
    self.ProfilIsOpen = false;
    this.search_is_open = false;
    this.$el.html('<div id="friend-list">\
            <div id="friend-list-top-bar">\
                <p id="center-friend-list-top-bar">YourFriends</p><p id="right-button-friend" class="social-hover">✚</p>\
            </div>\
            <ul id="friend-list-container">\
            </ul>\
            </div>');
    $("#right-button-friend").css("background", "green");
    self.model.fetch().then(function () {
      self.$el.find("ul#friend-list-container").html('');
      self.model.each(function (friend) {
        var friendListView = new FriendListView({
          model: friend,
          bus: self.bus
        });
        self.$el.find("ul#friend-list-container").append(friendListView.render().$el);
      });
      self.quite_friend();
      self.mute_friend();
      $(".friend-name.social-hover").click(function (e) {
        self.profilView.render(self, e);
      });
      return self;
    });
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/GameView.js":
/*!**************************************************!*\
  !*** ./app/javascript/BackboneViews/GameView.js ***!
  \**************************************************/
/*! exports provided: gameContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameContent", function() { return gameContent; });
/* harmony import */ var _BackboneModel_game_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/game_model */ "./app/javascript/BackboneModel/game_model.js");
/* harmony import */ var _utils_utils_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils_1 */ "./app/javascript/utils/utils_1.js");
/* harmony import */ var _channels_game_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channels/game_channel */ "./app/javascript/channels/game_channel.js");
/* harmony import */ var _channels_consumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../channels/consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");





var interval;
var GameContent = Backbone.View.extend({
  events: {
    "click #menu": "launch_game",
    "keyup": "keyup_event",
    "keydown": "keydown_event"
  },
  render: function render() {
    var _this = this;

    var game_id = Object(_utils_utils_1__WEBPACK_IMPORTED_MODULE_1__["getUrlParam"])("game_id");
    var game = new _BackboneModel_game_model__WEBPACK_IMPORTED_MODULE_0__["GameModel"]({
      id: game_id
    });
    game.fetch().then(function (res) {
      _this.$el.html("\n            <div id=\"flex_div\">\n            <div id=\"top\">\n            <h2 id=\"score\"> <span id=\"player1\">".concat(res["player_1"], "</span>: <span id=\"scoreP1\">0</span> <span class=\"VS\">VS</span> <span id=\"player2\">").concat(res["player_2"], "</span>: <span id=\"scoreP2\">0</span></h2>\n            <h1 id=\"menu\"></h1>\n            </div>\n            <canvas id=\"pongBoard\" width=750 height=750> </canvas>\n            </div>\n            "));

      if (Cookies.get("pseudo") != res["player_1"] && Cookies.get("pseudo") != res["player_2"]) var guest = true;else var guest = false;
      _this.socket = Object(_channels_game_channel__WEBPACK_IMPORTED_MODULE_2__["game_channel"])(guest, res["player_1"], _this);
      return _this;
    });
  },
  end_game: function end_game() {
    var _this2 = this;

    this.socket.unsubscribe();
    clearInterval(interval);
    var winner;
    if (this.p1.score == 10) winner = $("#player1").text();else winner = $("#player2").text();
    $("#score").hide();
    if ($(".BackClick").length == 0) $("body").append("<div class=\"BackClick\"></div>");
    if ($("#partyEnding").length == 0) $(".Center").append("\n                <div class=\"PopUp\" id=\"partyEnding\">\n                    <h1> ".concat(winner, " <span style=\"color: green\">WIN</span> THE GAME </h1>\n                    <button id=\"endMatchButton\"> Go back to menu </button>\n                </div>\n            "));
    $(".BackClick").click(function () {
      _this2.end = false;
      _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_4__["router"].navigate("connected/play", {
        trigger: true
      });
      $(".BackClick").remove();
    });
    $("#endMatchButton").click(function () {
      _this2.end = false;
      _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_4__["router"].navigate("connected/play", {
        trigger: true
      });
      $(".BackClick").remove();
    });
  }
});
var gameContent = new GameContent({
  el: ".Center"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/GuildListView.js":
/*!*******************************************************!*\
  !*** ./app/javascript/BackboneViews/GuildListView.js ***!
  \*******************************************************/
/*! exports provided: GuildListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildListView", function() { return GuildListView; });
/* harmony import */ var _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/guild_model */ "./app/javascript/BackboneModel/guild_model.js");
/* harmony import */ var _BackboneViews_ProfilGuildView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneViews/ProfilGuildView */ "./app/javascript/BackboneViews/ProfilGuildView.js");


var GuildLiView = Backbone.View.extend({
  render: function render() {
    this.$el.html('<li class="glist-li social-hover"><p class="glist-name">' + this.model.get("name") + '</p><p class="glist-anagram">' + this.model.get("anagram") + '</p><p class="glist-points">point: ' + this.model.get("points") + '</p></li>');
    return this;
  }
});
var GuildListView = Backbone.View.extend({
  initialize: function initialize() {
    this.profilGuildView = new _BackboneViews_ProfilGuildView__WEBPACK_IMPORTED_MODULE_1__["ProfilGuildView"]();
  },
  generate_list: function generate_list() {
    var self = this;
    var guildC = new _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_0__["GuildCollection"]();
    guildC.fetch({
      data: {
        name: $("#guild-list-input").val(),
        checked: $("#guild-list-input-check").is(":checked")
      }
    }).then(function () {
      $("#guild-list").html('');
      guildC.each(function (guild) {
        var guildLiView = new GuildLiView({
          model: guild
        });
        $("#guild-list").append(guildLiView.render().$el);
        120147;
      });
      $(".glist-li").click(function (e) {
        self.profilGuildView.render(e);
      });
    });
  },
  render: function render() {
    var self = this;
    $("#flex_div").append('<h2 id="guild-list-title">guild list</h2>');
    $("#flex_div").append('<div><input id="guild-list-input" type="text"></input><input id="guild-list-input-check" type="checkbox"></input><p id="guild-list-classed-check">classed by rank</p></div>');
    $("#flex_div").append('<div><ul id="guild-list"></ul></div>');
    $("#guild-list-input").keyup(function () {
      self.generate_list();
    });
    self.generate_list();
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/GuildView.js":
/*!***************************************************!*\
  !*** ./app/javascript/BackboneViews/GuildView.js ***!
  \***************************************************/
/*! exports provided: guildCreateContent, guildContent, guildJoinContent, guildManageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guildCreateContent", function() { return guildCreateContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guildContent", function() { return guildContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guildJoinContent", function() { return guildJoinContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guildManageContent", function() { return guildManageContent; });
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/guild_model */ "./app/javascript/BackboneModel/guild_model.js");
/* harmony import */ var _BackboneModel_war_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneModel/war_model */ "./app/javascript/BackboneModel/war_model.js");
/* harmony import */ var _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneModel/battle_list_model */ "./app/javascript/BackboneModel/battle_list_model.js");
/* harmony import */ var _BackboneViews_GuildListView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BackboneViews/GuildListView */ "./app/javascript/BackboneViews/GuildListView.js");







var Guild_matching_popup = Backbone.View.extend({
  render: function render(self) {
    $(".PopUp-guild-matching").remove();

    if (true) {
      var traitement = function traitement(chrono) {
        setTimeout(suiteTraitement, 1000, chrono);
      };

      var suiteTraitement = function suiteTraitement(chrono) {
        if (self.stop_matchine == true) {// nothing
        } else if (chrono > 0) {
          traitement(chrono - 1);
          $('#chrono').html(chrono);
        } else {
          removePopup();
        }
      };

      var chrono = 15;
      self.stop_matchine = false;
      $(".Center").append('<div class="PopUp PopUp-guild-matching" id="popup-profil">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' + '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
                <h2 id="title-popup-chatroom-pannel">' + 'search match' + '</h2>\
                <p id="chrono"><p>\
                <img id="img-chargement-gif" src="https://thumbs.gfycat.com/KnobbyWeirdIlladopsis-size_restricted.gif"><image>\
                </div>');

      var removePopup = function removePopup() {
        self.stop_matchine = true;
        var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_4__["Battle"]({
          id: 'tournament'
        });
        battle.destroy({
          data: {
            type_battle: 'tournament'
          },
          processData: true
        }).then(function () {
          $(".PopUp").remove();
        });
        $("#popUpWar").remove();
        $(".BackClick").remove();
        $(".PopUp").remove();
        self.mouseIn = true;
      };

      traitement(chrono);
      self.mouseIn = false;
      $(".PopUp").hover(function () {
        self.mouseIn = true;
      }, function () {
        self.mouseIn = false;
      });
      $("body").mouseup(function () {
        if (self.mouseIn == false) removePopup();
      });
      $("#popup-chatroom-administration-quit").click(function () {
        removePopup();
      });
    }

    ;
  }
});
var matching_popup = new Guild_matching_popup();
var GuildContent = Backbone.View.extend({
  initialize: function initialize() {
    this.guildListView = new _BackboneViews_GuildListView__WEBPACK_IMPORTED_MODULE_5__["GuildListView"]();
  },
  events: {
    "click #joinGuild": "join",
    "click #createGuild": "create",
    "click #leaveGuild": "leave",
    "click #no": "removeConfirmDiv",
    "click #yes": "exitGuild",
    "click #manageGuild": "manageGuild",
    "click #destroyGuild": "destroyGuildConfirm",
    "click #destroyGuildButton": "destroyGuild",
    "click #exitDestroy": "exitDestroy",
    "click #warMenu": "displayWarMenu",
    "click #quitPopUp": "removeWarMenu",
    "click #giveUpWar": "surrender",
    "click #settingGuildButton": "settings"
  },
  render: function render() {
    var _this = this;

    var self = this;
    self.matchingPopupIsOpen = false;
    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]({
      id: Cookies.get("login")
    });
    user.fetch().then(function (res) {
      if (res["guild_id"] == null) {
        _this.$el.html("\n                <div id=\"flex_div\">\n                    <button id=\"joinGuild\"> Join a Guild </button>\n                    <button id=\"createGuild\"> Create a Guild </button>\n                </div>\n                ");

        self.guildListView.render();
      } else {
        var guild = new _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_2__["Guild"]({
          id: res["guild_id"]
        });
        var user = res;
        guild.fetch().then(function (res) {
          var src;
          if (res.flag.length > 0) src = res.flag;else src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pirate_Flag_of_Jack_Rackham.svg/1024px-Pirate_Flag_of_Jack_Rackham.svg.png";

          _this.$el.html("\n                        <div id=\"flex_div\">\n                        <img src=\"".concat(src, "\"> </img>\n                        <h1> ").concat(res["name"], " </h1>\n                        <h1> ").concat(res["anagram"], " </h1>\n                        <h1> Points: ").concat(res["points"], " </h1> \n                        </div>"));

          if (user["guildStatus"] == "owner") {
            $("#flex_div").append("<button id=\"manageGuild\"> manage the guild </button>");
            $("#flex_div").append("<button id=\"destroyGuild\"> destroy the guild </button>");
          } else {
            $("#flex_div").append("<button id=\"leaveGuild\"> leave the guild </button>");
          }

          self.guildListView.render();
        });
      }
    }).then(function () {
      var guild = new _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_2__["Guild"]({
        id: Cookies.get("guildId")
      });
      guild.fetch().then(function (res) {
        if (res["error"]) {
          return;
        }

        var my_guild = res;
        axios.get("/api/wars/".concat(res["name"])).then(function (res) {
          if (res.data) {
            _this.data = res.data;
            axios.get("/api/users/".concat(Cookies.get("login"))).then(function (res) {
              if (res.data["guild_id"] != null) {
                $("#flex_div").append("<button id=\"warMenu\"> War menu </button>");
              }
            });
          }

          ;
        });
      });
    });
  },
  join: function join() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/guild/join", {
      trigger: true
    });
  },
  create: function create() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/guild/create", {
      trigger: true
    });
  },
  leave: function leave() {
    $(".Center").append("<div id=\"confirmDiv\">\n            <h2> Are you sure you want to leave the guild ? </h2>\n            <div id=\"yesno\">\n                <button id=\"yes\"> yes </button>\n                <button id=\"no\"> no </button>\n            </div>\n        </div>\n        ");
  },
  removeConfirmDiv: function removeConfirmDiv() {
    $("#confirmDiv").remove();
  },
  exitGuild: function exitGuild() {
    var _this2 = this;

    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]({
      id: Cookies.get("login")
    });
    user.fetch();
    user.save({
      guild_id: null,
      guildStatus: null
    }).then(function () {
      $("#confirmDiv").remove();

      _this2.render();
    });
  },
  manageGuild: function manageGuild() {
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/guild/manage", {
      trigger: true
    });
  },
  destroyGuildConfirm: function destroyGuildConfirm() {
    if ($("#popUpDestroy").length == 0) {
      $(".Center").append("<div id=\"popUpDestroy\" class=\"PopUp\">\n                    <h1> Are you sure you want to destroy the guild ? </h1>\n                    <div id=\"yesno\">\n                        <button id=\"destroyGuildButton\"> destroy guild </button>\n                        <button id=\"exitDestroy\"> exit </button>\n                    </div>\n                </div>\n            ");
    }
  },
  destroyGuild: function destroyGuild() {
    var _this3 = this;

    axios["delete"]("/api/guilds/".concat(Cookies.get("guildId"))).then(function (res) {
      _this3.render();
    });
    $("#popUpDestroy").remove();
  },
  exitDestroy: function exitDestroy() {
    $("#popUpDestroy").remove();
  },
  displayWarMenu: function displayWarMenu(e) {
    var _this4 = this;

    var self = this;
    $("body").append("<div class=\"BackClick\"></div>");
    $(".BackClick").click(function () {
      _this4.removeWarMenu();
    });
    $(".Center").append("\n            <div class=\"PopUp\" id=\"popUpWar\">\n                <h1> ".concat(this.data["player1"], " <span style=\"color: red\" > VS </span> ").concat(this.data["player2"], " </h1>\n                <h3> <span style=\"color: #d4af37; font-size: 1.5em\">PRIZE :  ").concat(this.data["prize"], " </span></h3>\n                <p> ").concat(this.data["player1"], " points : ").concat(this.data["player1_points"], " </p>\n                <p> ").concat(this.data["player2"], " points : ").concat(this.data["player2_points"], " </p>\n                <h3> <span style=\"color: red; font-size: 1.5em\">MAX UNANSWERED MATCHS : ").concat(this.data["max_unanswered"], " </span></h3>\n                <p> unanswered match ").concat(this.data["player1"], ": ").concat(this.data["player1_unanswered"], " </p>\n                <p> unanswered match ").concat(this.data["player2"], ": ").concat(this.data["player2_unanswered"], " </p>\n                <h3> <span style=\"color: green; font-size: 1.5em\"> FROM ").concat(new Date(this.data["start_at"]).toDateString(), " TO ").concat(new Date(this.data["end_at"]).toDateString(), " </span> </h3>\n                <div id=\"warTimeList\">\n                </div>\n                <button id=\"giveUpWar\"> surrender </button> \n                <button id=\"battleGuildWar\"> guild battle </button> \n                <p class=\"QuitPopUp\" id=\"quitPopUp\">\u274C</p>\n            </div>\n        "));
    $("#battleGuildWar").click(function () {
      var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_4__["Battle"]({
        type_battle: 'guild'
      });
      battle.save().then(function (res) {
        if (res["possible"] == true) {
          self.removeWarMenu();
          matching_popup.render(self);
        } else {
          alert("unable to start matchmaking:\n- match in progress\n- already pending\n- you are not in a combat period");
        }
      });
    });
    $.each(this.data["timetable"], function (i) {
      $("#warTimeList").append("\n                <p>".concat(_this4.data["timetable"][i], "</p>\n            "));
    }); //si ya match afficher score sinon bouton pour defier
  },
  removeWarMenu: function removeWarMenu() {
    $("#popUpWar").remove();
    $(".BackClick").remove();
  },
  surrender: function surrender() {
    var _this5 = this;

    var war = new _BackboneModel_war_model__WEBPACK_IMPORTED_MODULE_3__["War"]({
      id: this.data.id
    });
    war.fetch().then(function () {
      war.destroy().then(function (res) {
        $(".BackClick").remove();

        _this5.render();
      });
    });
  }
});
var guildContent = new GuildContent({
  el: ".Center"
});
var GuildCreateContent = Backbone.View.extend({
  events: {
    "click #saveGuildButton": "saveGuild"
  },
  render: function render() {
    this.$el.html("\n        <div id=\"flex_div\">\n       <h2 id=\"settingsTitle\"> Create a Guild </h2>\n        <div id=\"inputDiv\">\n        <input id=\"guildName\" placeholder=\"name\"/>\n        <input id=\"guildAnagram\" placeholder=\"anagram\"/>\n        </div>\n        <div class=\"CheckBox\">\n        <p> select an flag image </p>\n        <label id=\"fileLabel\" for=\"fileUpload\"> Select a file </label>\n        <input id=\"fileUpload\" type=\"file\" accept=\"image/*\"/>\n        </div>\n        <button id=\"saveGuildButton\"> create </button>\n        </div>\n        ");
    return this;
  },
  saveGuild: function saveGuild() {
    if ($("#guildName").val().length < 3) {
      if ($("#errorCreate").length == 0) $(".Center").append("<p id=\"errorCreate\"> The guild name must be at least 3 characters </p>");
      return;
    } else $("#errorCreate").remove();

    if ($("#guildAnagram").val().length > 5) {
      if ($("#errorCreate").length == 0) $(".Center").append("<p id=\"errorCreate\"> The guild anagram must be less than 6 characters </p>");
      return;
    } else $("#errorCreate").remove();

    if ($("#guildAnagram").val().length < 2) {
      if ($("#errorCreate").length == 0) $(".Center").append("<p id=\"errorCreate\"> The guild anagram must at least two character long </p>");
      return;
    } else $("#errorCreate").remove();

    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]({
      id: Cookies.get("login")
    });
    user.fetch().then(function (res) {
      var formData = new FormData();

      if (document.getElementById("fileUpload").files.length > 0) {
        var file = document.getElementById("fileUpload").files[0];
        var blob = new Blob([file]);
        formData.append("flag", blob);
      }

      formData.append("name", $("#guildName").val());
      formData.append("points", 0);
      formData.append("anagram", $("#guildAnagram").val());
      formData.append("user", user["id"]);

      if (document.getElementById("fileUpload").files.length > 0) {
        var file = document.getElementById("fileUpload").files[0];
        var blob = new Blob([file]);
        formData.append("flag", blob);
      }

      axios({
        url: "/api/guilds",
        method: "POST",
        data: formData
      }).then(function (res) {
        if (res.data.body == "guild name already exist in the database") {
          if ($("#errorCreate").length == 0) $(".Center").append("<p id=\"errorCreate\"> The guild name is already register </p>");
          return;
        } else $("#errorCreate").remove();

        if (res.data.body == "guild anagram already exist in the database") {
          if ($("#errorCreate").length == 0) $(".Center").append("<p id=\"errorCreate\"> The guild anagram is already register </p>");
          return;
        } else $("#errorCreate").remove();

        Cookies.set("guildId", res.data["id"]);
        _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/guild", {
          trigger: true
        });
      });
    });
  }
});
var guildCreateContent = new GuildCreateContent({
  el: ".Center"
});
var GuildJoinContent = Backbone.View.extend({
  events: {
    "click .guildBox": "joinGuild",
    "keyup #guildSearch": "updateList"
  },
  render: function render() {
    this.$el.html("<h1> Join a guild </h1>\n            <input placeholder=\"search a guild\" id=\"guildSearch\"/>\n            <div id=\"guildList\">\n            </div>\n            ");
    _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_2__["guildCollection"].fetch().then(function (res) {
      _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_2__["guildCollection"].each(function (guild) {
        $("#guildList").append("\n                    <div class=\"guildBox\" data-guild=".concat(guild.attributes["id"], ">\n                        <p> ").concat(guild.attributes["name"], " </p>\n                        <p> ").concat(guild.attributes["anagram"], " </p>\n                        <p> ").concat(guild.attributes["points"], " </p>\n                    </div>\n                    "));
      });
    });
  },
  joinGuild: function joinGuild(e) {
    var guildId = e.currentTarget.getAttribute("data-guild");
    var guild = new _BackboneModel_guild_model__WEBPACK_IMPORTED_MODULE_2__["Guild"]({
      id: guildId
    });
    guild.fetch().then(function (res) {
      guild.set({
        "user": Cookies.get("id")
      });
      guild.save().then(function (res) {
        Cookies.set("guildId", res["id"]);
        _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/guild", {
          trigger: true
        });
      });
    });
  },
  updateList: function updateList(e) {
    axios.get("/api/guilds.json?name=".concat($("#guildSearch").val())).then(function (res) {
      var object = JSON.parse(res["request"].response);
      $("#guildList").empty();
      $.each(object, function (i) {
        $("#guildList").append("\n                    <div class=\"guildBox\" data-guild=".concat(object[i]["id"], ">\n                    <p> ").concat(object[i]["name"], " </p>\n                    <p> ").concat(object[i]["anagram"], " </p>\n                    <p> ").concat(object[i]["points"], " </p>\n                    </div>\n                "));
      });
    });
  }
});
var guildJoinContent = new GuildJoinContent({
  el: ".Center"
});
var GuildManageContent = Backbone.View.extend({
  events: {
    "keyup #guildManageSearch": "updateList",
    "change #selectVal": "updateList",
    "click .manageBox": "handleClick",
    "change #guildManageSearch": "updateList",
    "click #sendDeclaration": "sendDeclaration",
    "click #exitDeclare": "exitDeclare",
    "click #exitNotif": "exitNotif",
    "click #notifWarDeclaration": "confirmDeclaration",
    "click #declineWar": "declineWar",
    "click #acceptWar": "acceptWar",
    "change #dateRange": "updateDateWar",
    "click #addWarTime": "addWarTime",
    "click .WarTimeBox": "removeWarTime"
  },
  render: function render() {
    this.warTimes = [];
    this.$el.html("\n        <div id=\"select\">\n        <select id=\"selectVal\">\n            <option value=\"0\">ban members</option>\n        </select>\n        </div>\n        <div id=\"guildManagment\">\n            <input id=\"guildManageSearch\"/>\n            <div id=\"list\"> </div>\n        </div>\n        ");
    this.updateList();
    return this;
  },
  updateList: function updateList() {
    $("#errorCreate").remove();
    axios.get("/api/guilds/".concat(Cookies.get("guildId"))).then(function (res) {
      axios.get("/api/wars/".concat(res.data["name"])).then(function (res) {
        if (!res.data && $("#warManage").length == 0) {
          $("#selectVal").append("<option value=\"1\" id=\"warManage\">accept war declaration</option>\n                    <option value=\"2\">declare war</option>");
        }
      });
    });

    if ($("#selectVal option:selected").text() == "declare war") {
      axios.get("/api/guilds?name=".concat($("#guildManageSearch").val(), "&war=true")).then(function (res) {
        var object = JSON.parse(res["request"].response);
        $("#list").empty();
        $.each(object, function (i) {
          $("#list").append("\n                    <div class=\"manageBox\">\n                        <p id=\"name\">".concat(object[i]["name"], "</p>\n                        <p id=\"anagram\">").concat(object[i]["anagram"], "</p>\n                        <p id=\"startWar\"> \u2694 </p>\n                    </div>\n                    "));
        });
      });
    } else if ($("#selectVal option:selected").text() == "ban members") {
      axios.get("/api/guilds/".concat(Cookies.get("guildId"), "?pseudo=").concat($("#guildManageSearch").val())).then(function (res) {
        var object = JSON.parse(res["request"].response);
        $("#list").empty();
        $.each(object, function (i) {
          $("#list").append("\n                        <div class=\"manageBox\">\n                            <p id=\"name\">".concat(object[i]["pseudo"], "</p>\n                            <p id=\"ban\">Ban</p>\n                        </div>\n                    "));
        });
      });
    } else {
      $("#list").empty();
      axios.get("/api/guilds/".concat(Cookies.get("guildId"))).then(function (res) {
        var guild_name = res.data["name"];
        axios.get("/api/declarations?receiver=".concat(guild_name)).then(function (res) {
          var object = JSON.parse(res["request"].response);
          $.each(object, function (i) {
            $("#list").append("\n                        <div class=\"manageBox\" id=\"notifWarDeclaration\" sender=\"".concat(object[i]["sender"], "\" start-date=").concat(object[i]["start_at"], " end-date=").concat(object[i]["end_at"], ">\n                            <p id=\"sender\">").concat(object[i]["sender"], "</p>\n                            <p id=\"points\">").concat(object[i]["points"], " points</p>\n                        </div>\n                        "));
          });
        });
      });
    }
  },
  handleClick: function handleClick(e) {
    var _this6 = this;

    if ($("#selectVal option:selected").text() == "ban members" && $(e.target).html() == "Ban") {
      var user = e.currentTarget.querySelector("#name").innerHTML;
      axios.patch("/api/guilds/".concat(Cookies.get("guildId"), "?ban=").concat(user)).then(function (res) {
        _this6.updateList();
      });
    } else if ($("#selectVal option:selected").text() == "declare war" && $("#declareDiv").length == 0) {
      $(".Center").append("<div id=\"declareDiv\" data-guild=\"".concat(e.currentTarget.querySelector("#name").innerHTML, "\">\n                    <p> How many points do you want to bet ? </p>\n                    <input id=\"pointInput\" type=\"number\" min=\"0\" placeholder=\"points\"/>\n                    <p> Max unanswered match </p>\n                    <input id=\"unanswered\" type=\"number\" placeholder=\"max unanswered match\"/>\n                    <p> choose a range date </p>\n                    <input id=\"dateRange\"/>\n                    <p> Choose war times </p>\n                    <input id=\"timeTable\"/>\n                    <p id=\"addWarTime\">\u2795</p>\n                    <div id=\"warTimeList\">\n                    </div>\n                    <div id=\"yesno\">\n                        <button id=\"sendDeclaration\"> declare war </button>\n                        <button id=\"exitDeclare\"> exit </button>\n                    </div>\n                </div>\n                "));
      $('#dateRange').daterangepicker({
        autoApply: true,
        minDate: new Date()
      });
      $('#timeTable').daterangepicker({
        autoApply: true,
        timePicker: true,
        minDate: $("#dateRange").val().split(" - ")[0],
        maxDate: $("#dateRange").val().split(" - ")[1],
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
          format: 'M/DD hh:mm A'
        }
      });
    }
  },
  sendDeclaration: function sendDeclaration() {
    var _this7 = this;

    if ($("#pointInput").val() <= 0) {
      if ($("#errorCreate").length == 0) $("#declareDiv").append("<p id=\"errorCreate\"> Points must be superior than 0 </p>");
      return;
    } else $("#errorCreate").remove();

    if ($("#warTimeList > *").length == 0) {
      if ($("#errorCreate").length == 0) $("#declareDiv").append("<p id=\"errorCreate\"> You need at least one war time </p>");
      return;
    } else $("#errorCreate").remove();

    var date_range = $("#dateRange").val().split(" - ");

    if (date_range[0] == date_range[1]) {
      if ($("#errorCreate").length == 0) $("#declareDiv").append("<p id=\"errorCreate\"> Start date and End date cannot be the same </p>");
      return;
    } else $("#errorCreate").remove();

    axios.get("/api/guilds/".concat(Cookies.get("guildId"))).then(function (res) {
      var guild_name = res.data["name"];

      if (parseInt(res.data["points"]) < parseInt($("#pointInput").val())) {
        if ($("#errorCreate").length == 0) $("#declareDiv").append("<p id=\"errorCreate\"> You dont have enought points </p>");
        throw new Error('error');
      } else $("#errorCreate").remove();

      axios({
        method: 'post',
        url: '/api/declarations',
        data: {
          receiver: $("#declareDiv").attr("data-guild"),
          points: $("#pointInput").val(),
          start_at: new Date(date_range[0]),
          end_at: new Date(date_range[1]),
          sender: guild_name,
          timetable: _this7.warTimes,
          unanswered: $("#unanswered").val()
        }
      }).then(function (res) {
        $("#declareDiv").remove();
      })["catch"](function (err) {
        return;
      });
    });
  },
  exitDeclare: function exitDeclare() {
    $("#declareDiv").remove();
  },
  confirmDeclaration: function confirmDeclaration(e) {
    if ($("#notifWar").length == 0) {
      $(".Center").append("<div id=\"notifWar\">\n                    <h1> sender : ".concat(e.currentTarget.getAttribute("sender"), " </h1>\n                    <h1> start date : ").concat(new Date(e.currentTarget.getAttribute("start-date")).toDateString(), " </h1>\n                    <h1> end date : ").concat(new Date(e.currentTarget.getAttribute("end-date")).toDateString(), " </h1>\n                    <div id=\"warTimeList\">\n                    </div>\n                    <div id=\"yesno\">\n                        <button id=\"acceptWar\" declarationId=\"\"> ACCEPT </button>\n                        <button sender=\"").concat(e.currentTarget.getAttribute("sender"), "\" id=\"declineWar\"> DECLINE </button>\n                    </div>\n                </div>\n            "));
      axios.get("/api/guilds/".concat(Cookies.get("guildId"))).then(function (res) {
        var guild_name = res.data["name"];
        axios.get("/api/declarations?receiver=".concat(guild_name)).then(function (res) {
          $("#acceptWar").attr("declarationId", res.data[0]["id"]);
          var timeTable = JSON.parse(res["request"].response)[0]["timetable"];
          $.each(timeTable, function (i) {
            $("#warTimeList").append("\n                                <p>".concat(timeTable[i], "</p>\n                            "));
          });
        });
      });
    }
  },
  exitNotif: function exitNotif(e) {
    $("#notifWar").remove();
  },
  declineWar: function declineWar(e) {
    var _this8 = this;

    axios["delete"]("/api/declarations/".concat(e.currentTarget.getAttribute("sender"))).then(function (res) {
      $("#notifWar").remove();

      _this8.updateList();
    });
  },
  updateDateWar: function updateDateWar() {
    $('#timeTable').daterangepicker({
      autoApply: true,
      timePicker: true,
      minDate: $("#dateRange").val().split(" - ")[0],
      maxDate: $("#dateRange").val().split(" - ")[1],
      startDate: moment().startOf('hour'),
      endDate: moment().startOf('hour').add(32, 'hour'),
      locale: {
        format: 'M/DD hh:mm A'
      }
    });
    $("#warTimeList").empty();
    this.warTimes = [];
  },
  addWarTime: function addWarTime(e) {
    this.warTimes.push($("#timeTable").val());
    $("#warTimeList").append("\n        <div class=\"WarTimeBox\">\n        <p>".concat($("#timeTable").val(), "</p>\n            <span class=\"RedCross\"> \u274C </span>\n            </div>\n        "));
  },
  removeWarTime: function removeWarTime(e) {
    if ($(e.target).attr("class") == "RedCross") {
      for (var i = 0; i < this.warTimes.length; i++) {
        if (this.warTimes[i] == $(e.currentTarget).find("p")[0].innerText) {
          this.warTimes.splice(i, 1);
        }
      }

      $(e.currentTarget).remove();
    }
  },
  acceptWar: function acceptWar(e) {
    var _this9 = this;

    axios.post("/api/wars?id=".concat($(e.target).attr("declarationId"))).then(function (res) {
      $("#notifWar").remove();

      _this9.render();

      if (res.data["error"]) {
        if (!$("#errorCreate").length) $(".Center").append("<p id=\"errorCreate\">".concat(res.data["error"], "</p>"));
      } else $("#errorCreate").remove();
    });
  }
});
var guildManageContent = new GuildManageContent({
  el: ".Center"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/LoginView.js":
/*!***************************************************!*\
  !*** ./app/javascript/BackboneViews/LoginView.js ***!
  \***************************************************/
/*! exports provided: loginContent, loginMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginContent", function() { return loginContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginMenu", function() { return loginMenu; });
/* harmony import */ var _BackboneRouter_application_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneRouter/application_router.js */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _BackboneModel_user_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/user_model.js */ "./app/javascript/BackboneModel/user_model.js");


var LoginContent = Backbone.View.extend({
  render: function render() {
    this.$el.html("\n        <div id=\"flex_div\">\n            <h1> Welcome to pong tournament </h1>\n            <h1> You need to be a 42 student to play this game </h1>\n            <h1> Please log in to start playing </h1>\n        </div>\n        ");
    return this;
  }
});
var LoginMenu = Backbone.View.extend({
  events: {
    "click #loginButton": "logIn"
  },
  render: function render() {
    this.$el.html(" <div class=\"NavBar\">\n            <h1 id=\"title\"> Ultimate Pong Tournament </h1>\n            <div>\n                <h1 id=\"loginButton\"> login </h1>\n            </div>\n        </div>");
    return this;
  },
  logIn: function logIn(e) {
    $(location).attr('href', 'api/oauth');
  },
  home: function home() {
    _BackboneRouter_application_router_js__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("", {
      trigger: true
    });
  },
  guestLogin: function guestLogin() {
    $(location).attr('href', 'api/oauth?guest=true');
  }
});
var loginContent = new LoginContent({
  el: ".Center"
});
var loginMenu = new LoginMenu({
  el: ".Menu"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/MinimizeChatView.js":
/*!**********************************************************!*\
  !*** ./app/javascript/BackboneViews/MinimizeChatView.js ***!
  \**********************************************************/
/*! exports provided: MinimizeChatView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimizeChatView", function() { return MinimizeChatView; });
var MinimizeChatView = Backbone.View.extend({
  initialize: function initialize() {
    this.open = true;
  },
  render: function render() {
    var self = this;
    $('#left-button-minimize').remove();
    var my_sign;
    var my_class;

    if (self.open) {
      my_sign = '◄';
      my_class = 'open-lbm';
    } else {
      my_sign = '►';
      my_class = 'close-lbm';
    }

    $('.Content').prepend('<p id="left-button-minimize" class="' + my_class + '">' + my_sign + '</p>');
    $('#left-button-minimize').click(function () {
      if (self.open) {
        $('.social').css('display', 'none');
        self.open = false;
      } else {
        $('.social').css('display', 'block');
        self.open = true;
      }

      self.render();
    });
    return this;
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/ProfilGuildView.js":
/*!*********************************************************!*\
  !*** ./app/javascript/BackboneViews/ProfilGuildView.js ***!
  \*********************************************************/
/*! exports provided: ProfilGuildView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilGuildView", function() { return ProfilGuildView; });
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/users_chatroom_model */ "./app/javascript/BackboneModel/users_chatroom_model.js");
/* harmony import */ var _BackboneModel_matchs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/matchs_model */ "./app/javascript/BackboneModel/matchs_model.js");
/* harmony import */ var _BackboneModel_war_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneModel/war_model */ "./app/javascript/BackboneModel/war_model.js");
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");





/* win | guild adverse name | prix | */

var WarView = Backbone.View.extend({
  initialize: function initialize(options) {
    this.e = options.element;
  },
  render: function render() {
    var date;
    date = new Date(this.model.get("start_at"));
    var start_date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
    date = new Date(this.model.get("end_at"));
    var end_date_string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
    this.$el.html('<li class="war-li">\
        <p>' + this.model.get("im_winner") + '</p>\
        <p class="wlist-me">' + $(this.e.currentTarget).find(">:first-child").html() + ' (points: ' + this.model.get("my_point") + ')</p>\
        <p class="wlist-vs">🆚</p>\
        <p class="wlist-him">' + this.model.get("enemy") + ' (point: ' + this.model.get("his_point") + ')</p>\
        <p class="wlist-prize">prize: ' + this.model.get("prize") + ' 💰</p>\
        <div class="wlist-time">\
            <p class="wlist-start">start: ' + start_date_string + '</p>\
            <p class="wlist-end">end: ' + end_date_string + '</p>\
        </div>\
        </li>');
    return this;
  }
});
var ProfilGuildView = Backbone.View.extend({
  initialize: function initialize() {
    this.ProfilIsOpen = false;
  },
  render: function render(e) {
    var self = this;

    if (self.ProfilIsOpen == false) {
      var wars = new _BackboneModel_war_model__WEBPACK_IMPORTED_MODULE_3__["Wars"]();
      wars.fetch({
        data: {
          guild: $(e.currentTarget).find(">:first-child").html()
        }
      }).then(function () {
        self.ProfilIsOpen = true;
        $(".Center").append('<div class="PopUp" id="popup-profil">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' + '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
                <h2 id="title-popup-chatroom-pannel">' + $(e.currentTarget).find(">:first-child").html() + '</h2>\
            <img id="profil-image-user" src="https://images04.military.com/sites/default/files/styles/full/public/media/news/conflicts/2015/04/pro-russian-tank-600.jpg?itok=FPZYi7nD">\
            <h2>War Historic</h2>\
            <ul id="guild-war-historic"></lu>');
        wars.each(function (war) {
          var warView = new WarView({
            model: war,
            element: e
          });
          $("ul#guild-war-historic").append(warView.render().$el);
        });

        var removePopup = function removePopup() {
          self.ProfilIsOpen = false;
          $(".PopUp").remove();
        };

        self.mouseIn = false;
        $(".PopUp").hover(function () {
          self.mouseIn = true;
        }, function () {
          self.mouseIn = false;
        });
        $("body").mouseup(function () {
          if (self.mouseIn == false) removePopup();
        });
        $("#popup-chatroom-administration-refresh").click(function () {
          this.render();
        });
        $("#popup-chatroom-administration-quit").click(function () {
          removePopup();
        });
      });
    }
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/ProfilView.js":
/*!****************************************************!*\
  !*** ./app/javascript/BackboneViews/ProfilView.js ***!
  \****************************************************/
/*! exports provided: ProfilView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilView", function() { return ProfilView; });
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _BackboneModel_users_chatroom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/users_chatroom_model */ "./app/javascript/BackboneModel/users_chatroom_model.js");
/* harmony import */ var _BackboneModel_matchs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/matchs_model */ "./app/javascript/BackboneModel/matchs_model.js");
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");





var MatchView = Backbone.View.extend({
  render: function render() {
    var guilds_or_tournament;

    if (this.model.get("my_guild") != undefined) {
      guilds_or_tournament = '<p class="pstat-guilds">(' + this.model.get("my_guild") + ' 🆚 ' + this.model.get("enemy_guild") + ')</p>';
    } else if (this.model.get("tournament_name") != undefined) {
      guilds_or_tournament = '<p class="pstat-tournament">(tournament:' + this.model.get("tournament_name") + ')</p>';
    } else {
      guilds_or_tournament = '';
    }

    this.$el.html('<li class="match-li">\
        <p class="pstat-win-or-lose">' + (this.model.get("i_win") == true ? '👍' : '👎') + '</p>\
        <p class="pstat-score">' + this.model.get("my_score") + '/' + this.model.get("enemy_score") + '</p>\
        <p class="pstat-opponent">adversaire: ' + this.model.get("enemy_pseudo") + '</p>' + guilds_or_tournament + '</li>');
    return this;
  }
});
var ProfilView = Backbone.View.extend({
  events: {
    "click #streamin": "streamParty"
  },
  render: function render(self, e) {
    if (self.ProfilIsOpen == false) {
      var matchs = new _BackboneModel_matchs_model__WEBPACK_IMPORTED_MODULE_2__["Matchs"]();
      matchs.fetch({
        data: {
          pseudo: $(e.currentTarget).html()
        }
      }).then(function () {
        var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]({
          id: $(e.currentTarget).html()
        });
        user.fetch({
          data: {
            pseudo: true
          }
        }).then(function () {
          self.ProfilIsOpen = true;
          var img_url = user.get("url");

          if (img_url == "") {
            img_url = 'https://images04.military.com/sites/default/files/styles/full/public/media/news/conflicts/2015/04/pro-russian-tank-600.jpg?itok=FPZYi7nD';
          }

          $(".Center").append('<div class="PopUp" id="popup-profil">\
                    <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>\
                    <h2 id="title-popup-chatroom-pannel">' + $(e.currentTarget).html() + '</h2>\
                    <img id="profil-image-user" src="' + img_url + '">\
                    <div id="player-stat">\
                    <p>guild: ' + user.get("guild_name") + '</p>\
                    <p>nombre de parties gagnées: ' + user.get("win") + '</p>\
                    <p>nombre de parties perdues: ' + user.get("loss") + '</p>\
                    <p>ladder level: ' + user.get("rank") + '</p>\
                    <p>nombre de tournois remportés: ' + user.get("tournaments_win") + '</p>\
                    </div>\
                    <h2>historique des parties</h2>\
                    <ul id="player-dual-historic">\
                    </ul>\
                    <input id="streamin" type="button" value="stream game"></input>\
                    </div>');
          $("#streamin").hide();
          axios.get("/api/games/id=True?user_pseudo=".concat($(e.currentTarget).html())).then(function (res) {
            if (res.data["game"] == true) {
              $("#streamin").show();
            }

            $("#streamin").click(function () {
              _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_4__["router"].navigate("connected/game?game_id=".concat(res.data["id"]), {
                trigger: true
              });
            });
          });
          matchs.each(function (match) {
            var matchView = new MatchView({
              model: match
            });
            $("ul#player-dual-historic").append(matchView.render().$el);
          });

          var removePopup = function removePopup() {
            self.ProfilIsOpen = false;
            $(".PopUp").remove();
          };

          self.mouseIn = false;
          $(".PopUp").hover(function () {
            self.mouseIn = true;
          }, function () {
            self.mouseIn = false;
          });
          $("body").mouseup(function () {
            if (self.mouseIn == false) removePopup();
          });
          $("#popup-chatroom-administration-refresh").click(function () {
            self.render();
          });
          $("#popup-chatroom-administration-quit").click(function () {
            removePopup();
          });
        });
      });
    }
  }
});


/***/ }),

/***/ "./app/javascript/BackboneViews/SettingsView.js":
/*!******************************************************!*\
  !*** ./app/javascript/BackboneViews/SettingsView.js ***!
  \******************************************************/
/*! exports provided: settingsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsContent", function() { return settingsContent; });
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _utils_utils_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils_1 */ "./app/javascript/utils/utils_1.js");
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");



var SettingsContent = Backbone.View.extend({
  events: {
    "click #saveImageButton": "updateUser",
    "change #fileUpload": "confirmUpload",
    "click #disable2FA": "disable2FA"
  },
  render: function render() {
    this.$el.html("\n        <div id=\"flex_div\">\n            <h2 id=\"settingsTitle\"> Settings </h2>\n            <div class=\"CheckBox\">\n                <p> enable two factor auth </p>\n                <input id=\"TwoFactor\" type=\"checkbox\"/>\n            </div>\n            <div class=\"CheckBox\">\n                <p> select an avatar image </p>\n                <label id=\"fileLabel\" for=\"fileUpload\"> Select a file </label>\n                <input id=\"fileUpload\" type=\"file\" accept=\"image/*\"/>\n            </div>\n            <button id=\"saveImageButton\"> save </button>\n        </div>\n        ");
    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]({
      id: Cookies.get("login")
    });
    user.fetch().then(function (res) {
      if (res["two_factor"] == true) $('#TwoFactor').prop('checked', true);
    });
    return this;
  },
  confirmUpload: function confirmUpload() {
    $("#fileLabel").css("background-color", "#93E493");
    $("#fileLabel").html("file selected");
  },
  updateUser: function updateUser(e) {
    var _this = this;

    var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]({
      id: Cookies.get("login")
    });
    user.fetch();
    var formData = new FormData();
    var i = 0;

    if (document.getElementById("fileUpload").files.length > 0) {
      i = 1;
      var file = document.getElementById("fileUpload").files[0];
      var blob = new Blob([file]);
      formData.append("avatar_pers", blob);
    }

    if (!$("#TwoFactor").is(":checked")) {
      formData.append("two_factor", $("#TwoFactor").is(":checked"));
      axios({
        url: "/api/users/".concat(user.attributes.id),
        method: "PATCH",
        data: formData
      }).then(function (res) {
        if (i == 1) Cookies.set("url", res.data.url);

        _this.removeQRcode();
      });
    } else {
      axios({
        url: "/api/users/".concat(user.attributes.id),
        method: "PATCH",
        data: formData
      }).then(function (res) {
        if (i == 1) Cookies.set("url", res.data.url);
        if ($("#TwoFactor").is(":checked")) _this.displayQRCode();
      });
    }
  },
  displayQRCode: function displayQRCode() {
    var _this2 = this;

    axios.post("/api/twofactor").then(function (res) {
      if (res.data["error"]) {
        _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/play", {
          trigger: true
        });
        return;
      }

      $("body").append("<div class=\"BackClick\"></div>");
      $(".BackClick").click(function () {
        _this2.removePopUp();
      });
      $(".Center").append("\n            <div class=\"PopUp\" id=\"qrCodePopUp\">\n                <img id=\"imageQRcode\" src=\"http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=".concat(res.data["uri"], "\"/>\n            </div>"));
    });
  },
  removePopUp: function removePopUp() {
    $("#qrCodePopUp").remove();
    $(".BackClick").remove();
    _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/play", {
      trigger: true
    });
  },
  removeQRcode: function removeQRcode() {
    var _this3 = this;

    axios.get("/api/users/".concat(Cookies.get("login"))).then(function (res) {
      if (res.data["two_factor"] == true) {
        $("body").append("<div class=\"BackClick\"></div>");
        $(".BackClick").click(function () {
          _this3.removePopUp();
        });
        $(".Center").append("\n                <div class=\"PopUp\" id=\"2faDisablePopUp\">\n                    <h1> Enter google authentification code to disable 2FA </h1>\n                    <input id=\"twoFactorCode\" placeholder=\"two factor code\"/>\n                    <button id=\"disable2FA\">Confirm</button>\n                </div>");
      } else _this3.removePopUp();
    });
  },
  disable2FA: function disable2FA() {
    var _this4 = this;

    var code = $("#twoFactorCode").val();
    axios["delete"]("/api/twofactor/".concat(Cookies.get("login"), "?code=").concat(code)).then(function (res) {
      if (res.data["success"]) _this4.removePopUp();else {
        if (!$("#errorCreate").length) $("#2faDisablePopUp").append("\n                        <p id=\"errorCreate\"> error: incorrect code </p>\n                    ");
      }
    });
  }
});
var settingsContent = new SettingsContent({
  el: ".Center"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/SocialView.js":
/*!****************************************************!*\
  !*** ./app/javascript/BackboneViews/SocialView.js ***!
  \****************************************************/
/*! exports provided: socialView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialView", function() { return socialView; });
/* harmony import */ var _channels_consumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../channels/consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var _ChatView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatView */ "./app/javascript/BackboneViews/ChatView.js");
/* harmony import */ var _MinimizeChatView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MinimizeChatView */ "./app/javascript/BackboneViews/MinimizeChatView.js");
/* harmony import */ var _ChatListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatListView */ "./app/javascript/BackboneViews/ChatListView.js");
/* harmony import */ var _FriendListView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FriendListView */ "./app/javascript/BackboneViews/FriendListView.js");
/* harmony import */ var _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BackboneModel/chat_list_model */ "./app/javascript/BackboneModel/chat_list_model.js");
/* harmony import */ var _BackboneModel_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BackboneModel/message_model */ "./app/javascript/BackboneModel/message_model.js");
/* harmony import */ var _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BackboneModel/friend_list_model */ "./app/javascript/BackboneModel/friend_list_model.js");
/* harmony import */ var _BackboneModel_notification_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BackboneModel/notification_model */ "./app/javascript/BackboneModel/notification_model.js");
/* harmony import */ var _BackboneViews_AdminChatroomPannelView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BackboneViews/AdminChatroomPannelView */ "./app/javascript/BackboneViews/AdminChatroomPannelView.js");
/* harmony import */ var _ProfilView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfilView */ "./app/javascript/BackboneViews/ProfilView.js");
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");
/* harmony import */ var _channels_chat_channel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../channels/chat_channel */ "./app/javascript/channels/chat_channel.js");
/* harmony import */ var _BackboneModel_friends_message_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../BackboneModel/friends_message_model */ "./app/javascript/BackboneModel/friends_message_model.js");














var chatrooms = new _BackboneModel_chat_list_model__WEBPACK_IMPORTED_MODULE_5__["Chatrooms"]();
var messages = new _BackboneModel_message_model__WEBPACK_IMPORTED_MODULE_6__["Messages"]();
var friends = new _BackboneModel_friend_list_model__WEBPACK_IMPORTED_MODULE_7__["Friends"]();
var adminChatroomPannelView = new _BackboneViews_AdminChatroomPannelView__WEBPACK_IMPORTED_MODULE_9__["AdminChatroomPannelView"]();
var profilView = new _ProfilView__WEBPACK_IMPORTED_MODULE_10__["ProfilView"]();
var notifications = new _BackboneModel_notification_model__WEBPACK_IMPORTED_MODULE_8__["Notifications"]();
var friendsMessages = new _BackboneModel_friends_message_model__WEBPACK_IMPORTED_MODULE_13__["FriendsMessages"]();

var bus = _.extend({}, Backbone.Events);

var chatViews = new _ChatView__WEBPACK_IMPORTED_MODULE_1__["ChatViews"]({
  message_model: messages,
  notifications: notifications,
  friendsMessages: friendsMessages,
  bus: bus
});
var chatListViews = new _ChatListView__WEBPACK_IMPORTED_MODULE_3__["ChatListViews"]({
  model: chatrooms,
  adminChatroomPannelView: adminChatroomPannelView,
  notifications: notifications,
  bus: bus
});
var friendListViews = new _FriendListView__WEBPACK_IMPORTED_MODULE_4__["FriendListViews"]({
  model: friends,
  profilView: profilView,
  users: _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_11__["usersCollection_2"],
  bus: bus
});
var minimizeChatView = new _MinimizeChatView__WEBPACK_IMPORTED_MODULE_2__["MinimizeChatView"]();
var SocialView = Backbone.View.extend({
  full_disconnect: function full_disconnect() {
    for (var i = 0; i < _channels_consumer__WEBPACK_IMPORTED_MODULE_0__["default"].subscriptions.subscriptions.length; i++) {
      _channels_consumer__WEBPACK_IMPORTED_MODULE_0__["default"].subscriptions.subscriptions[i].unsubscribe();
    }
  },
  render: function render() {
    this.full_disconnect();
    chatListViews.render();
    chatViews.render();
    friendListViews.render();
    minimizeChatView.render();
    Object(_channels_chat_channel__WEBPACK_IMPORTED_MODULE_12__["channel_gen"])("UserChannel", Cookies.get("pseudo"), "", bus);
    return this;
  }
});
var socialView = new SocialView({
  el: ".social"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/TournamentView.js":
/*!********************************************************!*\
  !*** ./app/javascript/BackboneViews/TournamentView.js ***!
  \********************************************************/
/*! exports provided: tournamentContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tournamentContent", function() { return tournamentContent; });
/* harmony import */ var _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneModel/tournament_model */ "./app/javascript/BackboneModel/tournament_model.js");
/* harmony import */ var _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneModel/battle_list_model */ "./app/javascript/BackboneModel/battle_list_model.js");
/* harmony import */ var _BackboneModel_users_tournament_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneModel/users_tournament_model */ "./app/javascript/BackboneModel/users_tournament_model.js");



var Tournament_matching_popup = Backbone.View.extend({
  render: function render(self) {
    if (self.matchingPopupIsOpen == false) {
      $(".Center").append('<div class="PopUp" id="popup-profil">\
                <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' + '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
                <h2 id="title-popup-chatroom-pannel">' + 'search match' + '</h2>\
                <img id="img-chargement-gif" src="https://thumbs.gfycat.com/KnobbyWeirdIlladopsis-size_restricted.gif"><image>\
                </div>');

      var removePopup = function removePopup() {
        self.ProfilIsOpen = false;
        var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_1__["Battle"]({
          id: 'tournament'
        });
        battle.destroy({
          data: {
            type_battle: 'tournament'
          },
          processData: true
        }).then(function () {
          $(".PopUp").remove();
        });
      };

      self.mouseIn = false;
      $(".PopUp").hover(function () {
        self.mouseIn = true;
      }, function () {
        self.mouseIn = false;
      });
      $("body").mouseup(function () {
        if (self.mouseIn == false) removePopup();
      });
      $("#popup-chatroom-administration-quit").click(function () {
        removePopup();
      });
    }

    ;
  }
});
var matching_popup = new Tournament_matching_popup();
var TournamentPersoView = Backbone.View.extend({
  render: function render() {
    var now = new Date();
    var start_at = new Date(this.model.get("start_at"));

    if (now > start_at) {
      var end_at = new Date(this.model.get("start_at"));
      var end_at_string = end_at.getDate() + '/' + end_at.getMonth() + '/' + end_at.getFullYear() + '  ' + end_at.getHours() + ':' + end_at.getMinutes();
      $("#tournament-perso-div").append('<div class="tournament-perso-list">\
                <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                <p class="tournament-perso-list-prize">prize: ' + this.model.get("prize") + '</p>\
                <p class="tournament-perso-list-prize">my points: ' + this.model.get("my_points") + '</p>\
                <p class="tournament-perso-list-rank">my rank: ' + this.model.get("my_rank") + '/' + this.model.get("participants_number") + '</p>\
                <p class="tournament-perso-list-end_at">tournament end : ' + end_at_string + '</p>\
                <div class="tournament-perso-list-button">\
                    <input class="tournament-perso-battle-button social-hover" type="button" value="⚔ battle ⚔"></input>\
                    <input class="tournament-perso-unsubscribe-button social-hover" type="button" value="unsubscribe"></input>\
                </div>\
            </div>');
    } else {
      var start_at = new Date(this.model.get("start_at"));
      var start_at_string = start_at.getDate() + '/' + start_at.getMonth() + '/' + start_at.getFullYear() + '  ' + start_at.getHours() + ':' + start_at.getMinutes();
      $("#tournament-perso-div").append('<div class="tournament-perso-list">\
                <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                <p class="tournament-perso-list-prize">' + this.model.get("prize") + '</p>\
                <p class="tournament-perso-list-end_at">tournament start : ' + start_at_string + '</p>\
                <div class="tournament-perso-list-button">\
                    <input class="tournament-perso-unsubscribe-button social-hover" type="button" value="unsubscribe"></input>\
                </div>\
            </div>');
    }
  }
});
var TournamentPersoJoinView = Backbone.View.extend({
  render: function render() {
    var now = new Date();
    var start_registration = new Date(this.model.get("start_registration"));
    var end_registration = new Date(this.model.get("end_registration"));
    var start_registration_string = start_registration.getDate() + '/' + start_registration.getMonth() + '/' + start_registration.getFullYear() + '  ' + start_registration.getHours() + ':' + start_registration.getMinutes();
    var end_registration_string = end_registration.getDate() + '/' + end_registration.getMonth() + '/' + end_registration.getFullYear() + '  ' + end_registration.getHours() + ':' + end_registration.getMinutes();
    var start_at = new Date(this.model.get("start_at"));
    var start_at_string = start_at.getDate() + '/' + start_at.getMonth() + '/' + start_at.getFullYear() + '  ' + start_at.getHours() + ':' + start_at.getMinutes();
    var end_at = new Date(this.model.get("start_at"));
    var end_at_string = end_at.getDate() + '/' + end_at.getMonth() + '/' + end_at.getFullYear() + '  ' + end_at.getHours() + ':' + end_at.getMinutes();

    if (now < end_registration) {
      if (now > start_registration) {
        $("#tournament-join-div").append('<div class="tournament-perso-list">\
                    <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                    <p class="tournament-perso-list-prize">' + this.model.get("prize") + '</p>\
                    <div>\
                        <p class="tournament-perso-list-end_at">registration start : ' + start_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">registration end : ' + end_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament start : ' + start_at_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament end : ' + end_at_string + '</p>\
                    </div>\
                    <div class="tournament-perso-list-button">\
                        <input class="tournament-perso-register-button social-hover" type="button" value="register"></input>\
                    </div>\
                </div>');
      } else {
        $("#tournament-join-div").append('<div class="tournament-perso-list">\
                    <p class="tournament-perso-list-name">' + this.model.get("name") + '</p>\
                    <p class="tournament-perso-list-prize">' + this.model.get("prize") + '</p>\
                    <div>\
                        <p class="tournament-perso-list-end_at">registration start : ' + start_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">registration end : ' + end_registration_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament start : ' + start_at_string + '</p>\
                        <p class="tournament-perso-list-end_at">tournament end : ' + end_at_string + '</p>\
                    </div>\
                    <div class="tournament-perso-list-button">\
                        <input class="tournament-perso-register-button social-hover" type="button" value="register"disabled></input>\
                    </div>\
                </div>');
      }
    }
  }
});
var TournamentContentView = Backbone.View.extend({
  render: function render() {
    var self = this;
    self.matchingPopupIsOpen = false;
    $(".Center").html('<div id="tournament-div">\
            <div id="tournament-main-div">\
                <h2>Main tournament</h2>\
                <input class="social-hover" id="start-main-tournament-classed-battle" type="button" value="⚔ classed ⚔"></input>\
                <input class="social-hover" id="start-main-tournament-unclassed-battle" type="button" value="⚔ unclassed ⚔"></input>\
            </div>\
            <div id="tournament-perso-div">\
            </div>\
            <div id="tournament-join-div">\
            </div>\
        </div>');
    $("#start-main-tournament-classed-battle").click(function () {
      var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_1__["Battle"]({
        type_battle: 'main-classed'
      });
      battle.save().then(function () {
        matching_popup.render(self);
      });
    });
    $("#start-main-tournament-unclassed-battle").click(function () {
      var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_1__["Battle"]({
        type_battle: 'main-unclassed'
      });
      battle.save().then(function () {
        matching_popup.render(self);
      });
    });
    $("#start-main-tournament-unclassed-battle").click(function () {});

    var refresh_tournament_perso = function refresh_tournament_perso() {
      var tournaments = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_0__["Tournaments"]();
      tournaments.fetch({
        data: {
          perso: "true"
        }
      }).then(function () {
        $("#tournament-perso-div").html("<h2>My tournaments</h2>");
        tournaments.each(function (tournament) {
          if (tournament.get("main_tournament") == undefined || tournament.get("main_tournament") == false) {
            var tournamentPersoView = new TournamentPersoView({
              model: tournament
            });
            tournamentPersoView.render();
          }
        });
        $(".tournament-perso-unsubscribe-button").click(function (e) {
          var tournament_name;

          if ($(e.currentTarget).prev().val() == "⚔ battle ⚔") {
            tournament_name = $(e.currentTarget).parent().prev().prev().prev().prev().prev().html();
          } else {
            tournament_name = $(e.currentTarget).parent().prev().prev().prev().prev().html();
          }

          var userTourament = new _BackboneModel_users_tournament_model__WEBPACK_IMPORTED_MODULE_2__["UserTourament"]({
            id: tournament_name
          });
          userTourament.destroy().then(function () {
            refresh_tournament_perso();
            refresh_tournament_perso_join();
          });
        });
        $(".tournament-perso-battle-button").click(function (e) {
          var battle = new _BackboneModel_battle_list_model__WEBPACK_IMPORTED_MODULE_1__["Battle"]({
            type_battle: 'perso-classed',
            tournament_name: $(e.currentTarget).parent().prev().prev().prev().prev().prev().html()
          });
          battle.save().then(function () {
            matching_popup.render(self);
          });
        });
      });
    };

    var refresh_tournament_perso_join = function refresh_tournament_perso_join() {
      var tournaments = new _BackboneModel_tournament_model__WEBPACK_IMPORTED_MODULE_0__["Tournaments"]();
      tournaments.fetch({
        data: {
          join: "true"
        }
      }).then(function () {
        $("#tournament-join-div").html("<h2>Join tournament</h2>");
        tournaments.each(function (tournament) {
          if (tournament.get("main_tournament") == undefined || tournament.get("main_tournament") == false) {
            var tournamentPersoJoinView = new TournamentPersoJoinView({
              model: tournament
            });
            tournamentPersoJoinView.render();
          }
        });
        $(".tournament-perso-register-button").click(function (e) {
          var userTourament = new _BackboneModel_users_tournament_model__WEBPACK_IMPORTED_MODULE_2__["UserTourament"]({
            tournament_name: $(e.currentTarget).parent().prev().prev().prev().html()
          });
          userTourament.save().then(function () {
            refresh_tournament_perso();
            refresh_tournament_perso_join();
          });
        });
      });
    };

    refresh_tournament_perso();
    refresh_tournament_perso_join();
    return this;
  }
});
var tournamentContent = new TournamentContentView({
  el: ".Menu"
});


/***/ }),

/***/ "./app/javascript/BackboneViews/TwoFactorView.js":
/*!*******************************************************!*\
  !*** ./app/javascript/BackboneViews/TwoFactorView.js ***!
  \*******************************************************/
/*! exports provided: twoFactorContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoFactorContent", function() { return twoFactorContent; });
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");

var TwoFactorContent = Backbone.View.extend({
  events: {
    "click #authenticate": "verifyCode"
  },
  render: function render() {
    $(".Menu").html("\n        <div class=\"NavBar\">\n            <h1 id=\"title\"> Ultimate Pong Tournament </h1>\n        </div>\n        ");
    this.$el.html("\n        <div class=\"AuthBox\">\n            <h1> Enter google authentification code to authenticate </h1>\n            <input id=\"authInput\" placeholder=\"two factor code\"/>\n            <button id=\"authenticate\">Confirm</button>\n        </div>\n        ");
  },
  verifyCode: function verifyCode() {
    axios.get("/api/twofactor/".concat(Cookies.get("login"), "?code=").concat($("#authInput").val())).then(function (res) {
      if (res.data["error"]) {
        if (!$("#errorCreate").length) $(".Center").append("\n                        <p id=\"errorCreate\"> error: incorrect code </p>\n                    ");
      } else _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("connected/play", {
        trigger: true
      });
    });
  }
});
var twoFactorContent = new TwoFactorContent({
  el: ".Center"
});


/***/ }),

/***/ "./app/javascript/channel_handler/script_1.js":
/*!****************************************************!*\
  !*** ./app/javascript/channel_handler/script_1.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channels_consumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../channels/consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var _channels_chat_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channels/chat_channel */ "./app/javascript/channels/chat_channel.js");


/* ============================== SPACE */
// document.body.onkeyup = function(e){
//     if(e.keyCode == 32){
//         console.log("space =========== start")
//         console.log(consumer.subscriptions.subscriptions)
//         console.log("space =========== end")
//         for (var i = 0; i < consumer.subscriptions.subscriptions.length; i++) {
//             console.log("on PPPPaaarcours --- start");
//             console.log(consumer.subscriptions.subscriptions[i])
//             console.log(consumer.subscriptions.subscriptions[i].identifier)
//             console.log(JSON.parse(consumer.subscriptions.subscriptions[i].identifier).room)
//             console.log("on PPPPaaarcours --- end");
//         }
//     }
// }

/***/ }),

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chat_channel.js": "./app/javascript/channels/chat_channel.js",
	"./game_channel.js": "./app/javascript/channels/game_channel.js",
	"./notification_channel.js": "./app/javascript/channels/notification_channel.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/chat_channel.js":
/*!*************************************************!*\
  !*** ./app/javascript/channels/chat_channel.js ***!
  \*************************************************/
/*! exports provided: channel_gen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel_gen", function() { return channel_gen; });
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _utils_utils_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils_1 */ "./app/javascript/utils/utils_1.js");




var channel_gen = function channel_gen(channel_type, channel_name, channel_password, bus) {
  var new_channel = _consumer__WEBPACK_IMPORTED_MODULE_0__["default"].subscriptions.create({
    channel: channel_type,
    room: channel_name,
    password: channel_password
  }, {
    connected: function connected() {
      $("#subscriber_count").html(this.count); // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> connection etablie")

      new_channel.send({
        start: true
      });
      this.connected = true;
    },
    disconnected: function disconnected() {
      // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> deconnection")
      $("#message-container").html("vous avez été deconnecter du serveur pour une raison inconnu ...");
    },
    rejected: function rejected() {
      // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> rejected")
      $("#message-container").html("vous avez été banni du chat room");
    },
    received: function received(data) {
      // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> received data")
      if (data["username"] == "server") {
        this.count = data["messageContent"];
        if (this.connected == true) $("#subscriber_count").html(this.count);else $("#subscriber_count").html("ban/error");
      } else if (data["username"] == "notification") {
        if (data["messageContent"] == "refresh") {
          if ($("#chat-top-bar > p#center").html() != 'notification') {
            bus.trigger("notificationReceived", this);
          } else {
            bus.trigger("notificationSelected", this);
          }
        } else if (data["messageContent"] == "battle-start") {
          _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__["router"].navigate("connected/game?game_id=".concat(data["battle_id"]), {
            trigger: true
          });
        } else if (data["messageContent"] == "guild-battle") {
          alert("la guild adverse vous a defier!\nempresse toi d'accepter le defi dans la section Guild!");
        }
      } else if (data["username"] == "personnal-chat") {
        if ($("#chat-top-bar > p#center").attr("friend-chat-open") != undefined) {
          if (data["forwarder"] == $("#chat-top-bar > p#center").html() || data["forwarder"] == Cookies.get("pseudo")) {
            var down = false;

            if ($('#message-container').scrollTop() + $('#message-container').innerHeight() >= $('#message-container')[0].scrollHeight) {
              down = true;
            }

            var date = new Date(data["date"]);
            var date_string = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
            $("#message-container").append('<li class="message"><p class="user-message">' + data["forwarder"] + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + data["messageContent"] + '</p></li>');
            if (down == true) $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
          }
        }
      } else if (data["username"] == "friend-status") {
        bus.trigger("refreshFriendsList", data);
      } else if (data["username"] == "channel-ban") {
        bus.trigger("chatroomRefresh", data);
        alert('vous avez etait banni du chatroom [' + data["messageContent"] + ']');
      } else if (data["username"] == "channel-unban") {
        bus.trigger("chatroomRefresh", data);
        alert('vous avez etait debanni du chatroom [' + data["messageContent"] + ']');
      } else {
        var date = new Date(data["date"]);
        var date_string = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
        var down = false;

        if ($('#message-container').scrollTop() + $('#message-container').innerHeight() >= $('#message-container')[0].scrollHeight) {
          down = true;
        }

        $("#message-container").append('<li class="message"><p class="user-message">' + data["username"] + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + data["messageContent"] + '</p></li>');
        if (down == true) $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
      }
    }
  });
  return new_channel;
};



/***/ }),

/***/ "./app/javascript/channels/consumer.js":
/*!*********************************************!*\
  !*** ./app/javascript/channels/consumer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/actioncable */ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js");
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

/* harmony default export */ __webpack_exports__["default"] = (Object(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__["createConsumer"])());

/***/ }),

/***/ "./app/javascript/channels/game_channel.js":
/*!*************************************************!*\
  !*** ./app/javascript/channels/game_channel.js ***!
  \*************************************************/
/*! exports provided: game_channel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game_channel", function() { return game_channel; });
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _utils_game_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/game_class */ "./app/javascript/utils/game_class.js");




var game_channel = function game_channel(guest, channel_name, game) {
  var new_channel = _consumer__WEBPACK_IMPORTED_MODULE_0__["default"].subscriptions.create({
    channel: "GameChannel",
    room: channel_name
  }, {
    connected: function connected() {
      var _this = this;

      this.data = game;
      this.guest = guest;
      _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__["router"].on("route", function () {
        if (_this.intervalSet == true) {
          clearInterval(_this.interval);
          _this.intervalSet = false;
        }

        if (_this.started == true) _this.unsubscribe();
      });
    },
    disconnected: function disconnected() {
      clearInterval(this.interval);
      this.interval = false;
    },
    rejected: function rejected() {
      $(".Center").html("\n            <div class=\"PopUp\">\n                <h1> ERROR: YOU ARE ALREADY PLAYING </h1>\n            </div>\n          ");
    },
    received: function received(data) {
      var _this2 = this;

      if (data["ended"]) {
        this.ended_game_error();
      }

      if (data["end_game"]) this.end_game();

      if (data["rebound"] && data["pseudo"] != Cookies.get("pseudo")) {
        this.ball.object.x = data["x"];
        this.ball.object.y = data["y"];
        this.ball.x_dir = data['x_dir'];
        this.ball.y_dir = data['y_dir'];
      } else if (data["start"] && this.started != true) {
        if (this.stageInit != true) {
          this.stageInit = true;
          this.started = true;
          this.player_1 = $("#player1").text();
          this.player_2 = $("#player2").text();
          this.host_name = data["host"];
          if (data["host"] == Cookies.get("pseudo")) this.host = true;else this.host = false;
          this.game = new _utils_game_class__WEBPACK_IMPORTED_MODULE_2__["Game"](data["width"], data["height"], data["max_score"], "pongBoard");
          this.p1 = new _utils_game_class__WEBPACK_IMPORTED_MODULE_2__["Player"]();
          this.p2 = new _utils_game_class__WEBPACK_IMPORTED_MODULE_2__["Player"]();
          this.ball = new _utils_game_class__WEBPACK_IMPORTED_MODULE_2__["Ball"](data["speed"], data["x_dir"], data["y_dir"]);
          this.init_stage(data);
          if (this.guest == false) this.initListenner();
        }
      } else if (data["break"]) {
        this.interval = false;
        clearInterval(this.interval);
      } else if (data["move_up"] && data["move_up"] != Cookies.get("pseudo")) {
        if (this.guest) {
          if (this.host_name != data["move_up"]) this.p2.up = data["up"];else this.p1.up = data["up"];
        } else {
          if (this.host) this.p2.up = data["up"];else this.p1.up = data["up"];
        }
      } else if (data["move_down"] && data["move_down"] != Cookies.get("pseudo")) {
        if (this.guest) {
          if (this.host_name != data["move_down"]) this.p2.down = data["down"];else this.p1.down = data["down"];
        } else {
          if (this.host) this.p2.down = data["down"];else this.p1.down = data["down"];
        }
      }

      if (data["go"] || data["catch"]) {
        this.score_p1 = data["score_p1"];
        this.score_p2 = data["score_p2"];
        this.player_1 = data["player_1"];
        this.player_2 = data["player_2"];
        $("#score").html("<span id=\"player1\">".concat(this.player_1, "</span>: <span id=\"scoreP1\">").concat(this.score_p1, "</span> <span class=\"VS\">VS</span> <span id=\"player2\">").concat(this.player_2, "</span>: <span id=\"scoreP2\">").concat(this.score_p2, "</span>"));
        this.intervalSet = true;
        this.interval = setInterval(function () {
          _this2.move(_this2.game, _this2.p1, _this2.p2, _this2.ball, _this2.socket);
        }, 5);
      } else if (data["goal"]) {
        clearInterval(this.interval);
        this.intervalSet = false;

        if (data["goal"] == "p1") {
          this.p1.score += 1;
        } else if (data["goal"] == "p2") {
          this.p2.score += 1;
        }

        this.ball.x_dir = data["x_dir"];
        this.ball.y_dir = data["y_dir"];
        this.ball.object.x = data["x"];
        this.ball.object.y = data["y"];
        this.p1.object.x = data["p1_x"];
        this.p1.object.y = data["p1_y"];
        this.p2.object.x = data["p2_x"];
        this.p2.object.y = data["p2_y"];
        this.game.stage.update();
      } else if (data["3"]) $("#score").text("3");else if (data["2"]) $("#score").text("2");else if (data["1"]) $("#score").text("1");else if (data["forfait"]) {
        if (this.guest == false) this.forfait(data["forfait"]);else _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__["router"].navigate("connected/play", {
          trigger: true
        });
      }
    },
    move: function move(game, p1, p2, ball, socket) {
      var canvs = document.getElementById("pongBoard");
      var middle;
      if (p1.up == 1 && p1.object.y - this.hgt(1) >= -5) p1.object.y -= this.hgt(0.5);else if (p1.down == 1 && p1.object.y + this.hgt(17) <= canvs.height - 55) p1.object.y += this.hgt(0.5);
      if (p2.up == 1 && p2.object.y - this.hgt(1) >= -5) p2.object.y -= this.hgt(0.5);else if (p2.down == 1 && p2.object.y + this.hgt(17) <= canvs.height - 55) p2.object.y += this.hgt(0.5);

      if (ball.object.y > p1.object.y && ball.object.y < p1.object.y + game.height() && ball.object.x > p1.object.x + game.width() && ball.object.x + ball.x_dir < p1.object.x + game.width()) {
        middle = p1.object.y + game.height() / 2;
        ball.y_dir = (ball.object.y - middle) / (game.height() / 2) * (ball.max_speed * 0.75);
        ball.x_dir = Math.sqrt(Math.pow(ball.max_speed, 2) - Math.pow(ball.y_dir, 2));

        if (this.host && !this.guest) {
          this.send({
            rebound: true,
            x_dir: ball.x_dir,
            y_dir: ball.y_dir,
            x: ball.object.x,
            y: ball.object.y
          });
        }
      } else if (ball.object.y > p2.object.y && ball.object.y < p2.object.y + game.height() && ball.object.x < p2.object.x && ball.object.x + ball.x_dir > p2.object.x) {
        middle = p2.object.y + game.height() / 2;
        ball.y_dir = (ball.object.y - middle) / (game.height() / 2) * (ball.max_speed * 0.75);
        ball.x_dir = Math.sqrt(Math.pow(ball.max_speed, 2) - Math.pow(ball.y_dir, 2)) * -1;

        if (!this.host && !this.guest) {
          this.send({
            rebound: true,
            x_dir: ball.x_dir,
            y_dir: ball.y_dir,
            x: ball.object.x,
            y: ball.object.y
          });
        }
      } else if (ball.object.y > 0 && ball.object.y + ball.y_dir < 0) {
        ball.y_dir *= -1;
      } else if (ball.object.y < canvs.height && ball.object.y + ball.y_dir > canvs.height) {
        ball.y_dir *= -1;
      } else {
        ball.object.x += ball.x_dir;
        ball.object.y += ball.y_dir;
      }

      game.stage.update();
    },
    init_stage: function init_stage(data) {
      this.ball.object.graphics.beginFill("white").drawCircle(0, 0, data["ball_size"]);
      this.ball.object.x = data["x"];
      this.ball.object.y = data["y"];
      this.p1.object.graphics.beginFill("white").drawRoundRect(0, 0, this.game.width(), this.game.height(), 0);
      this.p1.object.x = data["p1_x"];
      this.p1.object.y = data["p1_y"];
      this.p2.object.graphics.beginFill("white").drawRoundRect(0, 0, this.game.width(), this.game.height(), 0);
      this.p2.object.x = data["p2_x"];
      this.p2.object.y = data["p2_y"];
      this.game.stage.addChild(this.p1.object);
      this.game.stage.addChild(this.p2.object);
      this.game.stage.addChild(this.ball.object);
      this.game.stage.update();
    },
    initListenner: function initListenner() {
      var self = this;
      $("body").keyup(function () {
        self.keyup_event();
      });
      $("body").keydown(function () {
        self.keydown_event();
      });
    },
    keyup_event: function keyup_event() {
      if ($("#pongBoard").length) {
        if (event.code == "ArrowDown") {
          if (this.host == false && this.p2.down != 0) this.p2.down = 0;else if (this.host && this.p1.down != 0) this.p1.down = 0;
          this.send({
            move_down: true,
            down: 0
          });
        } else if (event.code == "ArrowUp") {
          if (this.host == false && this.p2.up != 0) this.p2.up = 0;else if (this.host && this.p1.up != 0) this.p1.up = 0;
          this.send({
            move_up: true,
            up: 0
          });
        }
      }
    },
    keydown_event: function keydown_event() {
      if ($("#pongBoard").length) {
        if (event.code == "ArrowDown") {
          if (this.host == false && this.p2.down != 1) this.p2.down = 1;else if (this.host && this.p1.down != 1) this.p1.down = 1;
          this.send({
            move_down: true,
            down: 1
          });
        } else if (event.code == "ArrowUp") {
          if (this.host == false && this.p2.up != 1) this.p2.up = 1;else if (this.host && this.p1.up != 1) this.p1.up = 1;
          this.send({
            move_up: true,
            up: 1
          });
        }
      }
    },
    wdh: function wdh(number) {
      var canvs = document.getElementById("pongBoard");
      if (canvs) number = number / 100 * canvs.width;
      return number;
    },
    hgt: function hgt(number) {
      var canvs = document.getElementById("pongBoard");
      if (canvs) number = number / 100 * canvs.height;
      return number;
    },
    end_game: function end_game() {
      this.unsubscribe();
      clearInterval(this.interval);
      var winner;
      if (this.p1.score == 10) winner = this.player_1;else winner = this.player_2;
      $("#score").hide();
      if ($(".BackClick").length == 0) $("body").append("<div class=\"BackClick\"></div>");
      if ($("#partyEnding").length == 0) $(".Center").append("\n                <div class=\"PopUp\" id=\"partyEnding\">\n                    <h1> ".concat(winner, " <span style=\"color: green\">WIN</span> THE GAME </h1>\n                    <button id=\"endMatchButton\"> Go back to menu </button>\n                </div>\n            "));
      $(".BackClick").click(function () {
        _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__["router"].navigate("connected/play", {
          trigger: true
        });
        $(".BackClick").remove();
      });
      $("#endMatchButton").click(function () {
        _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__["router"].navigate("connected/play", {
          trigger: true
        });
        $(".BackClick").remove();
      });
    },
    ended_game_error: function ended_game_error() {
      this.unsubscribe();
      clearInterval(this.interval);
      this.interval = 0;
      _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__["router"].navigate("connected/play", {
        trigger: true
      });
    },
    forfait: function forfait(looser) {
      this.unsubscribe();
      clearInterval(this.interval);
      this.interval = 0;
      var sentence;
      if (looser == Cookies.get("pseudo")) sentence = "Game ended, you left the party";else sentence = "You win, ".concat(looser, " left the party");
      $("#score").hide();
      if ($(".BackClick").length == 0) $("body").append("<div class=\"BackClick\"></div>");
      if ($("#partyEnding").length == 0) $(".Center").append("\n                <div class=\"PopUp\" id=\"partyEnding\">\n                    <h1> ".concat(sentence, " </h1>\n                </div>\n            "));
      setTimeout(function () {
        _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_1__["router"].navigate("connected/play", {
          trigger: true
        });
        $(".BackClick").remove();
      }, 2000);
    }
  });
  return new_channel;
};



/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/channels/notification_channel.js":
/*!*********************************************************!*\
  !*** ./app/javascript/channels/notification_channel.js ***!
  \*********************************************************/
/*! exports provided: notification_gen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notification_gen", function() { return notification_gen; });
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumer */ "./app/javascript/channels/consumer.js");


var notification_gen = function notification_gen() {
  var new_notification = _consumer__WEBPACK_IMPORTED_MODULE_0__["default"].subscriptions.create({}, {
    connected: function connected() {
      // console.log("--- NOTIFICATION >>> connection etablie")
      this.connected = true;
    },
    disconnected: function disconnected() {// console.log("--- NOTIFICATION >>> deconnection")
    },
    rejected: function rejected() {// console.log("--- NOTIFICATION >>> rejected")
    },
    received: function received(data) {// console.log("--- NOTIFICATION >>> received data")
    }
  });
  return new_notification;
};



/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(/*! BackboneRouter/application_router.js */ "./app/javascript/BackboneRouter/application_router.js");

__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");

__webpack_require__(/*! channel_handler/script_1 */ "./app/javascript/channel_handler/script_1.js"); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/***/ }),

/***/ "./app/javascript/utils/game_class.js":
/*!********************************************!*\
  !*** ./app/javascript/utils/game_class.js ***!
  \********************************************/
/*! exports provided: Player, Game, Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function wdh(number) {
  var canvs = document.getElementById("pongBoard");
  number = number / 100 * canvs.width;
  return number;
}

function hgt(number) {
  var canvs = document.getElementById("pongBoard");
  number = number / 100 * canvs.height;
  return number;
}

var Player = function Player() {
  _classCallCheck(this, Player);

  this.object = new createjs.Shape();
  this.score = 0;
  this.up = 0;
  this.down = 0;
};

var Ball =
/*#__PURE__*/
function () {
  function Ball(max_speed, x_dir, y_dir) {
    _classCallCheck(this, Ball);

    this.object = new createjs.Shape();
    this.y_dir = y_dir;
    this.x_dir = x_dir;
    this.max_speed = max_speed;
  }

  _createClass(Ball, [{
    key: "reset",
    value: function reset(height, middle) {
      this.y_dir = (this.object.y - middle) / (height / 2) * (this.max_speed * 0.75);
      this.x_dir = Math.sqrt(Math.pow(this.max_speed, 2) - Math.pow(this.y_dir, 2));
    }
  }]);

  return Ball;
}();

var Game =
/*#__PURE__*/
function () {
  function Game(width, height, max_score, stage) {
    _classCallCheck(this, Game);

    this.player_width = width;
    this.player_height = height;
    this.max_score = max_score;
    this.wait = 0;
    this.stage = new createjs.Stage(stage);
  }

  _createClass(Game, [{
    key: "width",
    value: function width() {
      return this.player_width;
    }
  }, {
    key: "height",
    value: function height() {
      return this.player_height;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./app/javascript/utils/utils_1.js":
/*!*****************************************!*\
  !*** ./app/javascript/utils/utils_1.js ***!
  \*****************************************/
/*! exports provided: getUrlParam, getCookie, imageExists, tokenValidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageExists", function() { return imageExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenValidity", function() { return tokenValidity; });
/* harmony import */ var _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackboneRouter/application_router */ "./app/javascript/BackboneRouter/application_router.js");
/* harmony import */ var _BackboneViews_ConnectedView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackboneViews/ConnectedView */ "./app/javascript/BackboneViews/ConnectedView.js");
/* harmony import */ var _BackboneViews_SocialView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackboneViews/SocialView */ "./app/javascript/BackboneViews/SocialView.js");
/* harmony import */ var _BackboneViews_AdminView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackboneViews/AdminView */ "./app/javascript/BackboneViews/AdminView.js");
/* harmony import */ var _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackboneModel/user_model */ "./app/javascript/BackboneModel/user_model.js");






var getUrlParam = function getUrlParam(name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  return results[1] || 0;
};

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

function imageExists(image_url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  http.send();
  return http.status != 404;
}

function tokenValidity(view) {
  var user = new _BackboneModel_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]({
    id: Cookies.get("login")
  });
  user.fetch().then(function (res) {
    if (res["error"] == "banned") {
      _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("/banned", {
        trigger: true
      });
    } else if (res["error"] == "acces denied") {
      _BackboneRouter_application_router__WEBPACK_IMPORTED_MODULE_0__["router"].navigate("/acces_denied", {
        trigger: true
      });
    } else {
      if (view[0] != _BackboneViews_AdminView__WEBPACK_IMPORTED_MODULE_3__["adminContentView"]) {
        _BackboneViews_ConnectedView__WEBPACK_IMPORTED_MODULE_1__["connectedMenu"].render();
        if ($(".title-notification").length == 0) _BackboneViews_SocialView__WEBPACK_IMPORTED_MODULE_2__["socialView"].render();
      }

      view.forEach(function (e) {
        e.render();
      });
    }
  });
}



/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof2(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  var adapters = {
    logger: self.console,
    WebSocket: self.WebSocket
  };
  var logger = {
    log: function log() {
      if (this.enabled) {
        var _adapters$logger;

        for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }

        messages.push(Date.now());

        (_adapters$logger = adapters.logger).log.apply(_adapters$logger, ["[ActionCable]"].concat(messages));
      }
    }
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var now = function now() {
    return new Date().getTime();
  };

  var secondsSince = function secondsSince(time) {
    return (now() - time) / 1e3;
  };

  var clamp = function clamp(number, min, max) {
    return Math.max(min, Math.min(max, number));
  };

  var ConnectionMonitor = function () {
    function ConnectionMonitor(connection) {
      classCallCheck(this, ConnectionMonitor);
      this.visibilityDidChange = this.visibilityDidChange.bind(this);
      this.connection = connection;
      this.reconnectAttempts = 0;
    }

    ConnectionMonitor.prototype.start = function start() {
      if (!this.isRunning()) {
        this.startedAt = now();
        delete this.stoppedAt;
        this.startPolling();
        addEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms");
      }
    };

    ConnectionMonitor.prototype.stop = function stop() {
      if (this.isRunning()) {
        this.stoppedAt = now();
        this.stopPolling();
        removeEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor stopped");
      }
    };

    ConnectionMonitor.prototype.isRunning = function isRunning() {
      return this.startedAt && !this.stoppedAt;
    };

    ConnectionMonitor.prototype.recordPing = function recordPing() {
      this.pingedAt = now();
    };

    ConnectionMonitor.prototype.recordConnect = function recordConnect() {
      this.reconnectAttempts = 0;
      this.recordPing();
      delete this.disconnectedAt;
      logger.log("ConnectionMonitor recorded connect");
    };

    ConnectionMonitor.prototype.recordDisconnect = function recordDisconnect() {
      this.disconnectedAt = now();
      logger.log("ConnectionMonitor recorded disconnect");
    };

    ConnectionMonitor.prototype.startPolling = function startPolling() {
      this.stopPolling();
      this.poll();
    };

    ConnectionMonitor.prototype.stopPolling = function stopPolling() {
      clearTimeout(this.pollTimeout);
    };

    ConnectionMonitor.prototype.poll = function poll() {
      var _this = this;

      this.pollTimeout = setTimeout(function () {
        _this.reconnectIfStale();

        _this.poll();
      }, this.getPollInterval());
    };

    ConnectionMonitor.prototype.getPollInterval = function getPollInterval() {
      var _constructor$pollInte = this.constructor.pollInterval,
          min = _constructor$pollInte.min,
          max = _constructor$pollInte.max,
          multiplier = _constructor$pollInte.multiplier;
      var interval = multiplier * Math.log(this.reconnectAttempts + 1);
      return Math.round(clamp(interval, min, max) * 1e3);
    };

    ConnectionMonitor.prototype.reconnectIfStale = function reconnectIfStale() {
      if (this.connectionIsStale()) {
        logger.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + secondsSince(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
        this.reconnectAttempts++;

        if (this.disconnectedRecently()) {
          logger.log("ConnectionMonitor skipping reopening recent disconnect");
        } else {
          logger.log("ConnectionMonitor reopening");
          this.connection.reopen();
        }
      }
    };

    ConnectionMonitor.prototype.connectionIsStale = function connectionIsStale() {
      return secondsSince(this.pingedAt ? this.pingedAt : this.startedAt) > this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.disconnectedRecently = function disconnectedRecently() {
      return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.visibilityDidChange = function visibilityDidChange() {
      var _this2 = this;

      if (document.visibilityState === "visible") {
        setTimeout(function () {
          if (_this2.connectionIsStale() || !_this2.connection.isOpen()) {
            logger.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);

            _this2.connection.reopen();
          }
        }, 200);
      }
    };

    return ConnectionMonitor;
  }();

  ConnectionMonitor.pollInterval = {
    min: 3,
    max: 30,
    multiplier: 5
  };
  ConnectionMonitor.staleThreshold = 6;
  var INTERNAL = {
    message_types: {
      welcome: "welcome",
      disconnect: "disconnect",
      ping: "ping",
      confirmation: "confirm_subscription",
      rejection: "reject_subscription"
    },
    disconnect_reasons: {
      unauthorized: "unauthorized",
      invalid_request: "invalid_request",
      server_restart: "server_restart"
    },
    default_mount_path: "/cable",
    protocols: ["actioncable-v1-json", "actioncable-unsupported"]
  };
  var message_types = INTERNAL.message_types,
      protocols = INTERNAL.protocols;
  var supportedProtocols = protocols.slice(0, protocols.length - 1);
  var indexOf = [].indexOf;

  var Connection = function () {
    function Connection(consumer) {
      classCallCheck(this, Connection);
      this.open = this.open.bind(this);
      this.consumer = consumer;
      this.subscriptions = this.consumer.subscriptions;
      this.monitor = new ConnectionMonitor(this);
      this.disconnected = true;
    }

    Connection.prototype.send = function send(data) {
      if (this.isOpen()) {
        this.webSocket.send(JSON.stringify(data));
        return true;
      } else {
        return false;
      }
    };

    Connection.prototype.open = function open() {
      if (this.isActive()) {
        logger.log("Attempted to open WebSocket, but existing socket is " + this.getState());
        return false;
      } else {
        logger.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + protocols);

        if (this.webSocket) {
          this.uninstallEventHandlers();
        }

        this.webSocket = new adapters.WebSocket(this.consumer.url, protocols);
        this.installEventHandlers();
        this.monitor.start();
        return true;
      }
    };

    Connection.prototype.close = function close() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        allowReconnect: true
      },
          allowReconnect = _ref.allowReconnect;

      if (!allowReconnect) {
        this.monitor.stop();
      }

      if (this.isActive()) {
        return this.webSocket.close();
      }
    };

    Connection.prototype.reopen = function reopen() {
      logger.log("Reopening WebSocket, current state is " + this.getState());

      if (this.isActive()) {
        try {
          return this.close();
        } catch (error) {
          logger.log("Failed to reopen WebSocket", error);
        } finally {
          logger.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
          setTimeout(this.open, this.constructor.reopenDelay);
        }
      } else {
        return this.open();
      }
    };

    Connection.prototype.getProtocol = function getProtocol() {
      if (this.webSocket) {
        return this.webSocket.protocol;
      }
    };

    Connection.prototype.isOpen = function isOpen() {
      return this.isState("open");
    };

    Connection.prototype.isActive = function isActive() {
      return this.isState("open", "connecting");
    };

    Connection.prototype.isProtocolSupported = function isProtocolSupported() {
      return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
    };

    Connection.prototype.isState = function isState() {
      for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      return indexOf.call(states, this.getState()) >= 0;
    };

    Connection.prototype.getState = function getState() {
      if (this.webSocket) {
        for (var state in adapters.WebSocket) {
          if (adapters.WebSocket[state] === this.webSocket.readyState) {
            return state.toLowerCase();
          }
        }
      }

      return null;
    };

    Connection.prototype.installEventHandlers = function installEventHandlers() {
      for (var eventName in this.events) {
        var handler = this.events[eventName].bind(this);
        this.webSocket["on" + eventName] = handler;
      }
    };

    Connection.prototype.uninstallEventHandlers = function uninstallEventHandlers() {
      for (var eventName in this.events) {
        this.webSocket["on" + eventName] = function () {};
      }
    };

    return Connection;
  }();

  Connection.reopenDelay = 500;
  Connection.prototype.events = {
    message: function message(event) {
      if (!this.isProtocolSupported()) {
        return;
      }

      var _JSON$parse = JSON.parse(event.data),
          identifier = _JSON$parse.identifier,
          message = _JSON$parse.message,
          reason = _JSON$parse.reason,
          reconnect = _JSON$parse.reconnect,
          type = _JSON$parse.type;

      switch (type) {
        case message_types.welcome:
          this.monitor.recordConnect();
          return this.subscriptions.reload();

        case message_types.disconnect:
          logger.log("Disconnecting. Reason: " + reason);
          return this.close({
            allowReconnect: reconnect
          });

        case message_types.ping:
          return this.monitor.recordPing();

        case message_types.confirmation:
          return this.subscriptions.notify(identifier, "connected");

        case message_types.rejection:
          return this.subscriptions.reject(identifier);

        default:
          return this.subscriptions.notify(identifier, "received", message);
      }
    },
    open: function open() {
      logger.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol");
      this.disconnected = false;

      if (!this.isProtocolSupported()) {
        logger.log("Protocol is unsupported. Stopping monitor and disconnecting.");
        return this.close({
          allowReconnect: false
        });
      }
    },
    close: function close(event) {
      logger.log("WebSocket onclose event");

      if (this.disconnected) {
        return;
      }

      this.disconnected = true;
      this.monitor.recordDisconnect();
      return this.subscriptions.notifyAll("disconnected", {
        willAttemptReconnect: this.monitor.isRunning()
      });
    },
    error: function error() {
      logger.log("WebSocket onerror event");
    }
  };

  var extend = function extend(object, properties) {
    if (properties != null) {
      for (var key in properties) {
        var value = properties[key];
        object[key] = value;
      }
    }

    return object;
  };

  var Subscription = function () {
    function Subscription(consumer) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var mixin = arguments[2];
      classCallCheck(this, Subscription);
      this.consumer = consumer;
      this.identifier = JSON.stringify(params);
      extend(this, mixin);
    }

    Subscription.prototype.perform = function perform(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.action = action;
      return this.send(data);
    };

    Subscription.prototype.send = function send(data) {
      return this.consumer.send({
        command: "message",
        identifier: this.identifier,
        data: JSON.stringify(data)
      });
    };

    Subscription.prototype.unsubscribe = function unsubscribe() {
      return this.consumer.subscriptions.remove(this);
    };

    return Subscription;
  }();

  var Subscriptions = function () {
    function Subscriptions(consumer) {
      classCallCheck(this, Subscriptions);
      this.consumer = consumer;
      this.subscriptions = [];
    }

    Subscriptions.prototype.create = function create(channelName, mixin) {
      var channel = channelName;
      var params = (typeof channel === "undefined" ? "undefined" : _typeof(channel)) === "object" ? channel : {
        channel: channel
      };
      var subscription = new Subscription(this.consumer, params, mixin);
      return this.add(subscription);
    };

    Subscriptions.prototype.add = function add(subscription) {
      this.subscriptions.push(subscription);
      this.consumer.ensureActiveConnection();
      this.notify(subscription, "initialized");
      this.sendCommand(subscription, "subscribe");
      return subscription;
    };

    Subscriptions.prototype.remove = function remove(subscription) {
      this.forget(subscription);

      if (!this.findAll(subscription.identifier).length) {
        this.sendCommand(subscription, "unsubscribe");
      }

      return subscription;
    };

    Subscriptions.prototype.reject = function reject(identifier) {
      var _this = this;

      return this.findAll(identifier).map(function (subscription) {
        _this.forget(subscription);

        _this.notify(subscription, "rejected");

        return subscription;
      });
    };

    Subscriptions.prototype.forget = function forget(subscription) {
      this.subscriptions = this.subscriptions.filter(function (s) {
        return s !== subscription;
      });
      return subscription;
    };

    Subscriptions.prototype.findAll = function findAll(identifier) {
      return this.subscriptions.filter(function (s) {
        return s.identifier === identifier;
      });
    };

    Subscriptions.prototype.reload = function reload() {
      var _this2 = this;

      return this.subscriptions.map(function (subscription) {
        return _this2.sendCommand(subscription, "subscribe");
      });
    };

    Subscriptions.prototype.notifyAll = function notifyAll(callbackName) {
      var _this3 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.subscriptions.map(function (subscription) {
        return _this3.notify.apply(_this3, [subscription, callbackName].concat(args));
      });
    };

    Subscriptions.prototype.notify = function notify(subscription, callbackName) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var subscriptions = void 0;

      if (typeof subscription === "string") {
        subscriptions = this.findAll(subscription);
      } else {
        subscriptions = [subscription];
      }

      return subscriptions.map(function (subscription) {
        return typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : undefined;
      });
    };

    Subscriptions.prototype.sendCommand = function sendCommand(subscription, command) {
      var identifier = subscription.identifier;
      return this.consumer.send({
        command: command,
        identifier: identifier
      });
    };

    return Subscriptions;
  }();

  var Consumer = function () {
    function Consumer(url) {
      classCallCheck(this, Consumer);
      this._url = url;
      this.subscriptions = new Subscriptions(this);
      this.connection = new Connection(this);
    }

    Consumer.prototype.send = function send(data) {
      return this.connection.send(data);
    };

    Consumer.prototype.connect = function connect() {
      return this.connection.open();
    };

    Consumer.prototype.disconnect = function disconnect() {
      return this.connection.close({
        allowReconnect: false
      });
    };

    Consumer.prototype.ensureActiveConnection = function ensureActiveConnection() {
      if (!this.connection.isActive()) {
        return this.connection.open();
      }
    };

    createClass(Consumer, [{
      key: "url",
      get: function get$$1() {
        return createWebSocketURL(this._url);
      }
    }]);
    return Consumer;
  }();

  function createWebSocketURL(url) {
    if (typeof url === "function") {
      url = url();
    }

    if (url && !/^wss?:/i.test(url)) {
      var a = document.createElement("a");
      a.href = url;
      a.href = a.href;
      a.protocol = a.protocol.replace("http", "ws");
      return a.href;
    } else {
      return url;
    }
  }

  function createConsumer() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getConfig("url") || INTERNAL.default_mount_path;
    return new Consumer(url);
  }

  function getConfig(name) {
    var element = document.head.querySelector("meta[name='action-cable-" + name + "']");

    if (element) {
      return element.getAttribute("content");
    }
  }

  exports.Connection = Connection;
  exports.ConnectionMonitor = ConnectionMonitor;
  exports.Consumer = Consumer;
  exports.INTERNAL = INTERNAL;
  exports.Subscription = Subscription;
  exports.Subscriptions = Subscriptions;
  exports.adapters = adapters;
  exports.createWebSocketURL = createWebSocketURL;
  exports.logger = logger;
  exports.createConsumer = createConsumer;
  exports.getConfig = getConfig;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-1b0798530d32c1a55569.js.map