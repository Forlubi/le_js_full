// function activateGallery() {
//   alert("Hello from the gallery file!");
// }

// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  // get all thumbnail imgs
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  // get gallery photo img
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Change which image is current.
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
