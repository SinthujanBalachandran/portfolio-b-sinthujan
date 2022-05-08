const sections = document.querySelectorAll("section[id");

window.addEventListener("scroll", hello);

function hello() {
    console.log("hello");
}

function navHighliter() {
    let scrollY = window.pageYOffset;
    console.log(scrollY)
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.sidebar-items a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.sidebar-items a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    });

}