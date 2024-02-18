const container = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
let filledStars = 0;

container.addEventListener("click", (e)=>{
    if(e.target.classList.contains("star"))
    {
        const currentSelected = e.target.dataset.index;

        if(currentSelected < filledStars)
        {
            for(let i = 0; i < filledStars;i++)
            {
                stars[i].classList.remove("selected");
            }
        }

        for (let i = 0; i < currentSelected; i++)
        {
            stars[i].classList.add("selected");
        }
        filledStars = currentSelected;
        const count = document.querySelector(".count");
        count.innerHTML = filledStars;
    }
})
container.addEventListener("mouseover", (e)=>{
    const currentHovered = e.target.dataset.index;
    
    for(let i = 0; i < 5;i++)
    {
     stars[i].classList.remove("selected");
    }
    
    for(let i = 0; i < currentHovered ; i++)
    {
        stars[i].classList.add("selected");
    }
})

container.addEventListener("mouseleave", (e)=>{
    for(let i = 0; i < 5;i++)
    {
     stars[i].classList.remove("selected");
    }
    
    for(let i = 0; i < filledStars ; i++)
    {
        stars[i].classList.add("selected");
    }
})