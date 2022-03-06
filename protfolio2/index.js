const header = document.getElementById("header")
const openBtn = document.getElementById("open-close-header")

const headerLinks = document.getElementsByClassName("header-links")

const sections = document.getElementsByClassName("section") // helps in scrolling to specific sections


let hidden = window.screen.width < 800 // hide header if less than 800px

if (hidden){
    header.classList.add("hidden")
}

let current = ''

window.onscroll = (e) => {
    
    for (const sec of sections){

        const sectionTop = sec.offsetTop

        if (scrollY > sectionTop - 200 ) {
            current = sec.getAttribute("id"); 
        }

        for (const x of headerLinks){
            x.classList.remove("active-header-link")

            if (x.classList.contains(current)){
                x.classList.add("active-header-link")
            }
        }
        
        if(document.getElementsByClassName("active-header-link").length === 0) {
            // set defaults
            headerLinks[0].classList.add("active-header-link")
        }
    }

   

}


function main(){
    
}

