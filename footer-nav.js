const footerData = {  
  Butikker: [
    { title: "København Comics & Potter", url: "https://www.faraos.dk/" },
    { title: "København Bræt- & Rollespil", url: "https://www.faraos.dk/" },
    { title: "København Figurspil", url: "https://www.faraos.dk/" },
    { title: "København Kortspil", url: "https://www.faraos.dk/" },
    { title: "København Manga", url: "https://www.faraos.dk/" },
    { title: "København Udklædning & Liverollespil", url: "https://www.faraos.dk/" },
    { title: "København Merchandise", url: "https://www.faraos.dk/" },
    { title: "Odense", url: "https://www.faraos.dk/" },
    { title: "Aarhus Games", url: "https://www.faraos.dk/" },
    { title: "Aarhus Comics", url: "https://www.faraos.dk/" },
    { title: "Lyngby Games", url: "https://www.faraos.dk/" },
    { title: "Lyngby Comics", url: "https://www.faraos.dk/" },
    { title: "Åbningstider", url: "https://www.faraos.dk/" },
    { title: "Faraos Cigarer Online", url: "https://www.faraos.dk/" },
    { title: "Aktiviteter", url: "https://www.faraos.dk/" },
    { title: "Kalender", url: "https://www.faraos.dk/" }
  ],
  Kundeservice: [
    { title: "Kontakt os", url: "https://www.faraos.dk/" },
    { title: "Fragt & Levering", url: "https://www.faraos.dk/" },
    { title: "Betaling", url: "https://www.faraos.dk/" },
    { title: "Reklamation og Returnering", url: "https://www.faraos.dk/" },
    { title: "Fortrolighed", url: "https://www.faraos.dk/" },
    { title: "Handelsbetingelser", url: "https://www.faraos.dk/" },
    { title: "EAN Kunder", url: "https://www.faraos.dk/" },
    { title: "Ofte stillede spørgsmål (FAQ)", url: "https://www.faraos.dk/" },
    { title: "Antikvariske tegneserier", url: "https://www.faraos.dk/" },
    { title: "Magic Købsliste", url: "https://www.faraos.dk/" },
    { title: "Brugt Lego og Tintin biler", url: "https://www.faraos.dk/" },
    { title: "Brugte rollespil", url: "https://www.faraos.dk/" },
    { title: "Dungeons & Dragons Karakterark", url: "https://www.faraos.dk/" },
    { title: "Drager & Dæmoner Karakterark", url: "https://www.faraos.dk/" },
    { title: "Sådan handler du hos os", url: "https://www.faraos.dk/" },
    { title: "VAT refund", url: "https://www.faraos.dk/" },
    { title: "Refundering af Gavekort", url: "https://www.faraos.dk/" }
  ],
  Services: [
    { title: "Klub Faraos", url: "https://www.faraos.dk/" },
    { title: "Min Profil", url: "https://www.faraos.dk/" },
    { title: "Min Ønskeliste", url: "https://www.faraos.dk/" },
    { title: "Mine Favoritter", url: "https://www.faraos.dk/" },
    { title: "Min Søgeliste", url: "https://www.faraos.dk/" },
    { title: "Mine Ordrer", url: "https://www.faraos.dk/" },
    { title: "Nyhedsbrev", url: "https://www.faraos.dk/" }
  ],
  "Om Faraos": [
    { title: "Job & Praktik", url: "https://www.faraos.dk/" },
    { title: "Sæsonmedarbejdere – Taastrup", url: "https://www.faraos.dk/" },
    { title: "Medarbejder til Brætspils-afdelingen i Odense", url: "https://www.faraos.dk/" },
    { title: "Ungarbejdere til lager i Tåstrup", url: "https://www.faraos.dk/" },
    { title: "Kollega til webshop / lager søges", url: "https://www.faraos.dk/" },
    { title: "Konkurrencebetingelser", url: "https://www.faraos.dk/" },
    { title: "Om Os", url: "https://www.faraos.dk/" },
    { title: "Forlaget Faraos Cigarer", url: "https://www.faraos.dk/" },
    { title: "Signeringer i Faraos Cigarer", url: "https://www.faraos.dk/" }
  ]
};

// Generer HTML
const footerNav = document.getElementById("footer-nav");

for (const section in footerData) {  // fjern semikolon
  const column = document.createElement("div");
  column.classList.add("footer-nav__column");

  const title = document.createElement("h3");
  title.classList.add("footer-nav__title");
  title.textContent = section;
  column.appendChild(title);

  const ul = document.createElement("ul");
  ul.classList.add("footer-nav__list");

  footerData[section].forEach(item => {
    const li = document.createElement("li");
    li.classList.add("footer-nav__item");

    const a = document.createElement("a");
    a.textContent = item.title;
    a.href = item.url;

    li.appendChild(a);
    ul.appendChild(li);
  });

  column.appendChild(ul);
  footerNav.appendChild(column);
}
