//AOS initialize
AOS.init({
    duration: 1200,
  });

//  menu background transparent
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navigation').style.opacity = 0.9;
    } else {
        document.querySelector('#navigation').style.opacity = 1;
    }
});

// project slider owlCarosel

$('.proslide').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots: true,
 })

// testimonial slider owlCarosel

$('.testslide').owlCarousel({
    items:2,
    loop:true,
    nav:false,
    dots: true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
 })


 function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }


  // Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });