    const menuItems = ["Hladna Predjela ", "Topla Predjela ", "Lagani Obroci ", "Supe i Čorbe ", "Tradicionalno Srpsko ", "Specijaliteti restorana "];

    const niz = [
        {
            kategorija: 'Hladana predjela',
            detalji: [
                {ime: 'Paprika u pavlaci', opis: '100g', cena: 390}, 
                {ime: 'Zlatarski sir', opis: '100g', cena: 390}, 
                {ime: 'Kajmak sirni namaz, urnebes', opis: 'po želji gosta', cena: 500}, 
                {ime: 'Kravlji sir sa tartufima', opis: '100g', cena: 1250}, 
                {ime: 'Njeguška pršuta', opis:'100g', cena: 1350}, 
                {ime: 'Govedja pečenica', opis:'100g', cena: 1390}
            ]
        } ,
        {
            kategorija: 'Topla Predjela',
            detalji: [
                {ime: 'Proja sa duvan čvarcima i kajmakom', opis: '150g', cena: 460}, 
                {ime: 'Rolovane suve šljive u slanini na rukoli', opis: '150g', cena: 520}, 
                {ime: 'Pohovana paprika punjena sirom', opis: '200g', cena: 550}, 
                {ime: 'Pržena pileća džigerica sa karamelizovanim crvenim lukom', opis: '250g', cena: 750}, 
                {ime: 'Sarmice od telećeg mesa sa aromatičnim mileramom', opis:'100g', cena: 850}, 
                {ime: 'Domaće flekice sa vrganjima i biftekom', opis:'300g', cena: 920},
                {ime: 'Grilovani kozji sir na namazu od pečene paprike i belog luka', opis:'200g', cena: 920},
                {ime: 'Miks pečuraka na žaru', opis:'300g', cena: 920},
            ]
        } ,
        {
            kategorija: 'Lagani Obroci',
            detalji: [
                {ime: 'Salata od ćuretine sa fetom i orasima', opis: '150g', cena: 950}, 
                {ime: 'Salata od bifteka sa parmezanom i pinjolima', opis: '100g', cena: 1050}, 
                {ime: 'Hladna teletina sa krem prelivom od tunjevine (Vitello Tonnato)', opis: '200g', cena: 1250}, 
                {ime: 'Karpaćo od bifteka', opis: '200g', cena: 1250}, 
                {ime: 'Tatar biftek', opis:'200g', cena: 1580}               
            ]
        } ,
        {
            kategorija: 'Supe i Čorbe',
            detalji: [
                {ime: 'Krem bela čorba od teletine i pilećih grudi', opis: '100g', cena: 390}, 
                {ime: 'Pileća supa sa domaćim rezancima', opis: '100g', cena: 385}, 
                {ime: 'Ljuto - kisela paradajz čorba sa domaćim flekicama i dimljenim sirom', opis: '150g', cena: 435}
            ]
        } ,
        {
            kategorija: 'Tradicionalno Srpsko',
            detalji: [
                {ime: 'Srpski miks roštilj za dve osobe', opis: '440g', cena: 1650}, 
                {ime: 'Ćevapi', opis: '8 komada porcija', cena: 820}, 
                {ime: 'Pljeskavica', opis: '250g', cena: 820}, 
                {ime: 'Dimljeno špic rebro', opis: '250g', cena: 1150}, 
                {ime: 'Zapečene lovačke šnicle sa dimljenim sirom', opis:'300g', cena: 1300}, 
                {ime: 'Leskovačka mućkalica sa telećim mesom', opis:'300g', cena: 1350},
                {ime: 'Zapečena dimljena butkica sa domaćom testeninom', opis:'400g', cena: 1650},
                {ime: 'Tradicionalna karadjordjeva šnicla od telećeg mesa', opis:'400g', cena: 1750}
            ]
        } ,
        {
            kategorija: 'Specijaliteti restorana',
            detalji: [
                {ime: 'Teleći kotleti', opis: '500g', cena: 1600}, 
                {ime: 'Jagnjeći kotleti', opis: '400g', cena: 1950}, 
                {ime: 'Biftek taljata sa tartufima', opis: '300g', cena: 2650}, 
                {ime: 'Pileći file na žaru', opis: '300g', cena: 1050}, 
                {ime: 'Medaljoni od filea u sosu od višanja i vina', opis:'300g', cena: 1550}, 
                {ime: 'Gurmanski stek', opis:'400g', cena: 1570}
            ]
        } 
    ];
    let greska = $('#greska .wrapper').hide();
    let uspesno = $('#uspesno .wrapper').hide();
   

 $(document).ready(function(){  
    special();
    header();
    about();
    ispis();
    slick();
    datum();
    
    $('#potvrdi').click(function(){
        provera();        
    });

});

function header(){
    const navItems = ["Početak","Naši specijaliteti", "O nama", "Meni", "Kontakt"];
    const target = ["menuTop", "tOurSpecials", "tAboutUs", "tMenu", "formFooter"];
    let navUl = document.querySelector("#navigation");
    
    for( i in navItems ){
        navUl.innerHTML += '<li><a href="#'+ target[i] +'">' + navItems[i] + '</a></li>';
    }

    const menuOnScroll = document.querySelector(".menu");
    
    document.addEventListener("scroll", () => {
    
        if(window.pageYOffset > 650){
            menuOnScroll.classList.add("menuColorChange")
        }
        else
            menuOnScroll.classList.remove("menuColorChange");
    
    });
}

function special(){
    let specialsList = [{ime: "Gurmanski stek", slika: "img/1.png", opis: "Stek punjen dimljenim sirom i pršutom, preliven sosom od paprike i pečuraka."},
                        {ime: "Pileći file na žaru", slika: "img/2.jpg", opis: "File punjen punomasnim sirom sa maslinama i salsom od paradajza."},
                        {ime: "Jagnjeći kotleti", slika: "img/3.jpg", opis: "Servirani na testenini sa tartufima zajedno sa prženim krompirom."}];

let specialsSection = document.querySelector("#specials");

for (i in specialsList){
    let tagArticle = document.createElement("article");
    tagArticle.setAttribute("class", "special");

    let tagDivSH = document.createElement("div");
    tagDivSH.setAttribute("class", "specialHeader");

    let tagH3 = document.createElement("h3");
    let textH3 = document.createTextNode(specialsList[i].ime);
    tagH3.appendChild(textH3);

    tagDivSH.appendChild(tagH3);

    let tagDivSI = document.createElement("div");
    tagDivSI.setAttribute("class", "specialImg");

    let tagImg = document.createElement("img");
    tagImg.setAttribute("src", specialsList[i].slika);
    tagImg.setAttribute("alt", specialsList[i].opis);

    tagDivSI.appendChild(tagImg);

    let tagDivSF = document.createElement("div");
    tagDivSF.setAttribute("class", "specialFooter");

    let tagP = document.createElement("p");
    let textP = document.createTextNode(specialsList[i].opis);
    tagP.appendChild(textP);

    tagDivSF.appendChild(tagP);

    tagArticle.appendChild(tagDivSH);
    tagArticle.appendChild(tagDivSI);
    tagArticle.appendChild(tagDivSF);

    specialsSection.appendChild(tagArticle);
    }
}

function about(){
    let image = document.querySelector("#aboutUsImage img");

    let i = 1;
    
    const sliderPictureList = ["img/2a.jpg", "img/5a.jpg", "img/4a.jpg", "img/3a.jpg","img/1a.jpg","img/6a.jpg","img/7a.jpg"];

    setInterval(function(){
        
        image.setAttribute("src", sliderPictureList[i]);

        image.classList.add("fadeInRight");

        setTimeout(function(){

            image.classList.remove("fadeInRight");

        },701);

        if(i == sliderPictureList.length - 1){

        i = 0;

        }
        else{
            i++;    
        }
        
    }, 3000);
}

function ispis(){  
    let ispis = "";
    for(let i of niz){
        ispis += "<div>";
        ispis += "<h4>"+i.kategorija+"</h4>";
        for(let j of i.detalji){
            ispis += `
            <div>
                <span>${j.ime}</span><span>${j.cena},00 RSD</span>
            </div>
                <p>${j.opis}</p>
                
            `;
        }
        ispis += "</div>";

    }

    $("#menuSection .wrapper").html(ispis);
}

function slick(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:1500,
        arrows:true,
        centerMode:true,
        slidesToShow:4,
        slidesToScroll:1
        });
}

function provera(){
    let ispis = "";

    let brojGresaka = 0;

    let imeVrednost = $('#ime').val();
    let imeRe = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    
    let prezimeVrednost = $('#prezime').val();
    let prezimeRe = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    
    let telefonVrednost = $('#telefon').val();
    let telefeonRe = /^\+381\ 60\ [0-9]{6,7}$/;
    
    let emailVrednsot = $('#email').val();
    let emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    let datumVrednost = $('#datum').val();
    
    let dIzabrano = new Date(datumVrednost);
    let dTrenutno = new Date();
     
    let trenutniDatumMs = dTrenutno.getTime();
    let izabraniDatumMs = dIzabrano.getTime();
    
    let plusPetDana = trenutniDatumMs + 432000000;

    let brojgostijuVrednost = $('#brojGostiju').val();

    if(imeRe.test(imeVrednost)){
        greska.hide();
    }
    else{  
        greska.show();
        imeVrednost = $('#ime').val(""); 
        ispis += "<p>Ime NE SME da sadrži brojeve, ostane prazno, sadrži specijalne karaktere ili da počinje malim slovom.</p>";  
        greska.html(ispis); 
        brojGresaka++;   
    }

    if(prezimeRe.test(prezimeVrednost)){
        greska.hide();
    }
    else{
        prezimeVrednost = $('#prezime').val("");
        greska.show();
        ispis +="<p>Prezime NE SME da sadrži brojeve, ostane prazno, sadrži specijalne karaktere ili da počinje malim slovom.</p>";
        greska.html(ispis);
        brojGresaka++;  
    }

    if(telefeonRe.test(telefonVrednost)){
        greska.hide();
    }

    else{
        telefonVrednost = $('#telefon').val("");
        greska.show();
        ispis +="<p>Telefon mora biti u formatu: +381 xx xxxxxxx.</p>";
        greska.html(ispis);
        brojGresaka++;  
    }

    if(emailRe.test(emailVrednsot)){
        greska.hide();
    }
    else{
        telefonVrednost = $('#email').val("");
        greska.show();
        ispis +="<p>Email je obavezno polje i mora biti u formatu: primer@mail.com.</p>";
        greska.html(ispis);
        brojGresaka++;  
    }

    if(plusPetDana < izabraniDatumMs || trenutniDatumMs > izabraniDatumMs || datumVrednost == ""){
        greska.show();
        datumVrednost = $('#datum').val(""); 
        ispis += "<p>Izaberite sutrašnji datum ili 5 dana unapred.</p>";  
        greska.html(ispis); 
        brojGresaka++; 
    }
    else{
        greska.hide();
    }

    if(brojgostijuVrednost > 0){
        greska.hide();
    }
    else{
        brojgostijuVrednost = $('#brojGostiju').val("");
        greska.show();
        ispis +="<p>Broj ljudi mora biti veći od 0.</p>";
        greska.html(ispis);
        brojGresaka++;  
    }

    if(brojGresaka == 0){
        uspesno.show();
        ispis+="<p>Uspesno ste rezervisali mesto. Vidimo se!</p>";
        uspesno.html(ispis);

    }
    else{
        uspesno.hide();
        greska.show();    
    }
}
