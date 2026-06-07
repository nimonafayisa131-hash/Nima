const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// open/close menu
menuBtn.onclick = () => {
    navLinks.classList.toggle("active");
};


