/*dark-theme*/
const changeThemeBtn = document.querySelector("#change-theme");
changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("dark");
});

/*toggle dark mode*/
function toggleDarkMode(){
    document.body.classList.toggle("dark");
};

menu-mobile
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.burger');

button.addEventListener('click', function() {
    mobileNavbar.classList.toggle('active');
});

/*carrossel*/
