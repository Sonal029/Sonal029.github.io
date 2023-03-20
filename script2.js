
// navbar

const navToggler =document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    console.log("welcome  to my personal portfolio")
    hideSection();
    toggleNavbar();
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}


// about 

const tabsContainer=document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click",(e)=>{

if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target=e.target.getAttribute("data-target");
    console.log(target)
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
}

});

// project

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
})
function  toggleProjectPopup(){
    document.querySelector(".project-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click",toggleProjectPopup);

//click close

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner")){
        toggleProjectPopup();
    }
});


function projectItemDetails(projectItem){
    document.querySelector(".pp-thumbnail img").src=
    projectItem.querySelector(".project-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML=
    projectItem.querySelector(".project-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML=
    projectItem.querySelector(".project-item-details").innerHTML;
}

// const navToggler = document.querySelector(".nav-toggler");
// navToggler.addEventListener("click", () =>{
//     hideSection();
// })
// function hideSection(){
//     document.querySelector("section.active").classList.toggle("fade-out");
// }



// active
document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
             window.scrollTo(0,0);
             document.body.classList.add("hide-scrolling");
             navToggler.classList.remove("hide");
        },500)
    }
})
