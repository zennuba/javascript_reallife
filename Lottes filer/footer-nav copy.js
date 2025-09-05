

    /*
    1. hent data fra dokument "footerData.json" via fetch 

  fetch("footer-nav.json")    
    .then(response => response.json())
      .then(data => {   

    const footerNav = document.getElementById("footer-nav"); 
   
    /*Loop over JSON-sektionerne */
      for (const section in data) 
        {
          const column = document.createElement("div");
          column.classList.add("footer-nav__column");

          const title = document.createElement("h3");
          title.classList.add("footer-nav__title");
          title.textContent = section;
          column.appendChild(title);

          const ul = document.createElement("ul");
            ul.classList.add("footer-nav__list");

          /* loop for hvert item oprettes en li + en a */

      data[section].forEach(item => 
        {
          const li = document.createElement("li");
            li.classList.add("footer-nav__item"); 

          const a = document.createElement("a"); 
            a.textContent = item.title;  // teksten fra JSON
            a.href = item.url;            // linket fra JSON


              li.appendChild(a);  //tilføjer child til li
              ul.appendChild(li); //tilføjer child til ul
        }); 

      column.appendChild(ul);
       footerNav.appendChild(column);
      }
      }) 
        .catch(error => console.error("Fejl ved indlæsning:", error)
    )
*/