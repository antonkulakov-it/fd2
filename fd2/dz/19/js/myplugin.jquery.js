(function($){
    $.fn.myplugin = function() {
        var original = [];
        // чтобы последний кликнутый был всегда выше остальных 
        // используем z-index
        var zIndex = 1;
        
        var closeBtn = function(i){
            var div = $('<div class="closeBtn">&times;</div>');
            div.on("click", function(e){
                zIndex--;
                e.stopPropagation();
                var p =$(this).parent();
                p.removeClass("full");
                p.html('');
                p.css('z-index', zIndex);
            })
            return div;
        }
        
        return this.each(function(i){
            // сохраняем оригинальный контент 
            original[i] = $(this);
            
            // создаем квадратики
            var div = $('<div class="square"></div>');
            
            // добавляем обработчик событий
            div.on("click", function(){
                zIndex++;
                $(this).html(original[i].text());
                $(this).append(closeBtn());
                $(this).addClass('full');
                div.css('z-index', zIndex);
            });
            
            var p = $(this).parent();
            p.append(div);
            // удаляем из dom
            $(this).detach();
        });
    }
})(jQuery);