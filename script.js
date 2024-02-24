
  // Function that sends me messages via Gmail

document.getElementById("enviarEmail").addEventListener("click", function() {
    window.location.href = "mailto:lucasvieirasouzaa@gmail.com?subject=Hi%20Lucas%20Souza,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!";
  });

function enviarEmail01(){
    window.location.href = "mailto:lucasvieirasouzaa@gmail.com?subject=Hi%20Lucas%20Souza,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!";
  };


  // Function that sends me messages via WhatsApp
  function WhatsApp() {
    var x = "5531975580097";
    var mensagem = "Hi Lucas Souza, I saw your portfolio and would like to get in touch!";
    var link = "https://api.whatsapp.com/send?phone=" + x + "&text=" + encodeURIComponent(mensagem);
    window.open(link);
}
  // Fade-In animation
document.addEventListener("DOMContentLoaded", function() {
  var fadeContent = document.getElementById('fade-in-content');
  fadeContent.classList.add('fade-in-active');
});