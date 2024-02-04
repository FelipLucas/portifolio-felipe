/*dark-theme*/
const changeThemeBtn = document.querySelector("#change-theme");
changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("dark");
});

/*toggle dark mode*/
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

/*//load and save theme/
function loadTheme() {
    const darkMode = localStorage.getItem("dark");
    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();
changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();
    localStorage.removeItem("dark");
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});*/

const slider = document.querySelectorAll(".slider")
const btnPrev = document.getElementById("prev-button")
const btnNext = document.getElementById("next-button")

let currentSlide = 0;
function hideSlider(){
    slider.forEach(item => item.classList.remove("slider1"))
}
function showSlider(){
    slider[currentSlide].classList.add("slider1")
}

function nextSlider(){
    hideSlider()
    if(currentSlide === slider,length -1){
       currentSlide =0
    } else{
        currentSlide++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()
    if(currentSlide ===0){
       currentSlide = slider.length -1
    } else{
        currentSlide--
    }
    showSlider()
}
btnNext.addEventListener("click", nextSlider)
btnNext.addEventListener("click", prevSlider)
console.log(slider)