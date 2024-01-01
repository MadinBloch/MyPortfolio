document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Close the mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.lg\\:flex a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    });

    // Close the mobile menu when clicking the close (X) button
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typed-text');
    const texts = ['Hi, I\'m Madin Bloch', 'Web Developer', 'Full Stack Developer']; // Add your desired texts here
    let index = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < texts[index].length) {
            textElement.innerHTML += texts[index].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 50); // Adjust the typing speed here (in milliseconds)
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            textElement.innerHTML = texts[index].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            index = (index + 1) % texts.length;
            setTimeout(type, 500);
        }
    }

    // Start the typing animation
    setTimeout(() => {
        textElement.classList.remove('opacity-0', 'transform', '-translate-y-4');
        type();
    }, 500);
});
