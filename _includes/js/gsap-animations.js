gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

window.addEventListener('load', function(){
  if ( document.getElementById("illu-home") ){
    
    let homeillupaths = document.querySelectorAll("#illu-home path");
    let tlSVGin = gsap.timeline({ paused: false});
    
    tlSVGin.set(homeillupaths, { autoAlpha: 1, drawSVG: "50% 50%" });

    for(var i = 0 ; i<=homeillupaths.length; i ++){
      tlSVGin.to(homeillupaths[i], { 
          drawSVG: "random(0, 5)% random(95, 100)%", 
          duration: 3.5,     
          ease: "circ.inOut",
          repeat: -1,
          delay: i*.015,
          yoyo: true
        }, 0)        
      };

    gsap.to(homeillupaths, {
      drawSVG: "100% 100%",
      stagger: { amount: 1 },
      scrollTrigger: {
        onEnter: () => { tlSVGin.pause() },
        onLeaveBack: () => { tlSVGin.play() },
        trigger: ".hero",
        start: "10% top",
        end: "130% center",
        scrub: true,
        ease: "linear",
        //markers: true
      }
    })
  };
  if ( document.getElementById("illu_about") ){
    let aboutillupaths = document.querySelectorAll("#illu_about circle");
    let tlSVGin = gsap.timeline({ paused: false })
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
      y: -600,
      stagger: { amount: 2, from: "end" },
      duration: 1,
      ease: "power4.inOut", //"steps(550)",
      scrollTrigger: {
        trigger: ".hero",
        start: "10px top",
        end: "130% center",
        scrub: true,
        toggleActions: "restart complete restart reverse",
        onEnter: () => { tlSVGin.seek(5) }
      }
    })
  };
  if ( document.getElementById("illu_serious-gaming") ){
    let horizontal = document.querySelectorAll("#illu_serious-gaming #horizontals > *");
    let vertical = document.querySelectorAll("#illu_serious-gaming #verticals > *");
    let alllines = document.querySelectorAll("#illu_serious-gaming #verticals > *, #illu_serious-gaming #horizontals > *");

    // Most of the rotation code is in the svg... 
    beginRotateY(0.025);
    beginRotateX(0.033);
    //END

    let tlSVGin = gsap.timeline({ paused: false, repeat: 0 });
    tlSVGin.set( alllines, { autoAlpha: 1,  y: 1000 })
    .set ( ".elcubo-container", { y: 1000, autoAlpha: 1 })
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
    .to( ".elcubo-container", {
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
    gsap.to( ".elcubo-container", {  xPercent: 66, yPercent: -15, scale: .8, scrollTrigger: seriousgamingtrigger });
  }
  if ( document.getElementById("illu-medical-company") ){
    let oddbglines = document.querySelectorAll("#background g g:nth-child(odd) path");
    let evenbglines = document.querySelectorAll("#background g g:nth-child(even) path");
    let tlbg = gsap.timeline( { paused: false, repeat: -1 } );
    tlbg.fromTo( oddbglines, 
      { drawSVG: "10% 80%" }, 
      { drawSVG: "20% 90%", xPercent: -10, ease: "linear", duration: 4 }, 0);
    tlbg.fromTo( evenbglines, 
      { drawSVG: "10% 80%" }, 
      { drawSVG: "0% 70%", xPercent: 10, ease: "linear", duration: 4 }, 0);
    gsap.set("#background", { autoAlpha: 1, x: 1000 });
    gsap.set("#eye-retina", { transformOrigin: "50% 50%" });
    gsap.to("#background", { x: 0, duration: 1 })
    let tlSVGin = gsap.timeline( { paused: false, repeat: 0 } )
      .set("#eye", { autoAlpha: 1 })
      .from("#eye", { xPercent: 300, duration: 2, ease: "circ.inOut" }, .5)
      .to("#eye-retina", { xPercent: -60, scaleX: .6, scaleY: 1.2, duration: .5, ease: "circ.inOut"}, 0)
      .to("#eye-retina", { xPercent: 0, scaleX: 1, scaleY: 1, duration: .5, ease: "circ.inOut"}, 2)
      .to("#eye-retina-hole", { scale: 2, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .5 }, 2)
      .to("#eye-retina-hole", { scale: 1, transformOrigin: "50% 50%", ease: "circ.inOut", duration: .5 }, 3);
    let tlEyelook = gsap.timeline({ repeat: -1 })
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
    let tlOnOpen = gsap.timeline({ paused: false })
      .from("#roof line, #floor line", { drawSVG: "100% 100%", duration: 2, ease: "power2.out" })

    let tlBallBounce = gsap.timeline({ paused: false, repeat: -1, repeatDelay: 3.6})
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

  if ( document.getElementById("financial-services") ){
    let paths = Array.from( document.querySelectorAll('#financial-services > g > *') );  
    gsap.set("#financial-services > g > *", { transformOrigin: "50% 50%" });
    const randZ = gsap.utils.random(-45, 45, true);
    const randScale = gsap.utils.random(0.7, 1.5, true);
    let newZ = randZ();
    let newScale = randScale();

    let tl = gsap.timeline({ 
      paused: true, repeat: -1, repeatRefresh: true,
      defaults: {
        stagger: { 
          amount: .5, from: "end", ease: "power1.in"
        }, 
        ease: "power2.inOut", 
        duration: 1
      },
      onRepeat: () => {
        newZ = randZ();
        newScale = randScale();
      }
    });
    tl.to( paths, { rotationZ: () => newZ });
    tl.to( paths, { scaleX: () => newScale});
      
    let tljam = gsap.timeline();
    tljam.set( paths, { autoAlpha: 0 });
    tljam.set( paths[25], { autoAlpha: 1, drawSVG: "0% 0%" });
    tljam.to( paths[25], { 
      drawSVG: "0% 100%", 
      ease: "power2.in",
      duration: 1, 
      onComlete: () => { 
        tljam.set( paths, { autoAlpha: 1 });
        for(i=49; i >= 0; i--) {
          tljam.from(paths[i], { morphSVG: paths[25], duration: 1, ease: "circ.inOut",
          onComplete: () => {
            tl.play();
          } }, 1);
        }
      } 
    });
    gsap.to("#financial-services", {
      scale: 0.75,
      xPercent: 33,
      scrollTrigger: {
        trigger: ".hero",
        start: "30% center",
        end: "100% center",
        scrub: true,
        toggleActions: "restart complete restart reverse",
      }
    })
  }
  if ( document.getElementById("outlook") ){
    gsap.set("#outlook", {autoAlpha: 1});
    let paths = Array.from( document.querySelectorAll('#outlook > polygon, #envelopelines') );   
    let tl_trailloop = gsap.timeline({ paused: false })
    .to( paths, {
      transformOrigin: "50% 50%", 
      rotationZ: 360, 
      duration: 10, 
      ease: "none", 
      stagger: { 
        from: "end", 
        each: .01, 
        repeat: -1, 
        repeatDelay: .1, 
        yoyo: false 
      }
    })
    let tl_intro = gsap.timeline()
      .fromTo( paths, 
      { x: -2000 }, 
      { x: 0, 
        duration: 1, 
        stagger: { 
          each: .01, 
          from: "end"          
        }, 
        ease: "power3.inOut"        
      },  0);
    gsap.fromTo( paths , {
      xPercent: 0
    },{
      xPercent: 100, 
      stagger: { 
        each: .001, 
        from: "end"          
      }, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".page-header",
        start: "bottom top",
        end: "+=1000",
        scrub: true     
      }
    })
    gsap.set(paths, { transformOrigin: "50% 50%", x: -2000 });
  }
  if( document.getElementById("illu-medical-research") ){
    let bars = Array.from( document.querySelectorAll("[id^='bar-clip'] [id^='bar']") );
    let master = gsap.timeline({
      id: "master",
      scrollTrigger: {
        trigger: ".page-header",
        toggleActions: "play pause play pause"
      }
    });
    //master.addLabel("shrinkage", 3);
    function anim(elem, t){
      let tl = gsap.timeline({repeat: -1, repeatRefresh: true });
      tl.to(elem, { 
        yPercent: "random(0, 100)", duration: 1, ease: "circ.inOut", delay: t
      });
      tl.to( elem, { 
        yPercent: 91, 
        scrollTrigger: {        
          trigger: ".page-header",
          start: "bottom top",
          end: "+=500",
          scrub: true
        }
      });
      tl.to( elem.parentElement, { 
        scale: 0,
        transformOrigin: "100% 0%",
        scrollTrigger: {        
          trigger: ".page-header",
          start: "+=500 top",
          end: "+=1000",
          scrub: true
        }
      })
      return tl;
    };
    for(i = 0; i < bars.length; i++ ) {
      master.add( anim( bars[i], i*0.01 ), 0 )            
    };
  }
  if(document.getElementById("illu-cgi")){
    gsap.set("#eye-clip-clippath", { transformOrigin: "50% 63%" })
    gsap.set("#retina, #hole", { transformOrigin: "50% 50%" })
    gsap.set("#upperlid-closed, #lowerlid-closed", { autoAlpha: 0 })
    let tl = gsap.timeline({ repeat: -1, repeatRefresh: true,  defaults: {
      ease: "power3.inOut", duration: .7
    } })
      .to("#retina", { xPercent: "random(-70, 70)", yPercent: "random(-30, 30)", ease: "power3.out" }, 1 )
      .to("#retina", { rotateZ: "random(-45, 45)" }, 1.7 )
      .to("#hole", { scale: "random(.5, 1.25)" }, 1.7 )
      
    let tl_wink = gsap.timeline({ repeat: -1, repeatDelay: 4.25, defaults: {
      duration: .5, ease: "power2.Out"
    } })
      .addLabel("start")
      .to("#upperlid", { morphSVG: "#upperlid-closed", duration: .05, ease: "power2.in" }, "start" )
      .to("#lowerlid", { morphSVG: "#lowerlid-closed", duration: .05, ease: "power2.in" }, "start" )
      .to("#eye-clip-clippath", { morphSVG: "#eye-clip-clippath-closed", duration: .05, ease: "power2.in" }, "start" )
      .to("#upperlid", { morphSVG: "#upperlid" }, "start+=0.05" )
      .to("#lowerlid", { morphSVG: "#lowerlid" }, "start+=0.05" )
      .to("#eye-clip-clippath", { morphSVG: "#eye-clip-clippath" }, "start+=0.05" );  
    
    function illuy(){
      return document.getElementById("illu-cgi").getBoundingClientRect().top ;
    };
    console.log( document.getElementById("illu-cgi").getBoundingClientRect().top );
    console.log( illuy );   
    let trigger = {
      trigger: ".hero",
      start: "0% 0%",
      end: "100% center",
      scrub: true,
      toggleActions: "restart complete restart reverse"       
    };
    gsap.to("#illu-cgi", { transformOrigin: "100% 0", scale: .5, y: -illuy(),  scrollTrigger: trigger } )
    window.addEventListener('resize', ()=>{
      gsap.to("#illu-cgi", { transformOrigin: "100% 0", scale: .5, y: -illuy(),  scrollTrigger: trigger } )
    } );
  }

  if(document.getElementById("illu-camera-driver")){
    let count = { value: 16 };
    let r = 90, 
        arc = (x,y,s) => `A${r},${r},0,0,${s},${x},${y}`,
        path = (i,d) => `<path transform='rotate(${i/+count.value*360})' ${d}></path>`;

    function upd (val) {
        let step = Math.PI*(0.5 + 2/+count.value);
        let p1x = Math.cos(step)*r; 
        let p1y = Math.sin(step)*r;
        let cos = Math.cos(-val);
        let sin = Math.sin(-val);
        let c1x = p1x - cos * p1x - sin * p1y;
        let c1y = p1y - cos * p1y + sin * p1x;
        let dx = - sin * r - c1x;
        let dy = r - cos * r - c1y;
        let dc = Math.sqrt(dx*dx + dy*dy);
        let a = Math.atan2(dy, dx) - Math.acos(dc/2/r);
        let x = c1x + Math.cos(a)*r;
        let y = c1y + Math.sin(a)*r;
        let edge = `M${p1x},${p1y}${arc(0,r,0)}${arc(x,y,1)}`;
        edges.innerHTML = bodies.innerHTML = '';
        for (let i = 0; i < +count.value; i++) {
            edges.innerHTML += path(i, `fill=none stroke=black stroke-width=1 d='${edge}'`);
            bodies.innerHTML += path(i, `fill=white d='${edge}${arc(p1x,p1y,0)}'`); 
        }
    };

    upd(1);

    var startCount = 0,
        num = {var:startCount};
    function changeNumber() {
      upd(0.001 * (num.var).toFixed() )
    }

    gsap.set("#all", { transformOrigin: "50% 50%" })
    gsap.set("#edges path", { strokeWidth: 1 })

    let tl_in = gsap.timeline({repeat: 0, repeatRefresh: true, repeatDelay: 1})
    .to(num, {var: 1000, duration: 2.5, ease: "circ.inOut", onUpdate:changeNumber})
    .to(num, {var: 300, duration: 1, ease: "circ.inOut", onUpdate:changeNumber})
    .to(num, {var: 900, duration: 1, ease: "circ.inOut", onUpdate:changeNumber})
    //.to(num, {var: 800, duration: .5, ease: "circ.inOut", onUpdate:changeNumber})

    let tl_scroll = gsap.timeline({ 
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".page-header",
        start: "bottom top",
        end: "+=1000",
        scrub: true,
        onEnter: ()=>{ tl_in.pause() },
        onLeaveBack: ()=>{ tl_in.play() }
      }
    })
      .to(num, {var: 0, onUpdate:changeNumber })
  }
  if(document.getElementById("illu-radar")){
    const svgel = document.getElementById("illu-radar");
    
    let tlRadar = gsap.timeline({ paused: false, repeat: 0 });
    for(let i = 0; i <= 21; i++) {
      let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      newCircle.setAttribute("cx", "1920");
      newCircle.setAttribute("cy", "719");
      newCircle.setAttribute("r", 0);
      svgel.appendChild(newCircle);
      tlRadar.to(newCircle, {
        attr:{
          r: 700
        },
        ease: "power2.out",
        duration: 9,
        delay: (i+1)*.2,
        repeat: -1,
      }, 0)
      .fromTo(newCircle, {
        stroke: "#000000"
      }, {
        stroke: "#000000",
        duration: 1,
        repeat: -1,
      }, 0)
      .fromTo(newCircle, {
        stroke: "#000000"
      }, {
        stroke: "#FFF",
        duration: 1,
        repeat: -1,
        repeatDelay: 8,
      }, 8+(i+1)*.2)
    }
    gsap.to("#illu-radar", {
      transformOrigin: "100% 0%",
      scale: 0.66,
      scrollTrigger: {
        trigger: ".hero",
        start: "10px top",
        end: "150% center",
        scrub: true,
        toggleActions: "restart complete restart reverse",
      }
    })
    
    let heartrate = gsap.timeline({paused: false, repeat: -1, repeatDelay: 2})
      .set("#filler",{
        transformOrigin: "0% 50%",
        xPercent: 300
      })
      .fromTo("#graph", {
        xPercent: 0
      },{
        xPercent: 75,
        duration: 7,        
        ease: "none"
      })      
  }
})