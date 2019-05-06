# Završni rad - Web site

[Kratka beleška o autoru](https://marrybaz.github.io/prezentacija/)

Ovaj Web sajt namenjen je malim poljoprivrednim proizvođačima, stoga ovaj sajt nema više stranica i malog je obima.
Sastoji se iz nekoliko celina, a to su:

- O nama (gde su dati osnovni podaci o proizvođaču),
- Proizvodi (podaci o sirovim proizvodima datim u grid galeriji, sa informacijama, u ovom slučaju, iz wikipedije i o gotovim proizvodima predstavljenim na slajderu. Slajder je samostalno izrađen, nije gotova komponenta),
- Kontakt (osnovni podaci za kontakt sa modalnom kontakt formom).
- Mapa položaja sa navigacijom.

Korišćene su sve tri glavne tehnologije HTML, CSS (osnovni i Bootstrap) i JS (bez frejmvorka kao i jQuery). Za prikazivanje mape korišćen je [Leaflet](https://leafletjs.com/). Za CAPTCHA jQuery plugin [jQuery Captcha Basic](https://github.com/pemre/jquery-captcha-basic). Za swipe na mobilnim telefonima je korišćen [swiped-events](https://github.com/john-doherty/swiped-events).

Kako bi prezentacija bila brža na android telefonima korišćeno je keširanje kroz [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/).  Za navigaciju je iskrošćen [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

Sve je upotpunjeno sa nekoliko animacija scroll dugmićima i ikonicama za navigaciju, kako bi se olakšalo korišćenje sajta na mobilnim uređajima.

[![validacija](https://img.shields.io/badge/w3c-html%20validation-success.svg)](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarrybaz.github.io%2Fweb-site-zavrsni%2F)
[![validacija](https://img.shields.io/badge/w3c%20css-styles%20validation-success.svg)](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarrybaz.github.io%2Fweb-site-zavrsni%2Fcss%2Fstyles.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
[![validacija](https://img.shields.io/badge/w3c%20css-styles%20products%20validation-success.svg)](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarrybaz.github.io%2Fweb-site-zavrsni%2Fcss%2Fstyles-products.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
[![validacija](https://img.shields.io/badge/w3c%20css-styles%20contact%20validation-success.svg)](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarrybaz.github.io%2Fweb-site-zavrsni%2Fcss%2Fstyles-contact.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
[![validacija](https://img.shields.io/badge/w3c%20css-styles%20resp%20validation-success.svg)](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarrybaz.github.io%2Fweb-site-zavrsni%2Fcss%2Fstyles-resp.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
