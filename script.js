const btn=document.querySelector(".btn");
const rts=document.querySelector(".rating-section");
const items=document.querySelectorAll(".item");
const submit=document.querySelector(".submit")
const successpopup=document.querySelector(".success-popup")


btn.addEventListener("click",()=>{
    if(rts.className==="rating-section"){
        rts.classList.add("rating-section-slide")
    }
    else{rts.classList.remove("rating-section-slide")
}
})
 
items.forEach(item=>{
    item.addEventListener("click",()=>{
        items.forEach(item=>{
            item.classList.remove("active")
        })
        item.classList.add("active")
    })
})
submit.addEventListener("click",()=>{
    successpopup.classList.add("success-popup-slide")
})