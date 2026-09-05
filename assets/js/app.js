const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav__link');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('is-active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('is-active');
                }
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});