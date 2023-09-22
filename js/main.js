let link = document.querySelectorAll('#ul-nav li a')
link.forEach((ele) => {
    ele.addEventListener("click", hello)
    
});

function hello() {
    link.forEach((ele) => {
        ele.classList.remove("active")
        this.classList.add('active')
    });
}


