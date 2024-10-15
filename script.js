var tl = gsap.timeline({});
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
});
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 10%",
        end: "top 90%",
        scrub: 2
    }
});
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 15%",
        end: "top 20%",
        scrub: 2
    }
});
tl.from("nav .icon",{
    rotate:720,
    duration:1.3,
    delay:0.01,
},"nav")
tl.from("nav h1,nav h4,nav button", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
},"nav");
tl.from(
    ".center-part-1 h1,.center-part-1 p",
    {
        x: -300,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
    },
    "anim"
);
tl.from(".center-part-1 button", {
    opacity: 0,
    duration: 0.1,
});
tl.from(".center-part-2 img",{
        x: 300,
        opacity: 0,
        duration: 0.3,
},"anim");
tl2.from(".section1bottom img", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
});

tl2.from(".services",{
    x:-300,
    opacity:0
})

tl3.from(".left.elem", {
    x: -300,
    opacity: 0,
    smoothOrigin: true
}, "top")
tl3.from(".right.elem", {
    x: 300,
    opacity: 0,
    smoothOrigin: true
}, "top")
tl3.from(".left1.elem", {
    x: -300,
    opacity: 0,
    smoothOrigin: true
}, "bottom")
tl3.from(".right1.elem", {
    x: 300,
    opacity: 0,
    smoothOrigin: true
}, "bottom")

tl4.from(".section3 .section3div", {
    opacity: 0,
    scale: 0,
})
tl4.from(".section3 .services1", {
    opacity: 0,
    y:400,
    duration:1
})

