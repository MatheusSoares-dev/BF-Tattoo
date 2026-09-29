gsap.registerPlugin(ScrollTrigger, SplitText)

const tlHero = gsap.timeline()

tlHero.fromTo(".img-logo", {
    scale: .5,
    opacity: 0,
}, {
    scale: 1,
    opacity: 1,
    duration: 1
})

tlHero.to(".img-logo", {
    opacity: 0,
    y: 150,
    duration: 1
}, "+1.5")

tlHero.to(".box-sup", {
    y: "-200%",
    duration: 1,
    stagger: {
        each: .1,
        from: "center"
    },

}, "+")

tlHero.to(".box-inf", {
    y: "200%",
    duration: 1,
    stagger: {
        each: .1,
        from: "center"
    },

}, "<")

tlHero.set(".box-sup, .box-inf", {
    display: "none"
})

tlHero.set(".preloader", {
    pointerEvents: "none",
    zIndex: -99
})

let heroTitulo = new SplitText(".titulo-hero", { type: "chars" })
let LetrasHero = heroTitulo.chars;

tlHero.from(".hero-img img", {
    opacity: 0,
    x: 400,
    opacity: 0,
    duration: 1,
    ease: "sine.out",
}, "<-.3")


tlHero.from(LetrasHero, {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "back.out",
    stagger: {
        from: "start",
        each: .1
    }
})

tlHero.from(".text-hero p", {
    x: -200,
    opacity: 0
}, "<+1")

gsap.to(".hero-img img", {
    scale: 1.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
})

const tlWork = gsap.timeline({
    scrollTrigger: {
        trigger: ".galeria-scroll",
        start: "25% top",
        end: "bottom bottom",
        scrub: 2,
        onEnter: () => {
            videoTrabalho.play().catch(error => console.log("Play bloqueado:", error));
        },
        onLeaveBack: () => {
            videoTrabalho.pause();
        }
    }
})

const videoTrabalho = document.querySelector('.main-item video')

tlWork.to(".grid", {
    scale: 3.6,
    gap: "0vw",
    ease: "power1.out"
})

tlWork.to(".grid-item:not(.main-item)", {
    opacity: .15,
    ease: "power1.out"
}, "<")

tlWork.to(".main-item", {
    borderRadius: "0px",
    ease: "power2.inOut",

});

const divTrabalho = new SplitText(".titulo-trabalho h1", { type: "chars" })
const letraTrabalho = divTrabalho.chars

gsap.to(letraTrabalho, {
    y: 150,
    opacity: 0,
    stagger: {
        from: "random",
        each: .1
    },
    scrollTrigger: {
        trigger: ".sessao-trabalho",
        start: "-16% top",
        end: "center center",
        scrub: 1,
    }
})

const conteudo = document.querySelector(".conteudo");

const quantidadeScroll = () => {
    return conteudo.scrollWidth - window.innerWidth
}

gsap.to(conteudo, {
    x: () => -quantidadeScroll(),
    ease: "none",
    scrollTrigger: {
        trigger: ".conteudo-scroll",
        start: "top top",
        end: () => "+=" + quantidadeScroll(),
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true
    }
});

const tlMsg = gsap.timeline({
    scrollTrigger: {
        trigger: ".tela-msg",
        start: "-10% top",
        end: "130% bottom",
        scrub: 1,
       
    }
})

const letraMsg = new SplitText(".balao p", {type: "words"})

tlMsg.from(letraMsg.words, {
    autoAlpha: 0,
    y: 100,
    x: -100,
    duration: 1,
    stagger: 1,
    width: 0,
    ease: "back.out(1.7))"
})

const telefone = '553195579701'


function enviarWhatsApp(event) {
    event.preventDefault();

    const textoUsuario = document.getElementsByName('whats')[0].value;
    const mensagem = `Fala BF, tudo na paz ${textoUsuario}`
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`
    window.open(url,'_blank')

}

