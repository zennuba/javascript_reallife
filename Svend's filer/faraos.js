//Menu'en

//arrays med indhold for hvert menu-punkt
const comics = ["DK COMICS","US COMICS","MANGA","DVD & BLU-RAY","BØGER"];
const antikvarisk = ["ALBUMS","BLADE","DISNEY","SUPERHELTE","MANGA - DANSK","MERCHANDISE"];
const games = ["BRÆTSPIL","ROLLESPIL","BRUGT ROLLESPIL","KORTSPIL","FIRGURSPIL","HOBBY & MALING"];
const merchandise = ["TINTIN","STAR WARS","MARVEL & DC","HARRY POTTER","UNIVERSER","VARETYPE"];
const udklædning = ["LIVE ROLLESPIL","KOSTUMER","SMIKE & EFFEKTER","TILBEHØR & FEST","TEMA","HALLOWEEN"];
const nyheder = ["COMICS","ANTIKVARISK","GAMES","MERCHANDISEd","UDKLÆDNING"];
const tilbud = ["COMICS","ANTIKVARISK","GAMES","MERCHANDISEd","UDKLÆDNING"];

//array med menu-punkter
const nav = [
    "<button onclick='myfunction()' class='dropbtn'>COMICS</button>",
    "<button onclick='myfunction()' class='dropbtn'>ANTIKVARISK</button>",
    "<button onclick='myfunction()' class='dropbtn'>GAMES</button>",
    "<button onclick='myfunction()' class='dropbtn'>MERCHANDISE</button>",
    "<button onclick='myfunction()' class='dropbtn'>UDLÆDNING</button>",
    "<button onclick='myfunction()' class='dropbtn'>NYHEDER</button>",
    "<button onclick='myfunction()' class='dropbtn'>TILBUD</button>"
];

//loop der genererer menupunkterne
for (let i = 0; i < nav.length; i++) {
  document.getElementById("menu").innerHTML += nav[i] + " ";
}

function myFunction() {
  document.getElementById("menu__comics").classList.toggle("show");
}






//Kilder & inspiration:
//https://www.w3schools.com/howto/howto_js_dropdown.asp - dropdown menu

