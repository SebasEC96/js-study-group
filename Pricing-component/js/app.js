const changeModality = () => {
  const element = document.getElementById("payment-modality").checked;
  const basicPrice = document.getElementById("basic-price");
  const professionalPrice = document.getElementById("professional-price");
  const masterPrice = document.getElementById("master-price");

  if (!element) {
    basicPrice.innerHTML = "<span>&dollar;</span>199.99";
    professionalPrice.innerHTML = "<span>&dollar;</span>249.99";
    masterPrice.innerHTML = "<span>&dollar;</span>399.99";
  } else {
    basicPrice.innerHTML = "<span>&dollar;</span>19.99";
    professionalPrice.innerHTML = "<span>&dollar;</span>24.99";
    masterPrice.innerHTML = "<span>&dollar;</span>39.99";
  }
};
