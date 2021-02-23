const url =
  "https://kea21-4e15.restdb.io/rest/serieskillers1/6034112661889c2200003e23";

// API key 60339c695ad3610fb5bb64e7

//The API key
const options = {
  headers: {
    "x-apikey": "60339c695ad3610fb5bb64e7",
  },
};

//const mediaurl = "https://kea21-4e15.restdb.io/media/";

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data
    //console.log(data);
    handleData(data);
  })
  .catch((e) => {
    //whoops, sth went wrong
    console.log("An error occured", e.message);
  });

const mediaurl = "https://kea21-4e15.restdb.io/media/6034111f61889c2200003e21";

function handleData(tvShow) {
  console.log(tvShow);
  console.log(mediaurl);
  // make a template, grab it
  const tvShowTemplate = document.querySelector("template").content;
  //console.log(tvShowTemplate);

  // clone it
  const tvShowClone = tvShowTemplate.cloneNode(true);
  // populate with data

  tvShowClone.querySelector("p.genre").textContent = tvShow.genre;
  tvShowClone.querySelector("p.year").textContent = tvShow.year;
  tvShowClone.querySelector("p.country").textContent = tvShow.country;
  tvShowClone.querySelector("p.rating").textContent = tvShow.rating;
  tvShowClone.querySelector("p.age").textContent = tvShow.age + "+";
  tvShowClone.querySelector("p.description").textContent = tvShow.description;
  // const imgurl = mediaurl;
  tvShowClone.querySelector("img").src = mediaurl;
  tvShowClone.querySelector("img").alt = tvShow.title;
  tvShowClone.querySelector("h2").textContent = tvShow.title;

  // grab the parent element
  const daddy = document.querySelector("main");
  // append it to the DOM
  daddy.appendChild(tvShowClone);
}
