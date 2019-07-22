var images = document.querySelectorAll('.mega-dd__img');
var sections = document.querySelectorAll('.mega-dd__section');


if (images !== null && images !== undefined &&
    sections !== null && sections !== undefined) {
        for (var section of sections) {
            section.addEventListener("mouseover", function(){
                var i = this.getAttribute("data-index");
                console.log(i);
                var images = document.querySelectorAll('.mega-dd__img');
                console.log(images);
                          
                for (var image of images){
                    if (image.getAttribute("data-index") == i ) {
                        image.classList.add('fade-in');
                    } else {
                        image.classList.remove('fade-in');
                    }
                }
            });        
        }
    }