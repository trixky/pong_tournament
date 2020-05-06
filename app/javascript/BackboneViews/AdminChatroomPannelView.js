import { Users, User , UsersCollection} from "../BackboneModel/user_model"
import { UsersChatroom } from "../BackboneModel/users_chatroom_model"
import { Chatroom } from "../BackboneModel/chat_list_model"


var AdminChatroomPannelView = Backbone.View.extend({
    render: function (self, e) {
        if (self.panelChatroomAdminIsOpen == false) {
            self.panelChatroomAdminIsOpen = true;
            $(".Center").append('<div class="PopUp" id="popup-chatroom-administration">\
            <input type="button" class="popup-social-hover" id="popup-chatroom-administration-quit" value="✖"></input>' +
                ($(e.currentTarget).html() == '♔' ? '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-delete" value="🗑"></input>' : '') +
                '<input type="button" class="popup-social-hover" id="popup-chatroom-administration-refresh" value="⟳"></input>\
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
                $("#owner-input-chat-controller-pannel").remove()
            }

            var refreshList = function () {
                var users = new UsersCollection();
                users.fetch({ data: { findby: "chatroom", value: $(e.currentTarget).prev().html() } }).then(function () {
                    $("#pseudo-list-adminstation-list").html('')
                    users.each(function (user) {
                        var bandate = user.get("bandate");
                        if (bandate == null)
                            date_string = "--/--/---";
                        else {
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
                    })
                    $("#cap-input-1").click(function (ee) {
                        var chatroom = new Chatroom({ id: $("#title-popup-chatroom-pannel").html() });
                        chatroom.save({
                            change_add_password: true,
                            older: $("#picpc-1").val(),
                            new_1: $("#picpc-2").val(),
                            new_2: $("#picpc-3").val()
                        }).then(function () {
                            refreshList();
                            $("#picpc-1").val('')
                            $("#picpc-2").val('')
                            $("#picpc-3").val('')
                        })
                    })
                    $("#cap-input-2").click(function (ee) {
                        var chatroom = new Chatroom({ id: $("#title-popup-chatroom-pannel").html() });
                        chatroom.save({ remove_password: true }).then(function () {
                            refreshList();
                        })
                    })
                    $(".cap-input-3").click(function (ee) {
                        var usersChatroom = new UsersChatroom();
                        usersChatroom.save({ id: $(e.currentTarget).prev().html(), pseudo: $(ee.currentTarget).prev().html(), admin: false }).then(function () {
                            refreshList();
                        })
                    })
                    $(".cap-input-4").click(function (ee) {
                        var usersChatroom = new UsersChatroom();
                        usersChatroom.save({ id: $(e.currentTarget).prev().html(), pseudo: $(ee.currentTarget).prev().prev().html(), admin: true }).then(function () {
                            refreshList();
                        })
                    })
                    $(".cap-input-6").click(function (ee) {
                        var usersChatroom = new UsersChatroom();
                        usersChatroom.save({ id: $(e.currentTarget).prev().html(), pseudo: $(ee.currentTarget).prev().prev().prev().prev().prev().html(), bandate: $(ee.currentTarget).prev().val() }).then(function () {
                            refreshList();
                        })
                    })
                    $(".cap-input-7").click(function (ee) {
                        var usersChatroom = new UsersChatroom();
                        usersChatroom.save({ id: $(e.currentTarget).prev().html(), pseudo: $(ee.currentTarget).prev().prev().prev().prev().prev().prev().html(), annule_bandate: true }).then(function () {
                            refreshList();
                        })
                    })
                })
            };

            var removePopup = function () {
                self.panelChatroomAdminIsOpen = false;
                $(".PopUp").remove()
            }

            refreshList();

            self.mouseIn = false;

            $(".PopUp").hover(function () {
                self.mouseIn = true;
            }, function () {
                self.mouseIn = false;
            });

            $("body").mouseup(function () {
                if (self.mouseIn == false)
                    removePopup();
            });

            $("#popup-chatroom-administration-refresh").click(function () {
                refreshList();
            });

            $("#popup-chatroom-administration-quit").click(function () {
                removePopup();
            });

            $("#popup-chatroom-administration-delete").click(function () {
                var chatroom = new Chatroom();
                chatroom.set({ id: $("#title-popup-chatroom-pannel").html() })
                chatroom.fetch().then(function () {
                    chatroom.destroy().then(function () {


                        self.bus.trigger("leaveChatroom", $("#title-popup-chatroom-pannel").html())
                        self.render();
                        removePopup();
                    })
                })
            });
        }
    }
})

export { AdminChatroomPannelView }