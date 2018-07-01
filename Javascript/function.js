// 약정서 Select Box
$.fn.extend({
    'name'      : 'Select Box',
    'ver'       : '1.0',
    'selectBox' : function(opts){
        var defaults = {
            oSelectList     : '.selectList'
            ,activeClass    : 'active'
        };

        var options = $.extend(defaults, opts);

        return this.each(function(){

            var _that = $(this)

            // MOUSE ACTION
            _that.click(function(){
            	if(_that.hasClass(options.activeClass)){
            		return _that.removeClass( options.activeClass );
            	}else{
            		 return _that.addClass( options.activeClass );
            	}
            });

            _that.mouseleave(function(){
                return _that.removeClass( options.activeClass );
            });
        })
    }
});
