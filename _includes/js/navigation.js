//menu toggler for mobile nav
let toggler = document.getElementById("page-header-nav-toggle");
function menuOnClick() {
  document.body.classList.toggle("nav-toggled");
  if ( toggler.innerHTML == "Menu" ) {
    toggler.innerHTML = "Close";
  } else {
    toggler.innerHTML = "Menu";
  };
}
toggler.addEventListener("click", function() {
  menuOnClick();
})
// toggle the menu also when work is clicked
let worklinktoggle = document.querySelector('#page-header-nav a[href="#work"]');
worklinktoggle.addEventListener("click", function() {
  if ( document.body.classList.contains('nav-toggled') ) {
    menuOnClick();
  }
})
//use local storage to mark visited work examples
window.addEventListener("load", function(){
  // http://joelcalifa.com/blog/revisiting-visited
  localStorage.setItem('visited-'+window.location.pathname,true);
  var links = document.getElementsByTagName('a');
  for (i=0;i<links.length;i++) {   
    var link = links[i];
    if (link.host == window.location.host
    && localStorage.getItem('visited-' + link.pathname )) {
      link.dataset.visited = true;
    }
  }
})

//Testimonial Nav
window.addEventListener("resize", function() {
  if ( document.querySelector(".testimonials") ){
    width_of_testimonial = document.querySelector(".testimonials-testimonial").offsetWidth;
    init_testimonial();
  }
})
function init_testimonial() {
  if ( document.querySelector(".testimonials") ){
    const testimonials = document.querySelector(".testimonials");
    const n_testimonials = document.querySelectorAll(".testimonials-testimonial").length;
    const btn_prev = document.querySelector(".testimonial-nav-prev");
    const btn_next = document.querySelector(".testimonial-nav-next");
    let width_of_testimonial = document.querySelector(".testimonials-testimonial").offsetWidth;
    let scroll_max = testimonials.scrollWidth - testimonials.clientWidth;
    function testimonial_next() {
      testimonials.scrollBy({
        top: 0,
        left: width_of_testimonial,
        behavior: 'smooth'
      });
    }
    function testimonial_prev() {
      testimonials.scrollBy({
        top: 0,
        left: -1 * width_of_testimonial,
        behavior: 'smooth'
      });
    }
    function testimonial_first() {
      testimonials.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    function testimonial_last() {
      testimonials.scroll({
        top: 0,
        left: width_of_testimonial * ( n_testimonials - 1 ),
        behavior: 'smooth'
      });
    }
    btn_next.addEventListener("click", function() {
      console.log(testimonials.scrollLeft);
      if ( testimonials.scrollLeft !== scroll_max ) {
        testimonial_next();
      } else {
        testimonial_first();
      }
    })
    btn_prev.addEventListener("click", function() {
      if ( testimonials.scrollLeft == 0 ) {
        testimonial_last();
      } else {
        testimonial_prev();
      }
    })
  }
};
init_testimonial();
