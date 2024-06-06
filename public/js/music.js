//music.js
document.addEventListener("DOMContentLoaded", () => {
  const musicLink = document.getElementById("music-link");
  const musicContainer = document.getElementById("music-contend-container");

  musicLink.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("https://api.spotify.com/v1/recommendations/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        musicContainer.innerHTML = "";
        const musicText = document.createElement("p");
        jokeText.textContent = data.music;
        musicContainer.appendChild(musicText);
      })
      .catch((error) => {
        console.error("Error fetching the music:", error);
        musicContainer.innerHTML = "";
        const errorText = document.createElement("p");
        errorText.textContent =
          "Sorry, we couldn't load a music at this moment.";
        musicContainer.appendChild(errorText);
      });
  });
});
