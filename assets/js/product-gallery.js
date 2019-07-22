var images = document.querySelectorAll('.product-item__img');
var thumbs = document.querySelectorAll('.product-item__img-checkbox');

if (images !== null && images !== undefined &&
    thumbs !== null && thumbs !== undefined) {
        for (var thumb of thumbs) {
            thumb.addEventListener('change', function(){
                var i = this.getAttribute("data-index");
                for (var image of images){
                    if (image.getAttribute("data-index") == i ) {
                        image.classList.add('img-checked');
                    } else {
                        image.classList.remove('img-checked');
                    }
                }
        
            });
        
        }
    }


