const detailsButton = document.getElementById("detail-submit-btn");

detailsButton.addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");
  document.getElementById("buyer-info").innerText = buyerDetails.value;
  buyerDetails.value = "";
});

const addProductBtn = document.getElementById("add-details-btn");

