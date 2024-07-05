let currentTheme = "light-mode";

const darkModeButton = document.getElementById("dark-mode");
const lightModeButton = document.getElementById("light-mode");
const r = document.querySelector(':root');
const themes = 
    { 
        "dark-mode":
            {
                "background-color": "rgb(0, 0, 0)",
                "header-color": "rgba(0,0,0,0.3)",
                "color": "white",
                "nav-hover": "rgba(255,255,255,0.2)",
            },
        "light-mode":
            {
                "background-color": "white",
                "header-color": "rgba(255,255,255,0.3)",
                "color": "black",
                "nav-hover": "rgba(0,0,0,0.05)",
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
    r.style.setProperty('--header-color', themes[currentTheme]["header-color"]);
}

lightModeButton.addEventListener('click',()=>changeTheme('light-mode'));
darkModeButton.addEventListener('click',()=>changeTheme('dark-mode'));

setTheme();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('from-left');
        }else{
            entry.target.classList.remove('from-left');    
        }
    })
});

const fromLeft = document.querySelectorAll('.to-show-from-left')
fromLeft.forEach((element)=> observer.observe(element))