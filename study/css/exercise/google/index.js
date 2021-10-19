let dropdownMenu = document.getElementById("dropdown-menu");
let appDropdown = document.getElementById("dropdown-menu-apps"); 
dropdownMenu.addEventListener("click", (event) => {
    if (appDropdown.style.display === "block"){
        appDropdown.style.display = "none";
    }else{
        appDropdown.style.display = "block";
    }
     
});


