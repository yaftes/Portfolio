window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.dot');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const texts = ["UI/UX DESIGINER", "WEB DESIGNER", "FRONT-END DEVELOPER", "FULL-STACK DEVELOPER"];

function changeText() {
    const h1Element = document.getElementById('changingText');
    let index = 0;
    setInterval(() => {
        h1Element.style.opacity = 0; 
        setTimeout(() => {
            h1Element.textContent = texts[index];
            h1Element.style.opacity = 1; 
            index = (index + 1) % texts.length;
        }, 500);
    }, 2000); 
}

setTimeout(changeText, 2000);
