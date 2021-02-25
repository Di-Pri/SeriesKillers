const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const previousPage = urlParams.get("previousPage");
console.log(previousPage);
console.log(id);

const url = "https://kea21-4e15.restdb.io/rest/serieskillers1/" + id;

// x-files id 602feda107b2ac380001c7fe
// south park id 60311ec961889c22000003c6
// game of thrones id 60318ff661889c2200000abb

// API key 60339c695ad3610fb5bb64e7

//The API key
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
  .then((data) => {
    //we have the data
    console.log(data);
    handleData(data);
  })
  .catch((e) => {
    //whoops, sth went wrong
    console.log("An error occured", e.message);
  });

const mediaurl = "https://kea21-4e15.restdb.io/media/";

function handleData(tvShow) {
  document.querySelector("title").textContent = tvShow.title;
  if (previousPage == "Home") {
    document.querySelector("ul.breadcrumbs li:nth-of-type(2)").style.display =
      "none";
  }
  document.querySelector(
    "ul.breadcrumbs .second_crumb"
  ).textContent = previousPage;
  document.querySelector("ul.breadcrumbs .second_crumb").href =
    previousPage.toLowerCase() + ".html";
  console.log(document.querySelector("ul.breadcrumbs .second_crumb").href);
  document.querySelector("ul.breadcrumbs .third_crumb").textContent =
    tvShow.title;
  // make a template, grab it
  const tvShowTemplate = document.querySelector("template").content;

  // clone it
  const tvShowClone = tvShowTemplate.cloneNode(true);
  // populate with data

  tvShowClone.querySelector("p.genre").textContent = tvShow.genre.join(", ");
  tvShowClone.querySelector("p.year").textContent = tvShow.year;
  tvShowClone.querySelector("p.country").textContent = tvShow.country;
  tvShowClone.querySelector("p.rating").textContent = tvShow.rating;
  tvShowClone.querySelector("p.age").textContent = tvShow.age + "+";
  tvShowClone.querySelector("p.description").textContent = tvShow.description;
  const imgurl = mediaurl + tvShow.imgind[0];
  tvShowClone.querySelector("img").src = imgurl;
  tvShowClone.querySelector("img").alt = tvShow.title;
  tvShowClone.querySelector("h2").textContent = tvShow.title;

  // grab the parent element
  const daddy = document.querySelector("main");
  // append it to the DOM
  daddy.appendChild(tvShowClone);
}
