// #0B8A6F, #054F3F

$(document).ready(function() {
  function allCenter($x)  {
    $x.find(".vcent").each( function () {
      var ph  = parseFloat($(this).parent().height());
      var h  = parseFloat($(this).height());
      var y = (ph-h)/2/h*100;
      $(this).css('transform','translateY('+parseInt(y)+'%)');
    });
    $x.find(".hcent").each( function () {
      var pw  = parseFloat($(this).parent().width());
      var w  = parseFloat($(this).width());
      var x = (pw-w)/2/w*100;
      var ts = parseInt(x)+'%';
      var mat = $(this).css("transform").match(/(-?[0-9\.]+)/g);
      if(mat)
      var ty = parseInt(mat[5])+'px';
      else var ty = '0';
      $(this).css("transform","translate("+ts+','+ty+")");
    });
    $x.find(".imginit").each( function() {
      var thish = parseInt($(this).height());
      var windh = parseInt($("#pinContainer").height())*0.95;
      if( thish > windh) {
        if( thish/windh > 1.3 || true)
        $(this).css("flex-direction", "row");
        else;
        // $(this).css("transform","scale("+windh/thish+")");
        // $(this).css("height",windh);
      }
    });
  }

  allCenter($(document));

  $(window).resize(function() {
    allCenter($(document));
    document.body.height = window.innerHeight;
  });
});



$(window).on("load",function() {

  setTimeout(function() {
  //

},200);


  $(".blocker").css("display","none");


  var tlintro = new TimelineMax();
  // tlintro.staggerFrom("#nameCont path", 0.5 ,{opacity: 0, scale: 0.9}, 0.05, "+0.6");
  // tlintro.staggerTo("#nameCont path", 1 ,{strokeDashoffset: "0px"}, 0.05, "+0.6");
  tlintro.from("#hintCont", 1, {scale: 0.7});

  const name = document.querySelectorAll("#nameCont path");
  for(let i=0; i<name.length; i++) {
    console.log(name[i].getTotalLength());
  }

  var ctrl = new ScrollMagic.Controller();


  var controller = new ScrollMagic.Controller();
  var tl2 = new TimelineMax();
  tl2
  .to("#hintCont",8,{opacity: 0, y: "-5vh"},"+=0")
  .staggerTo("#nameCont path", 8 ,{strokeDashoffset: "0px"}, 1, "-=2")
  .to("#nameCont",8,{ opacity: 0, y:"-10vh"},"-=0.2")
  .staggerFrom(  "#descCont p",  8,  {opacity: 0, y:"5vh"}, 4 ,"+=0")
  .staggerTo(  "#descCont p",  8,  {opacity: 0, y:"-5vh"}, 4,"+=8")



  .fromTo(  "#pinContainer",  8,  {background: "linear-gradient(to right bottom,#000000,#000001)"},  {background: "linear-gradient(to right bottom,#101010, #000000"},  "-=20")
  .fromTo(  "#project0 .pinit",  8,  {opacity: 1, y:"0vh", background: "linear-gradient(to right bottom,#000000,#000001)"}, {opacity: 1, y:"0vh", background: "linear-gradient(to right bottom, #252525, #000000"}, "+=8")
  .from(  "#project0 .ptitle",  8,  {opacity: 0, y: "5vh"}, "-=0")
  .staggerFrom(  "#project0 .pbody", 8,  {opacity: 0, y: "5vh"}, 4, "+=4")
  .staggerFrom(  ".icons div", 8,  {opacity: 0, y: "5vh"}, 2, "+=0")
  .to(  "#project0 .pinit",  32, {y:"-160vh"}, "+=0")
  .to(  "#imgA, #imgB, #imgC,#imgD,#imgE,#imgF",  32, {scale:1.1}, "-=33")
  .staggerFrom(  "#imgC", 8,  {opacity: 1, y: "18vh"}, 4, "-=30")
  .staggerFrom(  "#imgD", 8,  {opacity: 1, y: "18vh"}, 4, "-=30")
  .staggerFrom(  "#imgE", 8,  {opacity: 1, y: "18vh"}, 4, "-=20")
  .staggerFrom(  "#imgF", 8,  {opacity: 1, y: "18vh"}, 4, "-=20")
  .to(  "#project0",  64, {y:"-250vh"}, "-=32")

  .to(  "#pinContainer",  8,  {background: "linear-gradient(to right bottom, #0F518F, #004227)"},  "-=20")
  .to(  "#project1 .pinit",  8,  {opacity: 1, y:"0vh", background: "linear-gradient(to right bottom,#0F518F, #004227)"}, "+=8")
  .from(  "#project1 .ptitle",  8,  {opacity: 0, y: "5vh"}, "-=0")
  .staggerFrom(  "#project1 .pbody", 8,  {opacity: 0, y: "5vh"}, 4, "+=4")
  .staggerFrom(  "#project1 .icons", 8,  {opacity: 0, y: "5vh"}, 2, "+=0")
  .to(  "#project1 .pinit",  32, {y:"-160vh"}, "+=0")
  .to(  "#project1",  64, {y:"-250vh"}, "-=32")

  .to(  "#pinContainer",  8,  {background: "linear-gradient(to right bottom, #FFFFFF, #FFFFFF)"},  "-=20")
  .to(  "#project2 .pinit",  8,  {opacity: 1, y:"0vh", background: "linear-gradient(to right bottom,#FFFFFF, #FFFFFF)"}, "+=8")
  .from(  "#project2 .ptitle",  8,  {opacity: 0, y: "5vh"}, "-=0")
  .staggerFrom(  "#project2 .pbody", 8,  {opacity: 0, y: "5vh"}, 4, "+=4")
  .staggerFrom(  "#project2 .icons", 8,  {opacity: 0, y: "5vh"}, 2, "+=0")
  .to(  "#project2 .pinit",  32, {y:"-160vh"}, "+=0")
  .to(  "#project2",  64, {y:"-250vh"}, "-=32");


  new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "1000%"
  })
  .setPin("#pinMaster")
  .setTween(tl2)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40
  })
  .addTo(controller);
});
