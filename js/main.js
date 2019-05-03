let d = (id) => document.getElementById(id);
let c = (className) => document.getElementsByClassName(className);

/**
 * Slider
 */

// init data
let intervalId;
let niz = [
    "images/ajvar.jpg",
    "images/kuvani-paradajz.jpg",
    "images/slatko.jpg",
    "images/dzem.jpg",
    "images/kupine-slatko.jpg",
    "images/zele.jpg"
];
let tekst = [
    "Domaći ajvar od pečenih paprika",
    "Kuvani paradajz sa zaćinskim biljem",
    "Slatko po receptima naših baka",
    "Džem od našeg voća",
    "Slatko od kupina za dobro jutro",
    "Žele do raznog voća za svačiji ukus"
];

d("img-placeholder").src = niz[0];
d("img-desc").innerHTML = tekst[0];
let index = 0;

// methods
function sledeci() {

    index++;
    if (index === niz.length) {
        index = 0;
    }
    d("img-placeholder").src = niz[index];
    d("img-desc").innerHTML = tekst[index];
}

function prethodni() {
    index--;
    if (index < 0) {
        index = niz.length - 1;
    }
    d("img-placeholder").src = niz[index];
    d("img-desc").innerHTML = tekst[index];
}

function toggleInterval() {    
    if (d("start-stop").classList.contains("fa-play-circle")) {
        d("start-stop").classList.replace("fa-play-circle", "fa-pause-circle");
        sledeci();
        intervalId = setInterval(sledeci, 4000);
    } else {
        d("start-stop").classList.replace("fa-pause-circle", "fa-play-circle");
        clearInterval(intervalId);
    }
}

// events
d("img-right").addEventListener("click", sledeci);
d("img-left").addEventListener("click", prethodni);
d("img-container").addEventListener("swiped-right", sledeci);
d("img-container").addEventListener("swiped-left", prethodni);
d("start-stop").addEventListener("click", toggleInterval);

document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 39) {
        sledeci();
    }
    if (event.keyCode === 37) {
        prethodni();
    }
});

/**
 * Products
 */

$(".info-rotate")
    .mouseover(function () {
        $("#info-" + this.id).removeClass("info-hidden").addClass("info-visible");
    })
    .mouseleave(function () {
        $("#info-" + this.id).removeClass("info-visible").addClass("info-hidden");
    });

// products modal
let s = (state, product = "", url = "") => {
    if (url !== "") {
        // fetchuj sa url-a
        d("product-title").innerHTML = product;
        fetch(url)
            .then((response) => response.json())
            .then((podatak) => {
                const pages = podatak.query.pages;
                const clanak = (Object.values(pages)[0]);//pretvara vrednosti objekta u niz
                const imgSrc = clanak.thumbnail ? clanak.thumbnail.source : "";

                d("product-title").innerHTML += `<img class="zoom" src="${imgSrc}" alt="${clanak.title}">`
                d("product-info").innerHTML = clanak.extract.substring(0, 1000) + " <span class=\"continue\"> [...]</span>";
                d("product-info").innerHTML += `<a href="${clanak.fullurl}" target="_blаnk">Otvori na wiki u novom prozoru</a>`;

            })

    }
    d("product-modal").style.display = state;
    d("overlay").style.display = state;
    if (state === "block") {
        d("content").classList.add("blurred");
    } else {
        d("content").classList.remove("blurred");
    }
}

d("close").addEventListener("click", function () {
    s("none");
});

d("overlay").addEventListener("click", function () {
    s("none");
})

let infos = c("info");
for (let i = 0; i < infos.length; i++) {
    infos[i].addEventListener("click", function (e) {
        s("block", e.target.dataset.product, e.target.dataset.url);
    });
}


/**
 *  Contact
 */

d("contact-btn").onclick = function () {
    if (d("name").value !== "") {
        // name already filled ask if another message should be sent
        if (window.confirm("Poruku ste već poslali. Da li želite da pošaljete novu poruku?")) {
            d("message").value = "";
            d("contact-modal").style.display = "block";
        }
    } else {
        // no name enetered in form, open form
        d("contact-modal").style.display = "block";

    }
}


c("close")[0].onclick = function () {
    d("contact-modal").style.display = "none";
}


window.onclick = function (event) {
    if (event.target === d("contact-modal")) {
        d("contact-modal").style.display = "none";
    }
}

$("#contact-form").submit(function (e) {
    e.preventDefault();
    this.submit();
    $("#contact-modal").hide();
});

$("#contact-form").captcha();

/**
 * Navigation
 */

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 50) {
        $("#back-2-top").fadeIn();
        $("#about-nav, #product-nav, #contact-nav").fadeIn();
        $("#scroll-down").fadeOut();
    } else {
        $("#scroll-down").fadeIn();
        $("#back-2-top").fadeOut();
        $("#about-nav, #product-nav, #contact-nav").fadeOut();
    }
});

/**
 * Map
 */

let map = L.map("map").setView([44.453857, 20.607235], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
}).addTo(map);

let njivicaIcon = L.icon({
    iconUrl: "images/logo-sm.png",
    shadowUrl: "images/logo-sm-shadow.png",
    iconSize: [60, 40], // size of the icon
    shadowSize: [60, 40], // size of the shadow
    iconAnchor: [30, 20], // point of the icon which will correspond to marker's location
    popupAnchor: [5, -15] // point from which the popup should open relative to the iconAnchor
});

L.marker([44.453857, 20.607235], { icon: njivicaIcon }).bindPopup("Njivica okupana kosmajskim suncem.").addTo(map);

/**
 * Geolocation
 */

function openPosition(position) {
    let link = "";
    if (position) {
        link = "https://maps.google.com/?saddr=" + position.coords.latitude + "," + position.coords.longitude + "&daddr=44.453857, 20.60723";
    } else {
        link = "https://maps.google.com/?daddr=44.453857, 20.60723";
    }
    window.open(link, "_blank");
}

function openDirection() {
    window.open("https://maps.google.com/?daddr=44.453857, 20.60723", "_blank");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            openPosition,
            openDirection,
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
    } else {
        alert("Geolokacija nije podržana");
    }
}

d("direction").addEventListener("click", function () {
    getLocation();
});

/**
 * Add to home screen - android
 */

// installing service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(reg){
        console.log("Prečica je postavljena!");
     }).catch(function(err) {
        console.log("Neuspelo kreiranje prečice:", err)
    });
 }

// prompt a2hs question inspiration https://github.com/mdn/pwa-examples/tree/master/a2hs
let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Korisnik je prihvatio A2HS");
        } else {
          console.log("Korisnik NIJE prihvatio A2HS");
        }
        deferredPrompt = null;
      });
  });
});

