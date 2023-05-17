/////////////////////////////////////////// Toggle icon navbar/////////////////////////

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/////////////////////////////////////////// scroll section active links/////////////////////////

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    /////////////////////////////////////////// Sticky navbar/////////////////////////
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /////////////////////////remove toggle icon and navbar when click navbar link (scroll)/////////////////////

    // menuIcon.classList.toggle('fa-x');
    // navbar.classList.toggle('active');

};

/////////////////////////////////////////// Scroll Reveal/////////////////////////

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .portfolio-box, contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 ////////////////////////////////////////// typed js////////////////////////////////////


const typed = new Typed('.multiple-text',{
    strings: ['Full Stack Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true 
});