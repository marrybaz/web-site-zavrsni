let d = id => document.getElementById(id);
let c = className => document.getElementsByClassName(className);

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
    "Domaci ajvar od pecenih paprika",
    "Kuvani paradajz sa zacinskim biljem",
    "Slatko po receptima nasih baka",
    "Dzem od naseg voca",
    "Slatko od kupina za dobro jutro",
    "Zele do raznog voca za svaciji ukus"
];

//inicijalizacija podataka
d('slika').src=niz[0];
d('sadrzaj').innerHTML=tekst[0];
let index = 0;

function sledeci() {

    index++;
    if (index == niz.length) {
        index = 0;
    }
    d('slika').src = niz[index]; 
    d('sadrzaj').innerHTML=tekst[index];   
};

function prethodni() {
    index--;
    if (index < 0) {
        index = niz.length - 1;
    }
    d('slika').src = niz[index];
    d('sadrzaj').innerHTML=tekst[index];
};

d('desno').addEventListener('click', sledeci);
d('levo').addEventListener('click', prethodni);
d('start-stop').addEventListener('click', toggleInterval)

function toggleInterval() {
    console.log(d('start-stop').classList);    
    if (d('start-stop').classList.contains('fa-play-circle')) {
        d('start-stop').classList.replace('fa-play-circle','fa-pause-circle');
        sledeci();
        intervalId = setInterval(sledeci, 4000);
    } else {
        d('start-stop').classList.replace('fa-pause-circle','fa-play-circle');
        clearInterval(intervalId);
    }
};

document.body.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        sledeci();
    };
    if (event.keyCode == 37) {
        prethodni();
    };

});

function getInfo(e) {
    console.log(e);
}
let infos = c('info');
for (var i = 0; i < infos.length; i++) {
    infos[i].addEventListener('click', getInfo);
  }