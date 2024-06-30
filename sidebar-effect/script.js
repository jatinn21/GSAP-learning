let tl = gsap.timeline();
tl.to(".sidebar", {
  duration: 1,
  right: "0%",
});

tl.from(".sidebar p", {
  y: 100,
  delay: 1,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

tl.from("#cross", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  scale: 0,
});

tl.pause();

document.querySelector("body").addEventListener("mousemove", function (dlt) {
  gsap.to("#cursor", {
    duration: 0.75,
    x: dlt.x - 10,
    y: dlt.y - 10,
  });
});

document.querySelector(".menu").addEventListener("click", function () {
  tl.play();
});

document.querySelector("#cross").addEventListener("click", function () {
  tl.reverse();
});
