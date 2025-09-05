// 1
    document.querySelectorAll('.maske__slideshow').forEach(function(slideshow)       {
        const slides = Array.from(slideshow.querySelectorAll('.slideshow__image'));
        const prevBtn = slideshow.querySelector('.slideshow__button--tilbage');
        const nextBtn = slideshow.querySelector('.slideshow__button--frem');
        let currentIndex = 0;
        let slideInterval;



// 2
    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
    slides[index].classList.add('active');
    }




// 3
    function changeSlide(step) {
        currentIndex = (currentIndex + step + slides.length) % slides.length;
        showSlide(currentIndex);
        resetInterval();
    }





// 4
    function resetInterval() {
         clearInterval(slideInterval);
         showSlide(currentIndex);
         slideInterval = setInterval(function() {
          changeSlide(1);
     }, 4000);
     }




// 5
     if (prevBtn) {
      prevBtn.addEventListener('click', function() {
         changeSlide(-1);
     });
    }


// 6
    if (nextBtn) {
     nextBtn.addEventListener('click', function() {
        changeSlide(1);
        });
    }





// 7
        resetInterval();
    });



// Andet slideshow 

    document.querySelectorAll('.mand__slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.slideshow__image');
  const prevBtn = slideshow.querySelector('.mandslideshow__button--tilbage');
  const nextBtn = slideshow.querySelector('.mandslideshow__button--frem');

  let currentIndex = 0;
  let slideInterval;

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  };

  const changeSlide = (step) => {
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    showSlide(currentIndex);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    showSlide(currentIndex);
    slideInterval = setInterval(() => changeSlide(1), 4000);
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => changeSlide(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => changeSlide(1));
  }

  resetInterval();
});


