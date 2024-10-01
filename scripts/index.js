const initialCards = [
{
  name: "Sakura Tree",
  link: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  name: "Japanese Signs",
  link: "https://images.unsplash.com/photo-1490761668535-35497054764d?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  name: "A Pagoda",
  link: "https://images.unsplash.com/photo-1526427158867-98ee4ba58d5a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  name: "Sushi Spot",
  link: "https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  name: "Mt. Fuji",
  link: "https://images.unsplash.com/photo-1528360602530-1b4563dcc244?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  name: "Shibuya Crossing",
  link: "https://images.unsplash.com/photo-1491192003880-23f2e4a9528d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
]


const profileEditButton = document.querySelector(".profile__edit");
const modalEdit = document.querySelector("#edit-profile-modal");
const profileCloseButton = editModal.querySelector(".modal__close");

function openModal() {
  modalEdit.classList.add("modal_opened");
}

function closeModal()  {
  modalEdit.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);
profileCloseButton.addEventListener("click", closeModal);