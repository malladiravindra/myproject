// Typing Effect
const text = "Python Django Developer | Full Stack Learner | Problem Solver";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 60);
    }
}
type();

// Scroll Fade Animation
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
