import consumer from "./consumer"
import { router } from "../BackboneRouter/application_router"
import { getCookie } from "../utils/utils_1";

var channel_gen = (channel_type, channel_name, channel_password, bus) => {
  var new_channel = consumer.subscriptions.create({ channel: channel_type, room: channel_name, password: channel_password }, {

    connected() {
      $("#subscriber_count").html(this.count)
      // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> connection etablie")
      new_channel.send({ start: true })
      this.connected = true;
    },

    disconnected() {
      // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> deconnection")
      $("#message-container").html("vous avez été deconnecter du serveur pour une raison inconnu ...")
    },

    rejected() {
      // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> rejected")
      $("#message-container").html("vous avez été banni du chat room")
    },

    received(data) {
      // console.log("--- CHANNEL " + channel_type + "/" + channel_name + " >>> received data")
      if (data["username"] == "server") {
        this.count = data["messageContent"];
        if (this.connected == true)
          $("#subscriber_count").html(this.count)
        else
          $("#subscriber_count").html("ban/error")
      }
      else if (data["username"] == "notification") {
        if (data["messageContent"] == "refresh") {
          if ($("#chat-top-bar > p#center").html() != 'notification') {
            bus.trigger("notificationReceived", this)
          } else {
            bus.trigger("notificationSelected", this)
          }
        }
        else if (data["messageContent"] == "battle-start") {
          router.navigate(`connected/game?game_id=${data["battle_id"]}`, { trigger: true });
        }
        else if (data["messageContent"] == "guild-battle") {
          alert("la guild adverse vous a defier!\nempresse toi d'accepter le defi dans la section Guild!")
        }
      }
      else if (data["username"] == "personnal-chat") {
        if ($("#chat-top-bar > p#center").attr("friend-chat-open") != undefined) {
          if (data["forwarder"] == $("#chat-top-bar > p#center").html() || data["forwarder"] == Cookies.get("pseudo")) {
            var down = false;
            if ($('#message-container').scrollTop() + $('#message-container').innerHeight() >= $('#message-container')[0].scrollHeight) {
              down = true;
            }
            var date = new Date(data["date"]);
            var date_string = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
            $("#message-container").append('<li class="message"><p class="user-message">' + data["forwarder"] + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + data["messageContent"] + '</p></li>')
            if (down == true)
              $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
          }
        }
      }
      else if (data["username"] == "friend-status") {
        bus.trigger("refreshFriendsList", data)
      }
      else if (data["username"] == "channel-ban") {
        bus.trigger("chatroomRefresh", data)
        alert('vous avez etait banni du chatroom [' + data["messageContent"] + ']')
      }
      else if (data["username"] == "channel-unban") {
        bus.trigger("chatroomRefresh", data)
        alert('vous avez etait debanni du chatroom [' + data["messageContent"] + ']')
      }
      else {
        var date = new Date(data["date"]);
        var date_string = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();

        var down = false;
        if ($('#message-container').scrollTop() + $('#message-container').innerHeight() >= $('#message-container')[0].scrollHeight) {
          down = true;
        }
        $("#message-container").append('<li class="message"><p class="user-message">' + data["username"] + '</p><p class="time-message">' + date_string + '</p><br><p class="content-message">' + data["messageContent"] + '</p></li>')
        if (down == true)
          $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
      }
    }
  });
  return (new_channel);
}

export { channel_gen }
