let description = document.getElementById("description");
let button = document.querySelector("#show-description");

button.onclick = function() {
  description.textContent = "This is the product description.";
};
