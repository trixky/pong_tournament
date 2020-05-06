import consumer from "../channels/consumer"
import {channel_gen} from "../channels/chat_channel"


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