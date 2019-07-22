var panels = document.querySelectorAll('.tabs-panel');
var tabs = document.querySelectorAll('.tabs__radio');

if (panels !== null && panels !== undefined &&
    tabs !== null && tabs !== undefined) {
        for (var tab of tabs) {
            tab.addEventListener('change', function(){
                var i = this.getAttribute("data-index");
                for (var panel of panels){
                    if (panel.getAttribute("data-index") == i ) {
                        panel.classList.add('tabs-checked');
                    } else {
                        panel.classList.remove('tabs-checked');
                    }
                }        
            });        
        }
    }