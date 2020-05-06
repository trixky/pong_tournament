import consumer from "../channels/consumer"
import {ChatViews} from "./ChatView"
import {MinimizeChatView} from "./MinimizeChatView"
import {ChatListViews} from "./ChatListView"
import {FriendListViews} from "./FriendListView"
import {Chatrooms, Chatroom} from "../BackboneModel/chat_list_model"
import {Messages, Message} from "../BackboneModel/message_model"
import {Friend, Friends} from "../BackboneModel/friend_list_model"
import {Notification, Notifications} from "../BackboneModel/notification_model"
import { AdminChatroomPannelView } from "../BackboneViews/AdminChatroomPannelView"
import { ProfilView } from "./ProfilView"
import {User, usersCollection, usersCollection_2, UsersCollection} from "../BackboneModel/user_model"
import { channel_gen } from "../channels/chat_channel"
import { FriendsMessage, FriendsMessages } from "../BackboneModel/friends_message_model"

var chatrooms = new Chatrooms();
var messages = new Messages();
var friends = new Friends();
var adminChatroomPannelView = new AdminChatroomPannelView();
var profilView = new ProfilView();
var notifications = new Notifications()
var friendsMessages = new FriendsMessages()

var bus = _.extend({}, Backbone.Events);
var chatViews = new ChatViews({message_model: messages, notifications: notifications, friendsMessages: friendsMessages, bus: bus});
var chatListViews = new ChatListViews({model: chatrooms, adminChatroomPannelView: adminChatroomPannelView, notifications: notifications, bus: bus});
var friendListViews = new FriendListViews({model: friends, profilView: profilView, users: usersCollection_2, bus: bus});
var minimizeChatView = new MinimizeChatView();

var SocialView = Backbone.View.extend({
    
    full_disconnect : function() {
        for (var i = 0; i < consumer.subscriptions.subscriptions.length; i++)
        consumer.subscriptions.subscriptions[i].unsubscribe();
    },
    
    render : function()
    {
        this.full_disconnect();
        chatListViews.render();
        chatViews.render();
        friendListViews.render();
        minimizeChatView.render();
        channel_gen("UserChannel", Cookies.get("pseudo"), "", bus);
        return this;
    }    
});

var socialView = new SocialView({el: ".social"});

export {socialView}