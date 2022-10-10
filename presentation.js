const presentationRow = document.querySelector(".presentation__row");
console.log(presentationRow);
const presentationImg = document.querySelector(".presentation__img");
const presentationText = document.querySelector(".presentation__text");

const setLayout = () => {
  if (window.innerWidth < 768) {
    presentationImg.classList.add("order-first");
    presentationImg.classList.remove("img-md-width");

    presentationText.classList.add("order-last");
    presentationText.classList.remove("text-md-width");

    presentationRow.classList.remove("row-md-justify");
  } else {
    presentationImg.classList.remove("order-first");
    presentationImg.classList.add("img-md-width");

    presentationText.classList.remove("order-last");
    presentationText.classList.add("text-md-width");

    presentationRow.classList.add("row-md-justify");
  }
};

setLayout()

window.addEventListener("resize",() => setLayout()
)

