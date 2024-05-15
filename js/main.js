// page in execute
window.onload = function () {

  // wow.js
  new WOW().init();

  // background animated vanta.js
  VANTA.HALO({
    el: ".hero-section",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00

  })

  // type effect
  var typed = new Typed('#hobbies', {
    strings: ['developing', 'coding', 'editing', 'learning'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
  });

  // mouse cursor
  var style = document.createElement('style');
  style.innerHTML = `
  * {
    cursor: url('https://img.icons8.com/glassmorphism/32/experimental-3d-pointer-glassmorphism.png'), auto !important;
  }`;
  document.head.appendChild(style);

  // progress bar change random color
  setInterval(function () {
    var progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function (progressBar) {
      progressBar.style.setProperty('background-color', getRandomColor(), 'important');
      progressBar.style.setProperty('color', 'black', 'important');
      progressBar.style.setProperty('font-weight', 'bold', 'important');
      progressBar.style.setProperty('font-size', '15px', 'important');
    });
  }, 2000); // Change color every 2000 milliseconds (2 seconds)

  // sticky navbar
  // var navbar = document.getElementById("navbar");

  // window.addEventListener('scroll', function() {
  //   if (window.scrollY >= 50) {
  //     navbar.classList.add("sticky");
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // });

  // email send
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var body = 'name: ' + name + '<br>email: ' + email + '<br>number: ' + number + '<br>subject: ' + subject + '<br>message: ' + message;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "bsword1702@gmail.com",
      Password: "82A0F53E3956A93867CFF0B5EBDB1D0D3659",
      To: 'bsword1702@gmail.com',
      From: "Portfolio <bsword1702@gmail.com",
      Subject: "Portfolio Contact Message",
      Body: body,
    }).then(
      message => alert(message)
    );
  });


  // scroll to top
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}

// random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
