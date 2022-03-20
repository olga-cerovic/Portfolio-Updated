const hamburgeMenuDiv = document.querySelector(".navigation-menu-mobile");
const hamLines = document.querySelectorAll(".ham-line");

const handleHamburgerMenuButton = () => {
  if (hamburgeMenuDiv.classList.contains("notShow")) {
    hamburgeMenuDiv.classList.remove("notShow");
    hamburgeMenuDiv.classList.add("show");
    hamLines.forEach((hamLine) => (hamLine.style.backgroundColor = "#ffc744"));
  } else {
    hamburgeMenuDiv.classList.remove("show");
    hamburgeMenuDiv.classList.add("notShow");
    hamLines.forEach((hamLine) => (hamLine.style.backgroundColor = "#000"));
  }

  console.log("ndfdsnmndmfnmsd");
};

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    hamburgeMenuDiv.classList.add("notShow");
    hamburgeMenuDiv.classList.remove("show");
  }
});

hamburgeMenuDiv.addEventListener("click", handleHamburgerMenuButton);

let changeHamburgerIcon = function (icon) {
  icon.classList.toggle;
};
