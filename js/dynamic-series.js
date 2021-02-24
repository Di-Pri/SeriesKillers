const url = "https://kea21-4e15.restdb.io/rest/serieskillers1";

const options = {
  headers: {
    "x-apikey": "60339c695ad3610fb5bb64e7",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => data.forEach(showMovie))
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showMovie(movie) {
  console.log(movie);
  if (movie.type === "series") {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h4").textContent = movie.title;
    copy.querySelector(".rating1").textContent = movie.rating;
    copy.querySelector(".genre1").textContent = movie.genre.join(", ");
    copy.querySelector(".age1").textContent = `${movie.age}+`;
    copy.querySelector(
      "img"
    ).src = `https://kea21-4e15.restdb.io/media/${movie.img}`;
    document.querySelector(".movie-list").appendChild(copy);
  }
}
