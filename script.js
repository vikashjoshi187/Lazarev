function navBarAnimation() {
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
    // gsap.from(".sub-links h5 span", {
    //   y: "-20px",
    //   stagger: 0.1,
    //   duration: 0.2,
    // });
  });
}
navBarAnimation();

function page2Animation() {
  var allHoverImgs = document.querySelectorAll(".accordion-inner-div");
  allHoverImgs.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element.childNodes[5], {
        opacity: 1,
        scale: 1,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element.childNodes[5], {
        opacity: 0,
        scale: 0,
      });
    });

    element.addEventListener("mousemove", (dets) => {
      gsap.to(element.childNodes[5], {
        x: dets.x - element.getBoundingClientRect().x,
        y: dets.y - element.getBoundingClientRect().y - 90,
      });
    });
  });
}
page2Animation();

function page3Animation() {
  var page3center = document.querySelector("#page3-center");
  var video = document.querySelector("#page3 video");

  page3center.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      borderRadius: "0px",
      opacity: 1,
      top: "0vw",
    });
  });
  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0) scaleY(0)",
      borderRadius: "30px",
      opacity: 0,
      top: "13vw",
    });
    video.load();
  });
}
page3Animation();

const hoverVideos = document.querySelectorAll(".right-col");
hoverVideos.forEach((element) => {
  console.log(element.childNodes);
  element.addEventListener("mouseenter", () => {
    element.childNodes[3].play();
    gsap.to(element.childNodes[3], {
      opacity: 1,
    });

    

    gsap.to(element.childNodes[5], {
      opacity: 1,
      height: "11vw",
      width:"11vw",
      duration:"0.5s",
      padding:"2vw"
    });
  });

  element.addEventListener("mousemove", (dets) => {
    console.log();
    gsap.to(element.childNodes[5], {
      x: dets.x - element.getBoundingClientRect().x,
      y: dets.y - element.getBoundingClientRect().y-200,
    });
  });


  element.addEventListener("mouseleave", () => {
    element.childNodes[3].pause();
    element.childNodes[3].load();
    gsap.to(element.childNodes[3], {
      opacity: 0,
    });

    gsap.to(element.childNodes[5], {
      height: "0vw",
      width:"0vw",
      duration:"0.5s",
      padding:"0px"
    });
  });
});

var folloingDiv = document.querySelectorAll(".folloing-div");

console.log(folloingDiv);
folloingDiv.forEach((element) => {});
