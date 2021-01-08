gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

window.addEventListener('load', function(){
  if ( document.getElementById("Layer_1") ){
    let homeillupaths = document.querySelectorAll("#Layer_1 path");
    let tlSVGin = new gsap.timeline({ paused: false })
      .set(homeillupaths, { autoAlpha: 1, drawSVG: "50% 50%" })
      .to(homeillupaths, { 
        drawSVG: "0% 100%", 
        stagger: { amount: 1, from: "center" }, 
        duration: 3,     
        ease: "bounce"
      },0);
    gsap.fromTo(homeillupaths, {
      drawSVG: "0% 100%",
    }, {
      drawSVG: "100% 100%",
      stagger: { amount: 1 },
      scrollTrigger: {
        trigger: ".hero",
        start: "33% center",
        end: "130% center",
        scrub: true,
        ease: "linear"
      }
    })
  };
  if ( document.getElementById("illu_about") ){
    let aboutillupaths = document.querySelectorAll("#illu_about circle");
    let tlSVGin = new gsap.timeline({ paused: false })
    .set(aboutillupaths, {      
      autoAlpha: 1,
      y: -500
    })
    .to(aboutillupaths, {      
      y: 00,
      stagger: { amount: 1 }, 
      duration: 3,     
      ease: "elastic"
    });

    gsap.to(aboutillupaths, {
      //x: 600,
      y: -600,
     // autoAlpha: 0,
      stagger: { amount: 2, from: "end" },
      duration: 1,
      ease: "power4.inOut", //"steps(550)",
      scrollTrigger: {
        trigger: ".hero",
        start: "30% center",
        end: "100% center",
        scrub: true,
        markers: true,
        toggleActions: "restart complete restart reverse"
      }
    })
  };
  if ( document.getElementById("illu_serious-gaming") ){
    let horizontal = document.querySelectorAll("#illu_serious-gaming #horizontals > *");
    let vertical = document.querySelectorAll("#illu_serious-gaming #verticals > *");
    let alllines = document.querySelectorAll("#illu_serious-gaming #verticals > *, #illu_serious-gaming #horizontals > *");
    let cubesides = document.querySelectorAll("#cube div");
    let tlMaster = new TimelineMax({paused:true});
    gsap.set("#cube", {
      transformStyle: "preserve-3d"
    })
    gsap.set(cubesides, {
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50% -75px",
      transformPerspective: 1000
    })
    gsap.set("#cube-back", {
      rotationY: 180,
      rotationX: 0
    })
    gsap.set("#cube-right", {
      rotationY: 270,
      rotationX: 0
    })
    gsap.set("#cube-left", {
      rotationY: 90,
      rotationX: 0
    })
    gsap.set("#cube-top", {
      rotationX: 90,
      rotationY: 0
    })
    gsap.set("#cube-bottom", {
      rotationX: 270,
      rotationY: 0
    })
    let dur = 6;
    function facesInner() {
      let tlFacesInner = new gsap.timeline({ repeat: -1 });
      tlFacesInner
        .to("#cube-front", {
            rotationX: '+=360',
            rotationY: '+=360',
            ease: "linear",
            duration: dur,
        }, 0)
        .to("#cube-back", {
            rotationX: '-=360',
            rotationY: '+=360',
            ease: "linear",
            duration: dur
        }, 0)
        .to("#cube-top", {
            rotationX: '+=360',
            rotationY: '+=360',
            ease: "linear",
            duration: dur
        }, 0)
        .to("#cube-bottom", {
            rotationX: '+=360',
            rotationY: '+=360',
            ease: "linear",
            duration: dur
        }, 0)
        .to("#cube-left", {
            rotationY: '+=360',
            ease: "linear",
            duration: dur
        }, 0)
        .to("#cube-right", {
            rotationY: '+=360',
            ease: "linear",
            duration: dur
        }, 0)
        .to("#cube-left-face", {
            rotationZ: '360',
            ease: "linear",
            duration: dur
        }, 0)
        .to("#cube-right-face", {
            rotationZ: '-360',
            ease: "linear",
            duration: dur
        }, 0)
      return tlFacesInner;
    }
    window.requestAnimationFrame(function(){
      tlMaster
        .add(facesInner(), 0)
        .progress(1).progress(0)
        .play();
    });

    let tlSVGin = new gsap.timeline({ paused: false, repeat: 0 });
    tlSVGin.set( alllines, { autoAlpha: 1,  y: 1000 })
    .set ( "div#cube", { y: 1000, autoAlpha: 1 })
    .to( horizontal, { 
      y: 0,
      stagger: { amount: .5, from: "start" }, 
      duration: 1.5,     
      ease: "circ.inOut"
    }, 0)
    .to( vertical, { 
      y: 0,
      stagger: { amount: .5, from: "end" }, 
      duration: 1.5,     
      ease: "circ.inOut"
    }, .2)
    .to( "div#cube", {
      y: 0,
      ease: "circ.inOut",
      duration: 2
    }, .5);
    let seriousgamingtrigger = {
      trigger: ".hero",
      start: "0% 0%",
      end: "100% center",
      scrub: true,
      toggleActions: "restart complete restart reverse"       
    };
    gsap.to( horizontal, {  drawSVG: "100% 100%", stagger: { amount: .1, from: "start" }, scrollTrigger: seriousgamingtrigger });
    gsap.to( vertical, {  drawSVG: "0% 0%", stagger: { amount: .1, from: "start" }, scrollTrigger: seriousgamingtrigger });
    ScrollTrigger.create({
      trigger: ".page-header",
      start: "0 top",
      end: "+=300",
      pin: "div#cube",
      markers: true
    });
  }
  if ( document.getElementById("illu-medical-company") ){
    let oddbglines = document.querySelectorAll("#background g g:nth-child(odd) path");
    let evenbglines = document.querySelectorAll("#background g g:nth-child(even) path");
    let tlbg = new gsap.timeline( { paused: false, repeat: -1 } );
    tlbg.fromTo("#background g g path", 
    { drawSVG: "0% 70%" }, 
    { drawSVG: "10% 80%", xPercent: -10, ease: "linear", duration: 2, repeat: 1, yoyo: false }, 0);
    gsap.set("#background", { autoAlpha: 1, x: 1000 });
    gsap.set("#eye-retina", { transformOrigin: "50% 50%" });
    gsap.to("#background", { x: 0, duration: 1 })
    let tlSVGin = new gsap.timeline( { paused: false, repeat: 0 } )
      .set("#eye", { autoAlpha: 1 })
      .from("#eye", { xPercent: 300, duration: 2, ease: "circ.inOut" }, .5)
      .to("#eye-retina", { xPercent: -60, scaleX: .6, scaleY: 1.2, duration: .5, ease: "circ.inOut"}, 0)
      .to("#eye-retina", { xPercent: 0, scaleX: 1, scaleY: 1, duration: .5, ease: "circ.inOut"}, 2)
      .to("#eye-retina-hole", { scale: 2, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .5 }, 2)
      .to("#eye-retina-hole", { scale: 1, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .5 }, 3);
    let tlEyelook = new gsap.timeline({ repeat: -1 })
      .to("#eye-retina-hole", { scale: 2, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .35 }, 5)
      .to("#eye-retina", { rotationZ: 5, ease: "circ.inOut", duration: .35 }, 5)
      .to("#eye-retina-rays line", { strokeWidth: 3, duration: .35 }, 5)
      .to("#eye-retina-hole", { scale: 1, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .5 }, 6)
      .to("#eye-retina", { rotationZ: -5, ease: "circ.inOut", duration: .35 }, 6)
      .to("#eye-retina-rays line", { strokeWidth: 1, duration: .35 }, 6)
      .to("#eye-retina-hole", { scale: 1.5, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .35 }, 6.5 )
      .to("#eye-retina", { rotationZ: 5, ease: "circ.inOut", duration: .35 }, 6.5)
      .to("#eye-retina-rays line", { strokeWidth: 3, duration: .35 }, 6.5)
      .to("#eye-retina-hole", { scale: 1, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .5 }, 7 )
      .to("#eye-retina", { rotationZ: 0, ease: "circ.inOut", duration: .35 }, 7)
      .to("#eye-retina-rays line", { strokeWidth: 1, duration: .35 }, 7)
    let medicaldevicetrigger = {
      trigger: ".hero",
      start: "0% 0%",
      end: "100% center",
      scrub: true,
      toggleActions: "restart complete restart reverse"       
    };
    gsap.to("#eye", { scale: 0, transformOrigin: "50% 50%", scrollTrigger: medicaldevicetrigger });
    gsap.to("#background", { xPercent: 25, scrollTrigger: medicaldevicetrigger });
  }
  if ( document.getElementById("industrial-automation") ){
    gsap.set("#roof, #floor", { autoAlpha: 1 });
    gsap.set("#ball, #ball-shadow", { transformOrigin: "50% 50%" });
    let tlOnOpen = new gsap.timeline({ paused: false })
    .from("#roof line, #floor line", { drawSVG: "100% 100%", duration: 4, ease: "power2.out" })

    let tlBallBounce = new gsap.timeline({ paused: false, repeat: -1, repeatDelay: 3.6})
    .fromTo("#ball", { yPercent: 0, scale: 1 }, { yPercent: -66, scale: 1, duration: .3, ease: "circ.out" }, 0)
    .fromTo("#ball-shadow", {yPercent: 0, scale: 1 }, {yPercent: 5, scale: .66, duration: .3, ease: "circ.out" }, 0)
    .to("#ball, #ball-shadow", {yPercent: 0, scale: 1, duration: 1.3, ease: "bounce.out" } );
    
    gsap.to("#ballnshadow", { transformOrigin: "50% 50%", scale: 0.3, xPercent: 110, yPercent: -55, duration: 2.6, ease: "power3.out", repeat: -1, yoyo: true });
    
    let industrialtrigger = {
      trigger: ".hero",
      start: "0% 0%",
      end: "100% center",
      scrub: true,
      toggleActions: "restart complete restart reverse"       
    };
    gsap.fromTo("#roof line, #floor line", { drawSVG: "0% 100%" }, { drawSVG: "100% 100%", ease: "none", scrollTrigger: industrialtrigger });
  }
})