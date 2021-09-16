// ==================================================
// NOTES FOR DAVID NOTES FOR DAVID NOTES FOR DAVID 
// ==================================================

// HELLO!  THANK YOU FOR THE FEEDBACK ON PROJECT 1, 

//  NEW CODE IS IN THIS SCRIPTS FILE, AND THE NEW PARTIAL CALLED '_JStyle.scss' SO CHECK THERE FOR ANY CSS CODE.   

// SO I ADDED A FEATURE THAT LETS THE USER CLICK ANY IMAGE AND HAVE IT POP OUT TO TAKE UP THE FULL SCREEN, WITH A FADED BACKGROUND AND SOME OTHER SIMPLE CSS FLAIR.

// I FELT LIKE THAT WASN'T REALLY ENOUGH OF A FEATURE SO I ALSO ADDED A FEATURE TO THE GALLERY WHERE IF YOU MOUSE OVER THE GALLERY IMAGES (AT DESKTOP SIZE) IT WILL MAKE THE ONE YOU MOUSEOVER SLIGHTLY LARGER.  I KIND OF THREW THIS TOGETHER QUICKLY ON WEDNESDAY NIGHT SO IT ISN'T QUITE AS GOOD LOOKING AS I WANT BUT IT'S JUST CSS TO ADJUST AT THIS POINT, THE JS SEEMS TO WORK WELL.  

// MY JS ASSIGNMENT IS NOT RESPONSIVE, I AM VERY NEW TO VANILLA-JS AND THIS HAS BEEN A HUGE LEARNING EXPERIENCE, BUT I THINK I DID OKAY AT MAKING IT EFFICIENT-ISH... 

// ==================================================
// NOTES FOR DAVID NOTES FOR DAVID NOTES FOR DAVID 
// ==================================================

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