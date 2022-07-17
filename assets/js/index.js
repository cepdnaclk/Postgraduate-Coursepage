$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    window.addEventListener('scroll', reveal);

    function reveal(){
        let reveals = document.querySelectorAll('.reveal');

        for(let i=0; i<reveals.length; i++){
            let windowheight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            } 
            // else {
            //     reveals[i].classList.remove('active');
            // }
        }
    }

});