let currentTheme = "dark-mode";

const darkModeButton = document.getElementById("dark-mode");
const lightModeButton = document.getElementById("light-mode");
const r = document.querySelector(':root');
const themes = 
    { 
        "dark-mode":
            {
                "background-color": "rgb(7, 15, 43)",
                "color": "white",
                "nav-hover": "rgba(255,255,255,0.2)",
            },
        "light-mode":
            {
                "background-color": "white",
                "color": "black",
                "nav-hover": "rgba(0,0,0,0.2)",
            },
    };

function changeTheme(theme){
    currentTheme=theme;
    if(theme==="light-mode"){
        console.log("aii");
        darkModeButton.style.display="block";
        lightModeButton.style.display="none";
    }else{
        darkModeButton.style.display="none";
        lightModeButton.style.display="block";
    }
    setTheme();
}

function setTheme(){
    r.style.setProperty('--background-color', themes[currentTheme]["background-color"]);
    r.style.setProperty('--color', themes[currentTheme]["color"]);
    r.style.setProperty('--nav-hover', themes[currentTheme]["nav-hover"]);
}

lightModeButton.addEventListener('click',()=>changeTheme('light-mode'));
darkModeButton.addEventListener('click',()=>changeTheme('dark-mode'));