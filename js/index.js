// GRABBING ELEMENTS FROM HTML USING DOM:
const navLink = document.querySelectorAll(".nav-link");
const mybutton = document.getElementById("myBtn");
const nightMode = document.getElementById("night-mode");
const accordianBody = document.getElementById("faq");

// NIGHT MODE
nightMode.addEventListener("click", nightAction);

function nightAction() {
    document.body.classList.toggle("night");
    accordianBody.classList.add("black");
}

// ACTIVE LINK
function linkAction() {
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

// SCROLLSPY 
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
        }
    })
}

// SCROLL TOP 
mybutton.addEventListener("click", topFunction);
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// PRELOADER EFFECT
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});