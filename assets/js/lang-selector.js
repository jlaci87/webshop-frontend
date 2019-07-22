var selectors = document.querySelectorAll('.lang-selector__checkbox');
var langs = document.querySelectorAll('.lang-selector__flag');

if (selectors !== undefined && selectors !== null &&
    langs !== undefined && langs !== null) {
        for(var selector of selectors){
            selector.addEventListener('change', function() {
                var i = this.getAttribute('data-selector-index');
                for(var lang of langs){
                    if(lang.getAttribute('data-lang-index') == i) {
                        lang.classList.add('lang-checked');
                    } else {
                        lang.classList.remove('lang-checked');
                    }
                }
            });
        }
    }






    
    
    








