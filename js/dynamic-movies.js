window.addEventListener("load", start);
let url = "https://kea21-4e15.restdb.io/rest/serieskillers1";
const options = {
  headers: {
    "x-apikey": "60339c695ad3610fb5bb64e7",
  },
};

function start() {
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
}

function showMovie(movie) {
  console.log(movie);
  if (movie.type === "film") {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(
      ".movies a"
    ).href = `individual.html?id=${movie._id}&previousPage=Movies`;
    copy.querySelector("h4").textContent = movie.title;
    copy.querySelector(".rating1").textContent = movie.rating;
    copy.querySelector(".genre1").textContent = movie.genre.join(", ");
    copy.querySelector(".age1").textContent = movie.age;
    copy.querySelector(
      "img"
    ).src = `https://kea21-4e15.restdb.io/media/${movie.img}`;
    document.querySelector(".movie-list").appendChild(copy);
  }
}

document.querySelector("#action").addEventListener("click", showAction);
document
  .querySelector("#documentary")
  .addEventListener("click", showDocumentary);
// document.querySelector("#mystery").addEventListener("click", showMystery);
document.querySelector("#adventure").addEventListener("click", showAdventure);
document.querySelector("#drama").addEventListener("click", showDrama);
document.querySelector("#romance").addEventListener("click", showRomance);
document.querySelector("#animation").addEventListener("click", showAnimation);
document.querySelector("#family").addEventListener("click", showFamily);
document.querySelector("#sci-fi").addEventListener("click", showScifi);
document.querySelector("#comedy").addEventListener("click", showComedy);
document.querySelector("#fantasy").addEventListener("click", showFantasy);
document.querySelector("#thriller").addEventListener("click", showThriller);
document.querySelector("#crime").addEventListener("click", showCrime);
document.querySelector("#horror").addEventListener("click", showHorror);
// console.log("after eventlistener");

function showAction() {
  //{"field" : {"$in" : [value1, value2, ...]}}
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Action"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Action";
}

function showDocumentary() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Documentary"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Documentary";
}

// function showMystery() {
//   url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Mystery"]}}`;
//   console.log(url);
//   document.querySelector("section.movie-list").innerHTML = "";
//   start();
//   document.querySelector("#genre-button span:nth-of-type(1)").textContent =
//     "Mystery";
// }

function showAdventure() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Adventure"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Adventure";
}

function showDrama() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Drama"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Drama";
}

function showRomance() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Romance"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Romance";
}

function showAnimation() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Animation"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Animation";
}

function showFamily() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Family"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Family";
}

function showScifi() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Sci-fi"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Sci-fi";
}

function showComedy() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Comedy"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Comedy";
}

function showFantasy() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Fantasy"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Fantasy";
}

function showThriller() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Thriller"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Thriller";
}

function showCrime() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Crime"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Crime";
}

function showHorror() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"genre" : {"$in" : ["Horror"]}}`;
  console.log(url);
  document.querySelector("section.movie-list").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Horror";
}
