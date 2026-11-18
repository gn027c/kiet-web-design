/* Accessible Gallery JavaScript by Nguyen Kiet */
function initGallery() {
  console.log("initGallery loaded successfully - setting up keyboard accessibility.");
  const images = document.querySelectorAll(".preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    images[i].addEventListener("focus", function() {
      upDate(this);
    });
    images[i].addEventListener("blur", function() {
      unDo();
    });
  }
}

function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over or Tab through an image below to display here.";
}
