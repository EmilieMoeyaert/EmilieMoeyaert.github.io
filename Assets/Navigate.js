 document.querySelector(".Navigation").addEventListener("click",Show);
let Home = document.querySelector(".Home")
function Show(e)
{
    let sections =document.querySelectorAll(".section");
    let Name = e.target.dataset.name;
    let section = document.querySelector("." + Name);
    sections.forEach(function(s)
    {
        
        s.classList.add("hidden");
    });
    section.classList.remove("hidden");
    if (Name == "Home") 
    { Home.classList.remove("hidden"); } 
    else 
        { let section = document.querySelector("." + Name); 
            section.classList.remove("hidden");
             Home.classList.add("hidden"); }
   
    console.log(e.target.dataset.name);
    // switch(e.target.dataset.name)
    // {
    //     case"Independence":
    //         test = document.querySelector(".Independence");
    //         test.classList.toggle("hidden");
    //         break;
    //     case "Sociable":
    //          test = document.querySelector(".Sociable");
    //         test.classList.toggle("hidden");
    //         break;
    //     case "Experience":
    //         test = document.querySelector(".Experience");
    //         test.classList.toggle("hidden");
    //         break;

    //         case "MoreSociable":
    //         test = document.querySelector(".MoreSociable");
    //         test.classList.toggle("hidden");
    //         break;

    //         case "Me":
    //         test = document.querySelector(".Me");
    //         test.classList.toggle("hidden");
    //         break;
    // }
    }

