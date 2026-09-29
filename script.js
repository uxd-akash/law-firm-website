gsap.registerPlugin(ScrollTrigger);

const isDesktop = window.matchMedia("(min-width: 800px)").matches;


/*-- DESKTOP ANIMATIONS ONLY --*/

if (isDesktop) {


    // Start-header-area

    const t1 = gsap.timeline();

    t1.from(".top-header .container", {
        y: -600,
        duration: 1,
        opacity: 0,
        stagger: 1,
    });


    // End-header-area


    // Start-navbar-area

    t1.from(".navbar", {
        y: -50,
        delay: 0.5,
        duration: 1,
        opacity: 0,
        stagger: 1,
    });


    // End-navbar-area


    // Start-hero-area

    gsap.from(".hero-content", {
        x: -400,
        opacity: 0,
        duration: 3,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".hero-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // End-hero-area


    // Start-about-area

    gsap.from(".left-content", {
        x: -300,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".right-image", {
        x: 300,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });


    // End-about-area


    // Start-practice-area

    gsap.from(".heading", {
        y: 300,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".practice-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".practice-content", {
        y: 300,
        opacity: 0,
        duration: 3,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".practice-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // End-practice-area


    // Start-team-area

    gsap.from(".team-content", {
        y: 300,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".team-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".team-cards", {
        y: 300,
        opacity: 0,
        duration: 3,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".team-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // End-team-area


    // Start-faq-area

    gsap.from(".faq-content", {
        x: -300,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".faq-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".faq-area", {
        x: 300,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".faq-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // End-faq-area


    // Start-testimonial-area

    gsap.from(".testimonial-content", {
        x: -300,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // End-testimonial-area

}