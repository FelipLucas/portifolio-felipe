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
var radio = document.querySelector('.manual-btn')
document.getElementById('iradio1').checked = true
setInterval(() => {
    proximaImg()
}, 5000)
function proximaImg(){
    cont++
    if(cont > 6){
        cont = 1
    }
    document.getElementById('radio' +cont).checked = true
}