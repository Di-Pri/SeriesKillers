window.addEventListener("load", start);

let number = 1;

let url =
  "https://kea21-4e15.restdb.io/rest/serieskillers1?q={}&sort=rating&dir=-1";

const mediaurl = "https://kea21-4e15.restdb.io/media/";

const options = {
  headers: {
    "x-apikey": "60339c695ad3610fb5bb64e7",
  },
};

function start() {
  fetch(url, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      handleData(data);
    });
  number = 1;
}

function handleData(data) {
  data.forEach(showFilm);
}

function showFilm(film) {
  console.log(film);
  console.log(film._id);

  const template = document.querySelector("#ratingTemplate").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".poster").src = mediaurl + film.img + "?s=t";
  clone.querySelector(".poster").alt = film.title;

  clone.querySelector("p").textContent = `${number++}.`;

  clone.querySelector(".rating a").textContent = film.title;
  clone.querySelector(
    ".rating a"
  ).href = `individual.html?id=${film._id}&previousPage=Ranking`;

  clone.querySelector("p:nth-of-type(3)").textContent = film.rating;

  document.querySelector(".wrap").appendChild(clone);
}

document.querySelector("#mov").addEventListener("click", showMov);
document.querySelector("#ser").addEventListener("click", showSer);
document.querySelector("#all").addEventListener("click", showAll);

function showMov() {
  //{"field" : {"$in" : [value1, value2, ...]}}
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"type" : {"$in" : ["film"]}}&sort=rating&dir=-1`;
  console.log(url);
  document.querySelector("section.wrap").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Movies";
  document.querySelector("h2 span").textContent = "Movies";
}

function showSer() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={"type" : {"$in" : ["series"]}}&sort=rating&dir=-1`;
  console.log(url);
  document.querySelector("section.wrap").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "Series";
  document.querySelector("h2 span").textContent = "Series";
}

function showAll() {
  url = `https://kea21-4e15.restdb.io/rest/serieskillers1?q={}&sort=rating&dir=-1`;
  console.log(url);
  document.querySelector("section.wrap").innerHTML = "";
  start();
  document.querySelector("#genre-button span:nth-of-type(1)").textContent =
    "All TV shows";
  document.querySelector("h2 span").textContent = "TV shows";
}
