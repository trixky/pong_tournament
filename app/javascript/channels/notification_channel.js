import consumer from "./consumer"

var notification_gen = () => {
    var new_notification = consumer.subscriptions.create({}, {
        connected() {
            // console.log("--- NOTIFICATION >>> connection etablie")
            this.connected = true;
        },

        disconnected() {
            // console.log("--- NOTIFICATION >>> deconnection")
        },

        rejected() {
            // console.log("--- NOTIFICATION >>> rejected")
        },

        received(data) {
            // console.log("--- NOTIFICATION >>> received data")
        }
    });
    return (new_notification);
}
export { notification_gen }
