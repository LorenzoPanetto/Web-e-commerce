const menu = document.querySelector(".menu");
const dropDownMenu = document.querySelector(".dropdown_menu");
menu.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
};