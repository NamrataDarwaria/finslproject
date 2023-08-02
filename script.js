let tl = gsap.timeline();
tl.from(".page1 svg", {
  y: 20,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
});
tl.from(".page1 img", {
  scale: 0.5,
  borderRadius:"10px",
  delay: -0.1,
  duration: 0.7,
  ease: Power1.easeOut,
}).from(".nav", {
  y: -50,
  opacity: 0,
  delay: -0.4,
  duration: 0.5,
});

var h2Data = document.querySelectorAll(".page2 h2, .page3 h2");
h2Data.forEach(function (elem) {
  var  textData = elem.textContent;
  var  splitedText = textData.split("");
  var  clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});
gsap.to(".page2 h2 span", {
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page2 h2 span",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: true,
  }
});
gsap.to(".page2 .svg2,.page2 .svg3",{
  left:'-100vw',
  scrollTrigger:{
    trigger:".page2 .svg2",
    scroller:"body",
    // markers:true,
    scrub:2,
  }
})
gsap.to(".page3 h2 span", {
  color: "#434B34",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page3 h2 span",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top -10%",
    scrub: true,
  }
});