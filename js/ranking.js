const url =
  "https://kea21-4e15.restdb.io/rest/serieskillers1?q={}&sort=rating&dir=-1";

const mediaurl = "https://kea21-4e15.restdb.io/media/";

let number = 1;

const options = {
  headers: {
    "x-apikey": "60339c695ad3610fb5bb64e7",
  },
};

fetch(url, options)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    handleData(data);
  });

function handleData(data) {
  data.forEach(showFilm);
}

function showFilm(film) {
  console.log(film);

  const template = document.querySelector("#ratingTemplate").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".poster").src = mediaurl + film.img + "?s=t";
  clone.querySelector(".poster").alt = film.title;

  clone.querySelector("p").textContent = `${number++}.`;

  clone.querySelector(".rating a").textContent = film.title;
  clone.querySelector(".rating a").href = `individual.html?title=${film.title}`;

  clone.querySelector("p:nth-of-type(3)").textContent = film.rating;

  document.querySelector("main").appendChild(clone);
}
