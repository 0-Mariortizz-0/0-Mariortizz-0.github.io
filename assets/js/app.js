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

const filterBtns = document.querySelectorAll('.filter-btn');
const eduItems = document.querySelectorAll('.edu-item');

if (filterBtns.length > 0 && eduItems.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            eduItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('is-hidden');
                    
                    item.classList.remove('fade-in');
                    void item.offsetWidth;
                    item.classList.add('fade-in');
                } else {
                    item.classList.add('is-hidden');
                }
            });
        });
    });
}