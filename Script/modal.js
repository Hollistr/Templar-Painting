const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

openModal.addEventListener('click', () => {
    modal.showModal();
    initMap();
});

closeModal.addEventListener('click', () => {
    modal.close();
});
