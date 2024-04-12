const spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const vsOpts = {
  slides: document.querySelectorAll('.v-slide'),
  list: document.querySelector('.v-slides'),
  duration: 0.5,
  lineHeight: 130
}

const vSlide = gsap.timeline({
  paused: true,
  repeat: -1
});

vsOpts.slides.forEach(function(slide, i) {
  let letters = new SplitType(slide).chars;
  let tween = gsap.from(letters, {
    duration: vsOpts.duration,
    y: 130,
    repeat: 1,
    yoyo: true,
    stagger: vsOpts.duration / 5,
    repeatDelay: 1,
  });

  vSlide.add(tween);
})
vSlide.play();