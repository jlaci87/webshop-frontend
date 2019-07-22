var navFromTop = document.querySelector('.navigation');
var triggerPoint = document.querySelector('.header').nextElementSibling;
var height = document.querySelector('.navigation').clientHeight; 


    if (navFromTop !== undefined && navFromTop !== null && 
        triggerPoint !== undefined && triggerPoint !== null && 
        height !== undefined && height !== null)  {
        addEventListener("scroll", function () {
            var height = document.querySelector('.navigation').clientHeight;
            if (window.pageYOffset > triggerPoint.offsetTop ) {
                navFromTop.classList.add('move-in-down');
            } 
            if (window.pageYOffset < (triggerPoint.offsetTop - height )) {
                document.querySelector('.navigation').classList.remove('move-in-down');
            }
        });
    }