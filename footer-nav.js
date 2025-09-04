    fetch("footer-nav.json")    
        .then(response => response.json())
        .then(data => {
            console.log(data);

           
            let butikker = data.Butikker;
            console.log(butikker); // ["København Comics & Potter", "København Bræt- & Rollespil"]
        })
        
        .catch(error => console.error("Fejl ved indlæsning:", error));
