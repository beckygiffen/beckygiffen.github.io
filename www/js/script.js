/*var abouts;
abouts=['About Me','See More'];
var ab = abouts[0];
var abo = abouts[1];
document.getElementById("ABOUT").innerHTML = ab;*/


console.log('right')

    $('#mainSlider').carousel({
    pause: false
  })
  $('body').scrollspy({ target: '#list-example' })
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })
  $(window).on('activate.bs.scrollspy', function (e,obj) {
    console.log(obj.relatedTarget);
});

$(document).ready(function(){
  $("aboutDesc").mouseover(function(){
    $("aboutDesc").css("opacity", "1");
  });
  $("aboutDesc").mouseout(function(){
    $("aboutDesc").css("opacity", "0");
  });; /*in regards to the mouse over the pics, opacity changes  applying the text above*/
});

document.getElementById("aboutPics").onclick = function () {
  location.href = "#aboutcont";
};

document.getElementById("webPics").onclick = function () {
  location.href = "#webcont";
};
document.getElementById("graphPics").onclick = function () {
  location.href = "#graphcont";
};
window.onscroll = function() {scrollFunction()}; /*my new scroll function init */

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("about1").style.fontSize = "30px";
    document.getElementById("basket1").style.fontSize = "30px";
   document.getElementById("products1").style.fontSize = "30px";
    document.getElementById("contact1").style.fontSize = "30px";
    document.getElementById("services1").style.fontSize = "30px";/*font size is this size when we scroll down */
   // document.getElementById("beclog").src = ('width', '900px');
  
  } else {
    document.getElementById("about1").style.fontSize = "50px";
    document.getElementById("basket1").style.fontSize = "50px";
    document.getElementById("products1").style.fontSize = "50px";
    document.getElementById("services1").style.fontSize = "50px";
    document.getElementById("contact1").style.fontSize = "50px";
  //document.getElementById("beclog").src = ('width', '900px');
  }/*font size is this size when we scroll up to these points */
  
    
}

/*$(window).on("scroll", function() {
  var s = 800- Math.min(400, $(document).scrollTop());
  $("beclog").width(s).height(s);
});
$("body").css("font-size",Math.max($(window).width()/50,8)+"px")*/

window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("beclog")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.width = '30%';
  } else {
    Logo.style.width = '50%';
  }
}

$( "#aboutPics" ).click(function() {
  $( ".webcont" ).toggleClass( "show" );
});