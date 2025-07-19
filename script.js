   const toggler = document.querySelector('.navbar-toggler');
    toggler.addEventListener('click', () => {
      toggler.classList.toggle('active');
    });

     function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    function alertContact() {
        alert('Thank you for reaching out! I will contact you shortly.');
    }