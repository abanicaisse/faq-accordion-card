const accordion = document.getElementsByClassName("accordion__btn");


for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", showPannel) 
    
    function showPannel(e){
        accordion[i].classList.toggle("active-btn");
        const accPannel = this.nextElementSibling;

        if (accPannel.style.display === "block") {
            accPannel.style.display = "none";
        }else {
            accPannel.style.display = "block";
        }
    }
}

