
    function slideshow()
    {
        document.getElementById("diImg").innerHTML=`
        <div class="upmost">
            <div class="slideshow-container">
                <div class="mySlides">
                    <img class="newImg" src="images/prScreen1.png">
                </div>

                <div class="mySlides">
                    <img class="newImg" src="images/prScreen2.png">
                </div>

                <div class="mySlides">
                    <img class="newImg" src="images/prScreen3.png">
                </div>

            </div>
            <div style="height: 2em; background-color: lightcyan;"></div>

            <div class="buttonDiv">
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
            </div>  
            
        </div>
        
        `
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 3000);
        }
    }