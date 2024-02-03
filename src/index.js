
//Botão menu//
function menuShow(){
    let menuMobile =  document.querySelector(".menu-mobile");
    if(menuMobile.classlist.contains("open")){
        menuMobile.classList.remove("open").src ="https://www.svgrepo.com/show/474244/menu-fries.svg";
    }else{
        menuMobile.classList.add("open");
    }
}