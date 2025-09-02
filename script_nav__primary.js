    const navLinks = document.querySelectorAll('.nav__item nav__item--primary a');
        navItems.forEach(item => {  
            item.addEventListener("click", (event) => {
                event.preventDefault(); // fjerner standard link-handling (valgfrit)
                navItems.forEach(i=> i.classList.remove("active"));
                item.classList.add("active");
            });
        });










