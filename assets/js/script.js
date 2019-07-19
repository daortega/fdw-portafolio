$(function () {

  //Smooth scroll
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $('.nav-item').removeClass('active');
      $(this).addClass('active');

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top - 100
      }, 600, function () {
        window.location.hash = gato;
      });
    }
  }); //fin smooth scroll

  //typeform
  var qs, js, q, s, d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm",
    b = "https://embed.typeform.com/";

  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q)
  }; //fin typeform

  //activar tooltip
  $('[data-toggle="tooltip"]').tooltip();

  $('body').scrollspy({ target: '#navbarNav' })


});
