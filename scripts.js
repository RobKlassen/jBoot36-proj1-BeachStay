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

let overlayImg = document.querySelectorAll('img');
const body = document.querySelector('body');
const newOverlay = document.createElement('div');

for (i=0; i<overlayImg.length; i++){
    let image = overlayImg[i];
    
    overlayImg[i].addEventListener('click', function(){
        let imageSource = image.currentSrc;
        newOverlay.innerHTML = `<img src="${imageSource}"></img>` 
        newOverlay.classList.add("overlayJSClass");
        body.appendChild(newOverlay);
    });
    newOverlay.addEventListener('click', function(){
        newOverlay.innerHTML = ``;
        this.classList.remove("overlayJSClass");
        // body.removeChild(newOverlay);
    });
}












// for (image of overlayImg){
//     console.log(image);

//     image.addEventListener('click', function(e){
//         e.preventDefault();
//         console.log(image);
        
//         let imageSource = getCurrentSource(image);
//         console.log(imageSource);

//         const body = document.querySelector('body');

//         const newOverlay = document.createElement('div');

//         newOverlay.innerHTML = `<img src="${imageSource}"></img>` 
        
//         newOverlay.style.width = "100px";
//         newOverlay.style.height = "100px";
        
//         // console.log(newOverlay);
        
//         body.appendChild(newOverlay);
//         enlargeImage(image);
//     });
// }



// const overylayBox
// const overlayBackground
// const imgClick = function(){

// }