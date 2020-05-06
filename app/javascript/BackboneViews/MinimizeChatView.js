var MinimizeChatView = Backbone.View.extend({

    initialize: function () {
        this.open = true;
    },

    render: function () {
        var self = this
        $('#left-button-minimize').remove()
        
        var my_sign;
        var my_class;
        
        if (self.open) {
            my_sign = '◄'
            my_class = 'open-lbm'
        } else {
            my_sign = '►'
            my_class = 'close-lbm'
        }
        
        $('.Content').prepend('<p id="left-button-minimize" class="' + my_class + '">' + my_sign + '</p>')
        
        $('#left-button-minimize').click(function(){
            if (self.open) {
                $('.social').css('display', 'none')
                self.open = false;
            } else {
                $('.social').css('display', 'block')
                self.open = true;
            }
            self.render()
        })

        return (this);
    }
})

export {MinimizeChatView}