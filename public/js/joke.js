// joke.js
document.addEventListener("DOMContentLoaded", () => {
  const jokeLink = document.getElementById("joke-link");
  const jokeContainer = document.getElementById("joke-content-container");

  jokeLink.addEventListener("click", (event) => {
    event.preventDefault(); // 링크의 기본 동작을 막음

    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        jokeContainer.innerHTML = ""; // 이전 농담을 지움
        const jokeText = document.createElement("p");
        jokeText.textContent = data.joke;
        jokeContainer.appendChild(jokeText);
      })
      .catch((error) => {
        console.error("Error fetching the joke:", error);
        jokeContainer.innerHTML = "";
        const errorText = document.createElement("p");
        errorText.textContent =
          "Sorry, we couldn't load a joke at this moment.";
        jokeContainer.appendChild(errorText);
      });
  });
});
