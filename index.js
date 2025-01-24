const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.sidebar,.sidebar-icons,.nav-bar,.nav-container,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


// const arrowClick=document.querySelectorAll(".arrow-icon");
// const movieLists=document.querySelectorAll(".movie-List");

// arrowClick.forEach((arrow,i)=>{

//     const itemNumber = movieLists[i].querySelectorAll("img").length;
//     let clickCounter = 0;
//     arrow.addEventListener("click",()=>{
//         clickCounter++;
//         if(itemNumber-(4+clickCounter)>=0)
//         {
//             movieLists[i].style.transform = 'translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-270}px)';
//         }

//         else{
//             movieLists[i].style.transform = "translateX(0)";
//             clickCounter = 0;
//         }
        
    
// });

// });

const arrows = document.querySelectorAll(".arrow-icon");
const movieLists = document.querySelectorAll(".movie-List");

arrows.forEach((arrow,i)=>{

    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    
        arrow.addEventListener("click",()=>{

            const ratio = Math.floor(window.innerWidth / 270);
            clickCounter++;
            if (itemNumber - (4 + clickCounter)+(4-ratio)>= 0) {
                movieLists[i].style.transform = `translateX(${
                  movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
                }px)`;
              } else {
                movieLists[i].style.transform = "translateX(0)";
                clickCounter = 0;
              }
            
         });
         
    
});