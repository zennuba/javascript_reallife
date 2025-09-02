const socialLinks = document.querySelectorAll(".footer__section footersection--socials a");
socialLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Bruger klikkede på:", link.href);
  });
});