// console.log("hello");

// click the images and they enlarge in a popout, with a faded div background.

// detect click on image
// build a div with fixed position, that contains the image that was clicked on
//  
// build a div with fixed position that blurs or fades the background a bit
//


// const getCurrentSource = function (img){
//     return img.currentSrc
// }

// const enlargeImage = function(){
//     console.log("triggered enlarge function");
// }

const app = {}

app.imageOverlay = function(){
    let overlayImg = document.querySelectorAll('img');
    const body = document.querySelector('body');
    const newOverlay = document.createElement('div');

    for (i=0; i<overlayImg.length; i++){
        let image = overlayImg[i];

        overlayImg[i].addEventListener('click', function(){
            let imageSource = image.currentSrc;
            newOverlay.innerHTML = `<img src="${imageSource}">` 
            newOverlay.classList.add("overlayJSClass");
            body.appendChild(newOverlay);
        });

        newOverlay.addEventListener('click', function(){
            newOverlay.innerHTML = ``;
            this.classList.remove("overlayJSClass");
        });
    }    
}

app.galImageEnlarge = function(){
    let galParent = document.querySelector(".galleryContainer");
    let galImgBox = document.querySelectorAll('.mainGalImgBox');

    for (i=0; i<galImgBox.length; i++){
        let image = galImgBox[i];

        image.addEventListener('mouseover', function(){
            galParent.classList.add("mouseoverJSClassParent");
            this.classList.add("mouseoverJSClassChild");
        });
        image.addEventListener('mouseout', function(){
            galParent.classList.remove("mouseoverJSClassParent");
            this.classList.remove("mouseoverJSClassChild");
        });
    }
}

app.init = function(){
    app.imageOverlay();
    app.galImageEnlarge();
}

app.init();