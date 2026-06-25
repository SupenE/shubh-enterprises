// Fade-in Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

document.querySelectorAll('.card').forEach(card => {

observer.observe(card);

});

function toggleMenu() {
    document
        .querySelector(".nav-links")
        .classList
        .toggle("active");
}
