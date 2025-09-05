
    
    /* 1. hent data fra dokument "footerData.json" via fetch */

    fetch("footer-nav_itemlist.json")    
        .then(response => response.json())
        .then(data => {
            console.log(data);

    const footerNav = document.getElementById("footer-nav"); 


    /*
 // Loop over JSON-sektionerne */
    for (const section in data) {
      const column = document.createElement("div");
      column.classList.add("footer-nav__column");

      const title = document.createElement("h3");
      title.classList.add("footer-nav__title");
      title.textContent = section;
      column.appendChild(title);

      const ul = document.createElement("ul");
      ul.classList.add("footer-nav__list");



      /* for hver sektion skal der oprettes en li + en a */

      data[section].forEach(item => {
      
        const li = document.createElement("li");
      li.classList.add("footer-nav__item"); 

      })

      const a = document.createElement("a"); 
        a.textContent = item.title;  // teksten
        a.href = item.url;            // linket


        li.appendChild(a); //tilføjer child til li
        ul.appendChild(li); //tilføjer child til ul
    }); //parantes fra "then (data => "

    column.appendChild(ul);
    footerNavNav.appendChild(column);
  }
})
  .catch(error => console.error("Fejl ved indlæsning:", error));
  