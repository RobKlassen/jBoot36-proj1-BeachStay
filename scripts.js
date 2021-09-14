// console.log("hello");

// click the images and they enlarge in a popout, with a faded div background.

// detect click on image
// build a div with fixed position, that contains the image that was clicked on
//  
// build a div with fixed position that blurs or fades the background a bit
//


const getCurrentSource = function (img){
    return img.currentSrc
}

const enlargeImage = function(){
    console.log("hello you've clicked an image");
}

const overlayImg = document.querySelectorAll('img');

for (image of overlayImg){

    image.addEventListener('click', function(e){
        e.preventDefault();
        console.log(image);
        
        let imageSource = getCurrentSource(image);
        console.log(imageSource);

        const body = document.querySelector('body');

        const newOverlay = document.createElement('div');

        newOverlay.innerHTML = `<img src="${imageSource}"></img>` 
        
        newOverlay.style.width = "100px";
        newOverlay.style.height = "100px";
        
        console.log(newOverlay);
        
        body.appendChild(newOverlay);
        
        // const newImage = document.createElement('img');
        // newOverlay.appendChild(newImage);
        // newImage.style.width = "100px";
        // newImage.style.height = "100px";
        enlargeImage(image);
        // console.log("hello, you've clicked the image");
    })
}






// const overylayBox

// const overlayBackground



// const imgClick = function(){

// }