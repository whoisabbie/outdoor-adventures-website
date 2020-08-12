//function expression to select elements
const selectElement = (any) => document.querySelector(any);

//open the menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//close the menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
