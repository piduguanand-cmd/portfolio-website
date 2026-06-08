// =========================
// TYPING ANIMATION
// =========================

const text = "Aspiring Software Developer";
let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    } else {

        typeAbout();
    }
}

window.onload = typeEffect;


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const triggerPoint = 150;

        if(sectionTop < window.innerHeight - triggerPoint){

            section.classList.add("show");
        }

    });

});


// =========================
// NAVBAR COLOR CHANGE
// =========================

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("nav-scrolled");

    }
    else{

        navbar.classList.remove("nav-scrolled");
    }

});
const aboutText =
"I am a third-year B.Tech student in Computer Science and Design at Sree Chaitanya College of Engineering. I am passionate about web development and enjoy building responsive and user-friendly websites. I continuously improve my skills in programming and software development.";

let aboutIndex = 0;

function typeAbout() {

    if (aboutIndex < aboutText.length) {

        document.getElementById("aboutTyping").innerHTML +=
            aboutText.charAt(aboutIndex);

        aboutIndex++;

        setTimeout(typeAbout, 25);
    }
}

// Start after the first typing animation finishes
setTimeout(typeAbout, 3500);