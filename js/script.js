// Define the breakpoints for your media queries
const breakpoints = {
    xsmall: 350,
    small: 500,
    smedium: 600,
    medium: 768,
    large: 992,
    xlarge: 1200,
};

// Create a function to check the current screen size
function checkScreenSize() {
    if (window.matchMedia(`(max-width: ${breakpoints.xsmall}px)`).matches) {
        // code for small screens

        // let text = document.getElementById('text7');
        let ariarologo = document.getElementById('ariarologo7');
        // let topkulogo = document.getElementById('topkulogo7');
        let mainparagraph = document.getElementById('mainparagraph7');
        let drone = document.getElementById('drone7');
        let robot = document.getElementById('robot7');
        let vr = document.getElementById('vr7');
        let base = document.getElementById('down-base7');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            // text.style.marginTop = value * 2.5 + 'px';
            ariarologo.style.marginTop = value * 1 + 'px';
            // topkulogo.style.marginTop = value * 1.2 + 'px';
            mainparagraph.style.marginTop = value * 2.5 + 'px';
            robot.style.marginTop = value * 1 + 'px';
            robot.style.left = value * 1 + 'px';
            vr.style.marginTop = value * 1 + 'px';
            vr.style.left = value * -1 + 'px';
            drone.style.left = value * 2.5 + 'px';
            drone.style.marginTop = value * -2.5 + 'px';
        });        

    }

    else if (window.matchMedia(`(max-width: ${breakpoints.small}px)`).matches) {
        // code for small-medium screens

        // let text = document.getElementById('text6');
        let ariarologo = document.getElementById('ariarologo6');
        // let topkulogo = document.getElementById('topkulogo6');
        let mainparagraph = document.getElementById('mainparagraph6');
        let drone = document.getElementById('drone6');
        let robot = document.getElementById('robot6');
        let vr = document.getElementById('vr6');
        let base = document.getElementById('down-base6');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            // text.style.marginTop = value * 2.5 + 'px';
            ariarologo.style.marginTop = value * 1 + 'px';
            // topkulogo.style.marginTop = value * 1.2 + 'px';
            mainparagraph.style.marginTop = value * 2.5 + 'px';
            robot.style.marginTop = value * 1 + 'px';
            robot.style.left = value * 1 + 'px';
            vr.style.marginTop = value * 1 + 'px';
            vr.style.left = value * -1 + 'px';
            drone.style.left = value * 2.5 + 'px';
            drone.style.marginTop = value * -2.5 + 'px';
        });

    }

    else if (window.matchMedia(`(max-width: ${breakpoints.smedium}px)`).matches) {
        // code for small-medium screens

        // let text = document.getElementById('text5');
        let ariarologo = document.getElementById('ariarologo5');
        // let topkulogo = document.getElementById('topkulogo5');
        let mainparagraph = document.getElementById('mainparagraph5');
        let drone = document.getElementById('drone5');
        let robot = document.getElementById('robot5');
        let vr = document.getElementById('vr5');
        let base = document.getElementById('down-base5');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            // text.style.marginTop = value * 2.5 + 'px';
            ariarologo.style.marginTop = value * 1 + 'px';
            // topkulogo.style.marginTop = value * 1.2 + 'px';
            mainparagraph.style.marginTop = value * 2.5 + 'px';
            robot.style.marginTop = value * 1 + 'px';
            robot.style.left = value * 1 + 'px';
            vr.style.marginTop = value * 1 + 'px';
            vr.style.left = value * -1 + 'px';
            drone.style.left = value * 2.5 + 'px';
            drone.style.marginTop = value * -2.5 + 'px';
        });

    }
    
    else if (window.matchMedia(`(max-width: ${breakpoints.medium}px)`).matches) {
        // code for medium screens

        // let text = document.getElementById('text4');
        let ariarologo = document.getElementById('ariarologo4');
        // let topkulogo = document.getElementById('topkulogo4');
        let mainparagraph = document.getElementById('mainparagraph4');
        let drone = document.getElementById('drone4');
        let robot = document.getElementById('robot4');
        let vr = document.getElementById('vr4');
        let base = document.getElementById('down-base4');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            // text.style.marginTop = value * 2.5 + 'px';
            ariarologo.style.marginTop = value * 1 + 'px';
            // topkulogo.style.marginTop = value * 1.2 + 'px';
            mainparagraph.style.marginTop = value * 2.5 + 'px';
            robot.style.marginTop = value * 1 + 'px';
            robot.style.left = value * 1 + 'px';
            vr.style.marginTop = value * 1 + 'px';
            vr.style.left = value * -1 + 'px';
            drone.style.left = value * 2.5 + 'px';
            drone.style.marginTop = value * -2.5 + 'px';
        });

    }
    
    else if (window.matchMedia(`(max-width: ${breakpoints.large}px)`).matches) {
        // code for large screens

        // let text = document.getElementById('text3');
        let ariarologo = document.getElementById('ariarologo3');
        // let topkulogo = document.getElementById('topkulogo3');
        let mainparagraph = document.getElementById('mainparagraph3');
        let drone = document.getElementById('drone3');
        let robot = document.getElementById('robot3');
        let vr = document.getElementById('vr3');
        let base = document.getElementById('down-base3');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            // text.style.marginTop = value * 2.5 + 'px';
            ariarologo.style.marginTop = value * 1 + 'px';
            // topkulogo.style.marginTop = value * 1.2 + 'px';
            mainparagraph.style.marginTop = value * 2.5 + 'px';
            robot.style.marginTop = value * 1 + 'px';
            robot.style.left = value * 1 + 'px';
            vr.style.marginTop = value * 1 + 'px';
            vr.style.left = value * -1 + 'px';
            drone.style.left = value * 2.5 + 'px';
            drone.style.marginTop = value * -2.5 + 'px';
        });

    }
    
    else if (window.matchMedia(`(max-width: ${breakpoints.xlarge}px)`).matches) {
        // code for xlarge screens

        // let text = document.getElementById('text2');
        let ariarologo = document.getElementById('ariarologo2');
        // let topkulogo = document.getElementById('topkulogo2');
        let mainparagraph = document.getElementById('mainparagraph2');
        let drone = document.getElementById('drone2');
        let robot = document.getElementById('robot2');
        let vr = document.getElementById('vr2');
        let base = document.getElementById('down-base2');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            // text.style.marginTop = value * 2.5 + 'px';
            ariarologo.style.marginTop = value * 1 + 'px';
            // topkulogo.style.marginTop = value * 1.2 + 'px';
            mainparagraph.style.marginTop = value * 2.5 + 'px';
            robot.style.marginTop = value * 1 + 'px';
            robot.style.left = value * 1 + 'px';
            vr.style.marginTop = value * 1 + 'px';
            vr.style.left = value * -1 + 'px';
            drone.style.left = value * 2.5 + 'px';
            drone.style.marginTop = value * -2.5 + 'px';
        });

    }
    
    else {
        // code for screens larger than xlarge

        // let text = document.getElementById('text');
        let ariarologo = document.getElementById('ariarologo');
        // let topkulogo = document.getElementById('topkulogo');
        let mainparagraph = document.getElementById('mainparagraph');
        let drone = document.getElementById('drone');
        let robot = document.getElementById('robot');
        let vr = document.getElementById('vr');
        let base = document.getElementById('down-base');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            // text.style.marginTop = value * 2.5 + 'px';
            ariarologo.style.marginTop = value * 1 + 'px';
            // topkulogo.style.marginTop = value * 1.2 + 'px';
            mainparagraph.style.marginTop = value * 2.5 + 'px';
            robot.style.marginTop = value * 1 + 'px';
            robot.style.left = value * 1 + 'px';
            vr.style.marginTop = value * 1 + 'px';
            vr.style.left = value * -1 + 'px';
            drone.style.left = value * 2.5 + 'px';
            drone.style.marginTop = value * -2.5 + 'px';
        });
    }
}
// Call the function on page load and when the window is resized
checkScreenSize();
window.addEventListener('resize', checkScreenSize);



// Swiper JS

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});