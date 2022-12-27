const modal = document.getElementById("modal_main");
const modalClose = Array.from(document.querySelectorAll(".modal__close_times"));
const success = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

popupGJ = () => {
    modal.classList.add("modal_active");

    success.onclick  =  () => {
        modalSuccess.classList.add("modal_active");
        modal.classList.remove("modal_active");
    };

    modalClose.forEach(m => m.onclick =  () => {
            m.closest(".modal").classList.remove("modal_active");
    });

}

popupGJ();