document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });

        this.classList.add('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const columns = document.querySelectorAll('.column');
        columns.forEach((column, index) => {
            setTimeout(() => {
                column.style.opacity = 1;
            }, 200 * index); // Adjust the delay as desired
        });