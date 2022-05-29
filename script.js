let listenBtn = document.getElementById("list-btn");
let closeBtn = document.getElementById("close-btn");
let mobileMenu = document.getElementById("menu-mobile");

listenBtn.onclick = () => {
  console.log("click!!");
  mobileMenu.classList.toggle("active");
}

closeBtn.onclick = () => {
  mobileMenu.classList.toggle("active");
}
