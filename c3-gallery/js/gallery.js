/* Interactive Gallery Logic by Nguyen Kiet */
function upDate(previewPic) {
  console.log("Mouse over / Focus triggered:", previewPic.alt, previewPic.src);
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("Mouse out / Blur triggered");
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
