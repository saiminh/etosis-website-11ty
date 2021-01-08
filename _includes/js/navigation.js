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