const sliderLeft = document.querySelector('.slider__arrow_prev')
const sliderRight = document.querySelector('.slider__arrow_next')
const sliderItemsArray = Array.from(document.querySelectorAll('.slider__item'))


sliderLeft.onclick = () => {
    sliderControl("left")
}

sliderRight.onclick = () => {
    sliderControl("right")               
}


const sliderControl = (direction) => {
    activeIndex = sliderItemsArray.findIndex(obj => obj.classList.contains('slider__item_active'))
    sliderItemsArray[activeIndex].classList.remove('slider__item_active')
    if (direction === "right") {  
        if (activeIndex+1 < sliderItemsArray.length) {
            sliderItemsArray[activeIndex+1].classList.add('slider__item_active')
        }
        else {
            sliderItemsArray[0].classList.add('slider__item_active') 
        }
    }
    
    else if (direction === "left") {
        if (activeIndex-1 > 0) {
            sliderItemsArray[activeIndex-1].classList.add('slider__item_active')
        }
        else {
            sliderItemsArray[sliderItemsArray.length-1].classList.add('slider__item_active')
        }
    }
}




// const sliderControl =  (direction) => {
//     try {
//         sliderItemsArray.forEach(item => {
//             if (item.classList.contains('slider__item_active')) {
//                 item.classList.remove('slider__item_active');

//                     if (direction === "left") {
//                         next = item.previousElementSibling;
//                         elementPosition = item.parentElement.children.length-1;
//                     }
//                     else if (direction === "right") {
//                         next = item.nextElementSibling;
//                         elementPosition = 0; 
//                     }

//                     if (next) {
//                         next.classList.add('slider__item_active');
//                         throw {
//                             reason: "finded"
//                         }
//                     }
//                     else {
//                         item.parentElement.children[elementPosition].classList.add('slider__item_active');
//                         throw {
//                             reason: "finded"
//                         }
//                     }
//             }
//         })
        
//     } catch ({reason}) {
// }}
