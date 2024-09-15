function navBarAnimation(params) {
  var nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", () => {
    var tl = gsap.timeline();
    gsap.to(".sub-links", {
      height: "100px",
    });
    gsap.from(".sub-links h5 span", {
      y: "20px",
      stagger: 0.1,
      duration: 0.2,
    });
  });
  nav.addEventListener("mouseleave", () => {
    var tl = gsap.timeline();
    gsap.to(".sub-links", {
      height: "0px",
    });
  });
}
navBarAnimation();
