const prjbtn = document.getElementById("projects");
const homebtn = document.getElementById("home");
const contactbtn = document.getElementById("contact");
const resumebtn = document.getElementById("resume");

prjbtn.addEventListener("click", function(e) {
    window.location.href="./projects.html";
});

homebtn.addEventListener("click", function(e) {
    window.location.href="./index.html";
});

contactbtn.addEventListener("click", function(e) {
    window.location.href="./contact.html";
});

resumebtn.addEventListener("click", function(e) {
    window.location.href="./resume.html";
});
