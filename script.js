
function sendMail() {
    const form = document.getElementById("email-form");
    emailjs.sendForm("service_gnlllya", "template_bxfz3v7",form)
        .then(response => {
            console.log("Email sent successfully:", response);
            form.reset();
            toastr.success('Email sent successfully');
            // Handle success, e.g., show a success message to the user
        })
        .catch(error => {
            console.error("Error sending email:", error);
            toastr.error('Error sending email');
            // Handle error, e.g., show an error message to the user
        });
}

// Toggle active 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle and navbar

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
};


// Scroll 

ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200 
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

// service_gnlllya



