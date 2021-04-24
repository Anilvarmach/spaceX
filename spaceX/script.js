/**********************                  
 *       ABOUT US     *
 ******************** */ 
fetch('https://api.spacexdata.com/v4/company')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        title.innerHTML = data.name;
        summar.innerHTML = data.summary;
        founderName.innerHTML = data.founder;
        foundedYear.innerHTML = data.founded;
        websiteLink.setAttribute('href', `${data.links.website}`)
        address.innerHTML =`<i class="fas fa-map-marker-alt"></i> ${data.headquarters.address}`;
        city.innerHTML = `<i class="fas fa-city"></i> ${data.headquarters.city}`;
        state.innerHTML = `<i class="fas fa-flag-usa"></i> ${data.headquarters.state}`;
    }).catch((err) => {
        console.log(err)
    })

let title = document.querySelector("#Title");
let summar = document.querySelector('#summary');
let founderName = document.querySelector("#founder-name");
let foundedYear = document.querySelector("#founded-year");
let websiteLink = document.querySelector('#website-link');

let address = document.querySelector('#address');
let city = document.querySelector('#city');
let state = document.querySelector('#state');



/**********************                  
 *       CREW TEAM    *
 ******************** */

 function crewTeam(members) {
    data = members;
    data.forEach((obj) => {
      var col = createBootstrapCard("div", "col-lg-3 col-md-6 col-sm-12 mb-4 ");
  
      var card = createBootstrapCard("div", "card crew-card h-100");
  
        var cardBody = createBootstrapCard("div", "card-body");
        
        var img = createBootstrapCard("i", " fas fa-user-astronaut astronaut");
  
      var h4 = createBootstrapCard("h4", "card-title");
      h4.innerHTML = `${obj.name}`;
  
      var pTag1 = createBootstrapCard("p", "card-text");
      pTag1.innerHTML = `<span>Agency:</span> ${obj.agency}`;
  
      var pTag2 = createBootstrapCard("p", 'card-text');
      pTag2.innerHTML = `<span>Status:</span> ${obj.status.toUpperCase()}`;
  
     
      cardBody.append(img,h4, pTag1, pTag2);
  
      var cardFooter = createBootstrapCard("div", "card-footer");
        var a = createBootstrapCard('a', 'btn btn-outline-dark');
        a.innerHTML =`<i class="fab fa-wikipedia-w"></i>  WIKIPEDIA`;

      
        a.setAttribute('target', '_blank');
        a.setAttribute('href', `${obj.wikipedia}`);
      
     
      
      cardFooter.append(a)
      card.append(cardBody, cardFooter);
      col.append(card);
    row.append(col);
    });
  }
  
let row = document.querySelector('#crew-team');
let createBootstrapCard = function(elem, elemCalss = "", elemId = "") {
    let element = document.createElement(elem);
    element.setAttribute('class', elemCalss);
    element.setAttribute('id', elemId);
    return element;
}
   

fetch('https://api.spacexdata.com/v4/crew')
    .then((res) => res.json())
    .then((data) => {
        crewTeam(data);
        console.log(data);
    }).catch((err) => {
        console.log(err)
    })


    
/**********************                  
 *    LAUNCHES        *
 ******************** */

// LATEST LAUNCHES

let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
  
 fetch('https://api.spacexdata.com/v4/launches/latest')
 .then((res) => res.json())
     .then((data) => {
         Title.innerHTML = data.name;
         summary.innerHTML = data.details;
         let inDate = new Date(data.date_local)
         date.innerHTML = ` ${inDate.getDate()} ${monthNames[inDate.getMonth()]} ${inDate.getFullYear()}`
         article.setAttribute('href', `${data.links.article}`)
         youtube.setAttribute('href', `${data.links.webcast}`)
         wikipedia.setAttribute('href',`${data.links.wikipedia}`)
         console.log(data);
 }).catch((err) => {
     console.log(err)
 })

 let Title = document.querySelector("#Title-latest");
 let summary = document.querySelector('#summary-latest');
let date = document.querySelector('#date');
let article = document.querySelector('#article-link');
let youtube = document.querySelector('#youtube-link');
let wikipedia = document.querySelector('#wikipedia-link');
