function calcTime() {
    var d = new Date().toLocaleTimeString("en-GB", {
      timeZone:"Europe/Helsinki", 
      hour: "2-digit", 
      minute: "2-digit"})
    return "(Local time is " + d + ")";
}
window.addEventListener('load', function(){
  if( document.querySelector('.helsinkitime') ){
    document.querySelector('.helsinkitime').innerHTML = calcTime();
  }
})