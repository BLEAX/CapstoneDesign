//dog.js
document.addEventListener("DOMContentLoaded", () => {
  const dogLink = document.getElementById("dog-link");
  const dogContainer = document.getElementById("dog-content-container");

  dogLink.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        dogContainer.innerHTML = "";
        const dogImage = document.createElement("img");
        dogImage.src = data.message;
        dogImage.alt = "Random Dog Image";
        dogContainer.appendChild(dogImage);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        dogContainer.innerHTML = "";
        const errorText = document.createElement("p");
        errorText.textContent =
          "Sorry, we couldn't load a dog image at this moment.";
        dogContainer.appendChild(errorText);
      });
  });
});
