function calcTime() {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*2));
    return "(Local time is " + nd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ")";
}
window.addEventListener('load', function(){
  if( document.querySelector('.helsinkitime') ){
    document.querySelector('.helsinkitime').innerHTML = calcTime();
  }
})