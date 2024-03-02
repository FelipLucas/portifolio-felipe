/*rolagem para o topo*/
window.addEventListener("scroll", function(){
    let scroll = document.querySelector(".scrollTop")
        scroll.classList.toggle("active",window.scrollY >450)
})

function backTop(){
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    })
}

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
var cont = 1

document.getElementById('iradio1').checked = true
setInterval(() => {
    proximaImg()
}, 5000)
function proximaImg(){
    cont++
    if(cont >5){
        cont =1
    }
    document.getElementById('iradio' +cont).checked = true
}

/*Envio de formulario*/
