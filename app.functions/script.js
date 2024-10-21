
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
    var mensagem = "Hi Lucas Souza, I saw your portfolio and I saw that you are into FullStack Development technologies,lets get in touch!";
    var link = "https://api.whatsapp.com/send?phone=" + x + "&text=" + encodeURIComponent(mensagem);
    window.open(link);
}


function underMaintaince(){
  alert("Page under Maintaice, sorry for the inconvenient...")
}

function howDidYouGethere(){
  alert("How did you get here?")
}

function hrefLinkedIn(){
  window.location.href = "https://www.linkedin.com/in/lucas-vieira-souza-0435b1260/";
}

function hrefGithub(){
  window.location.href = "https://github.com/LucasVieiraaaa";
}

function hrefInstagram(){
  window.location.href = "https://www.instagram.com/luketakk/";
}

function hrefBatWave(){
  window.location.href = "https://github.com/LucasVieiraaaa/BatWave_Repository";
}

function hrefQRCode(){
  window.location.href = "https://qr-code-project-sigma.vercel.app/";
}

function hrefResumePortfolio(){
  window.location.href = "https://lucas-souza-portfolio.vercel.app/";
}

function hrefEndoscopy(){
  window.location.href = "https://github.com/LucasVieiraaaa/Endo";
}

function hrefDevoradores(){
  window.location.href = "https://devoradores-repository.vercel.app/index.html";
}

function hrefVolunteerConnect(){
  window.location.href = "https://pbr-si-2023-1-p1-proj-web-g6-grupo-6.vercel.app/index.html";
}
