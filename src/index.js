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