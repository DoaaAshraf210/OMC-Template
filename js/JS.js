//  <input type="text" placeholder="Search" />
let divSearch = document.querySelector(".search");
let iconSearch = document.querySelector(".search i");
iconSearch.addEventListener("click", function (e) {
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search";
  divSearch.appendChild(input);
  iconSearch.style.display = "none";
});

//------------------------------------
let liBullets = document.querySelectorAll(".landing .bullets li");
liBullets.forEach((li) => {
  li.addEventListener("click", function (e) {
    liBullets.forEach((li) => {
      li.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});
//-------------------------------
let menu = document.querySelector(".menu");
let links = document.querySelector(".header .container .links");
menu.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  links.classList.toggle("open");
});
////--------------------------------------------
let divImgs = document.querySelectorAll(".testmonials  .avatars .image");
var infoPerson = document.querySelector(".testmonials .info-person");
let beforeEnployeeHeading = document.querySelector(".testmonials .employee");
let divHeading = document.querySelectorAll(".testmonials .image h5");

divImgs.forEach((divImg) => {
  divImg.addEventListener("click", (e) => {
    divImgs.forEach((i) => {
      i.classList.remove("active");
    });

    divImg.classList.add("active");

    infoPerson.innerHTML = divImg.firstElementChild.innerHTML;
  });
});

///-------------------------------------------links section
let allLinks = document.querySelectorAll(".header .container .links li");
console.log(allLinks);
allLinks.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
