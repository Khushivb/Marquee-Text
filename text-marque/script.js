gsap.registerPlugin(MotionPathPlugin);

const marqueeTexts = document.querySelectorAll(".marquee-text");

function splitText(textElement) {
    const text = textElement.getAttribute('data-text');
    textElement.innerHTML = '';
    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        textElement.appendChild(span);
    });
}

marqueeTexts.forEach(splitText);

const letters = document.querySelectorAll(".letter");

letters.forEach((letter, index) => {
    gsap.to(letter, {
        duration: 1.5,         
        y: 55,                 
        repeat: -1,            
        yoyo: true,             
        ease: "sine.inOut",     
        delay: index * 0.08  
    });
});

gsap.to(".marquee-text", {
    xPercent: 100,           
    ease: "none",
    repeat: -1,
    duration: 10             
});
