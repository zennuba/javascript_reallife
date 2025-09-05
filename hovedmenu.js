//Hovedmenu - lavet af Svend

//array med menu-punkter
const nav = [
    "<button onclick='menuComicsShow()' class='dropbtn'>COMICS</button>",
    "<button onclick='menuAntikvariskShow()' class='dropbtn'>ANTIKVARISK</button>",
    "<button onclick='menuGamesShow()' class='dropbtn'>GAMES</button>",
    "<button onclick='menuMerchandiseShow()' class='dropbtn'>MERCHANDISE</button>",
    "<button onclick='menuUdklædningShow()' class='dropbtn'>UDKLÆDNING</button>",
    "<button onclick='menuNyhederShow()' class='dropbtn'>NYHEDER</button>",
    "<button onclick='menuTilbudShow()' class='dropbtn'>TILBUD</button>"
];

//loop der genererer menupunkterne i hovedmenu'en
for (let i = 0; i < nav.length; i++) {
  document.getElementById("menu").innerHTML += nav[i];
}

//funktioner der tilføjger .show class'en fra css til menupunkterne
function menuComicsShow () {
  document.getElementById("menu__comics").classList.toggle("show");
}

function menuAntikvariskShow () {
  document.getElementById("menu__antikvarisk").classList.toggle("show");
}

function menuGamesShow () {
  document.getElementById("menu__games").classList.toggle("show");
}

function menuMerchandiseShow () {
  document.getElementById("menu__merchandise").classList.toggle("show");
}

function menuUdklædningShow () {
  document.getElementById("menu__udklædning").classList.toggle("show");
}

function menuNyhederShow () {
  document.getElementById("menu__nyheder").classList.toggle("show");
}

function menuTilbudShow () {
  document.getElementById("menu__tilbud").classList.toggle("show");
}

//funktion der lukker en åben menu hvis man klikker udenfor den
window.addEventListener ("click", function(event) {
    
    if (!event.target.matches ('.dropbtn')) {
        var dropdownChecker = document.getElementsByClassName("dropdown__content");
        var p;
        for (p=0; p<dropdownChecker.length; p++) {
            var dropdown = dropdownChecker [p];
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }
})

//arrays med indhold for hvert menu-punkt
const comics = [
    "<a href='#'>DK COMICS</a>",
    "<a href='#'>US COMICS</a>",
    "<a href='#'>MANGA</a>",
   "<a href='#'>DVD & BLU-RAY</a>",
    "<a href='#'>BØGER</a>"
];


const antikvarisk = [
    "<a href='#'>ALBUMS</a>",
    "<a href='#'>BLADE</a>",
    "<a href='#'>DISNEY</a>",
    "<a href='#'>SUPERHELTE</a>",
    "<a href='#'>MANGA - DANSK</a>",
    "<a href='#'>MERCHANDISE</a>"
];

const games = [
    "<a href='#'>BRÆTSPIL</a>",
    "<a href='#'>ROLLESPIL</a>",
    "<a href='#'>BRUGT ROLLESPIL</a>",
    "<a href='#'>KORTSPIL</a>",
    "<a href='#'>FIGURSPIL</a>",
    "<a href='#'>HOBBY & MALING</a>"
];

const merchandise = [
    "<a href='#'>TINTIN</a>",
    "<a href='#'>STAR WARS</a>",
    "<a href='#'>MARVEL & DC</a>",
    "<a href='#'>HARRY POTTER</a>",
    "<a href='#'>UNIVERSER</a>",
    "<a href='#'>VARETYPE</a>"
];

const udklædning = [
    "<a href='#'>LIVE ROLLSPIL</a>",
    "<a href='#'>KOSTUMER</a>",
    "<a href='#'>SMINKE & EFFEKTER</a>",
    "<a href='#'>TILBEHØR & FEST</a>",
    "<a href='#'>TEMA</a>",
    "<a href='#'>HALLOWEEN</a>"
];

const nyheder = [
    "<a href='#'>COMICS</a>",
    "<a href='#'>ANTIKVARISK</a>",
    "<a href='#'>GAMES</a>",
    "<a href='#'>MERCHANDISE</a>",
    "<a href='#'>UDKLÆDNING</a>"
];

const tilbud = [
    "<a href='#'>COMICS</a>",
    "<a href='#'>ANTIKVARISK</a>",
    "<a href='#'>GAMES</a>",
    "<a href='#'>MERCHANDISE</a>",
    "<a href='#'>UDKLÆDNING</a>"
];

//loops der genererer punkterne under hvert menupunkt
for (let i = 0; i < comics.length; i++) {
  document.getElementById("menu__comics").innerHTML += comics[i];
}

for (let i = 0; i < antikvarisk.length; i++) {
  document.getElementById("menu__antikvarisk").innerHTML += antikvarisk[i];
}

for (let i = 0; i < games.length; i++) {
  document.getElementById("menu__games").innerHTML += games[i] + " ";
}

for (let i = 0; i < merchandise.length; i++) {
  document.getElementById("menu__merchandise").innerHTML += merchandise[i];
}

for (let i = 0; i < udklædning.length; i++) {
  document.getElementById("menu__udklædning").innerHTML += udklædning[i];
}

for (let i = 0; i < nyheder.length; i++) {
  document.getElementById("menu__nyheder").innerHTML += nyheder[i];
}

for (let i = 0; i < tilbud.length; i++) {
  document.getElementById("menu__tilbud").innerHTML += tilbud[i];
}






//Kilder & inspiration:
//https://www.w3schools.com/howto/howto_js_dropdown.asp - dropdown menu


//Brug af chatGPT:

//03/09/2025
//Prompt (html, css og javascript filer vedhæftet) - "Hejsa. Jeg skal bruge hjælp til noget kodning. Når jeg loader mit html dokument, og prøver at trykke på comics, for jeg følgende fejlmeddelelse i consol log: uncaught referenceerror: myfunction is not defined jeg kan ikke helt gennemskue hvorfor myFunction ikke er defineret."
//Resultat - jeg havde overset at jeg forskellige steder havde skrevet hhv. myfunction og myFunktion, og problemet blev løst. 