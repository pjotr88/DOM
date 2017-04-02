'use strict';

//var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienną z dugim linkiem
//
//function alarm(e) {
//    e.preventDefault(); //zapobiegamy domyślnej akcji
//    console.log('kliknięto kolejny linki');
//    
//    console.log(e.type); // wywołuję typ eventu, jeśli chce zobaczyć sam event to wystarczy wpisać (e)
//    
//}
//
//secondLink.onclick = alarm // wywołujemy funckję alarmu() na drugim linku po kliknięciu. 
//
//var thirdLink = document.getElementsByTagName('a')[2]; // tworzymy zmienną z trzecim linkiem
//
//thirdLink.addEventListener('click', alarm); // wywolujemy funkcje alarm() na trzecim linku po kliknieciu za pomocą event Listenera
//
//thirdLink.removeEventListener('click', alarm);
//
//
///*
//efekt powiększania napisu po najechaniu
//*/
//
//var mainHeader = document.getElementById('main-header');
////przypisujemy naglowek strony do zmiennej
//console.log(mainHeader);
//
//function resize(e) {     //przekazujemy zdarzenia jako paramentr funkcji
//    if (e.type == 'mouseover'){// sprawdzanie typu zdarzenia
//        mainHeader.style.fontSize = "70px"; // zmień wielkość fonta po najechaniu
//        
//    }else {
//        mainHeader.style.fontSize = "inherit"; //przywroc domyślną wielkość po zjechaniu
//    }
//    
//}
//
//mainHeader.onmouseover = resize; // wywołanie funkcji resize na evencie mouseover
//mainHeader.onmouseout = resize; // wywolanie ufnkcji resize na evencie mouseout
    

/*
zatrzymanie propaginacji
*/

function klikHeader () {
    console.log("kliknąłeś w header");
    
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikH1(e) {
    e.stopPropagation(); // Odkomentować, żeby pokazać zatrzymanie propaginacji. 
    console.log("kliknąłeś w h1");
    
}

document.getElementsByTagName('h1')[0].onclick = klikH1; // wywołaj funkcję na elemencie H1











