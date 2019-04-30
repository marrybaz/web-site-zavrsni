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
d('slika').src = niz[0];
d('sadrzaj').innerHTML = tekst[0];
let index = 0;

function sledeci() {

    index++;
    if (index == niz.length) {
        index = 0;
    }
    d('slika').src = niz[index];
    d('sadrzaj').innerHTML = tekst[index];
};

function prethodni() {
    index--;
    if (index < 0) {
        index = niz.length - 1;
    }
    d('slika').src = niz[index];
    d('sadrzaj').innerHTML = tekst[index];
};

d('desno').addEventListener('click', sledeci);
d('levo').addEventListener('click', prethodni);
d('start-stop').addEventListener('click', toggleInterval)

function toggleInterval() {
    console.log(d('start-stop').classList);
    if (d('start-stop').classList.contains('fa-play-circle')) {
        d('start-stop').classList.replace('fa-play-circle', 'fa-pause-circle');
        sledeci();
        intervalId = setInterval(sledeci, 4000);
    } else {
        d('start-stop').classList.replace('fa-pause-circle', 'fa-play-circle');
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


$(".info-rotate")
    .mouseover(function () {
        $("#info-" + this.id).removeClass("info-hidden").addClass("info-visible");
    })
    .mouseleave(function () {
        $("#info-" + this.id).removeClass("info-visible").addClass("info-hidden");
    });

// products modal
let s = (state, product = '', url = '') => {
    if (url !== '') {
        // fetchuj sa url-a
        d('product-title').innerHTML = product;
        fetch(url)
        .then(response => response.json())
        .then(podatak => {
            const pages = podatak.query.pages;
            const clanak = (Object.values(pages)[0]);//pretvara vrednosti objekta u niz
            const imgSrc = clanak.thumbnail ? clanak.thumbnail.source : '';
            
            d('product-title').innerHTML += `<img class="zoom" src="${imgSrc}" alt="${clanak.title}">`
            d('product-info').innerHTML = clanak.extract.substring(0,1000) + ' <span class="continue"> [...]</span>';
            d('product-info').innerHTML +=`<a href="${clanak.fullurl}" target="_blаnk">Otvori na wiki u novom prozoru</a>`;

        })        
        
    }
    d('product-modal').style.display = state;
    d('overlay').style.display = state;
    if (state === 'block') {
        d('content').classList.add('blurred');
    } else {
        d('content').classList.remove('blurred');
    }
}

d('close').addEventListener('click', function () {
    s('none');
});

d('overlay').addEventListener('click', function (event) {
    s('none');
})

let infos = c('info');
for (let i = 0; i < infos.length; i++) {
    infos[i].addEventListener('click', function (e) {
        s('block', e.target.dataset.product, e.target.dataset.url);
    });
}

//open contact modal

d('contact-btn').onclick = function () {
    if (d('name').value !== '') {
        // name already filled ask if another message should be sent
        if (confirm("Poruku ste već poslali. Da li želite da pošaljete novu poruku?")) {
            d('message').value = '';
            d('contact-modal').style.display = "block";
        }
    } else {
        // no name enetered in form, open form
        d('contact-modal').style.display = "block";

    }
}


c('close')[0].onclick = function () {
    d('contact-modal').style.display = "none";
}


window.onclick = function (event) {
    if (event.target == d('contact-modal')) {
        d('contact-modal').style.display = "none";
    }
}

$('#contact-form').submit(function (e) {
    e.preventDefault();
    this.submit();
    $('#contact-modal').hide();
});

$('#contact-form').captcha();

/* scrool down and to top visibility*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 50) {
        $('#back-2-top').fadeIn();
        $('#about-nav, #product-nav, #contact-nav').fadeIn();        
        $('#scroll-down').fadeOut();
    } else {
        $('#scroll-down').fadeIn();
        $('#back-2-top').fadeOut();
        $('#about-nav, #product-nav, #contact-nav').fadeOut();
    }
});

