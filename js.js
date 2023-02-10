 menu = document.querySelector(".menu").querySelectorAll("li");
 console.log(menu);
 menu.forEach(element => {
    element.addEventListener("click", function(){
        menu.forEach(menu=>menu.classList.remove("active"))
        this.classList.add("active");
    })
 });