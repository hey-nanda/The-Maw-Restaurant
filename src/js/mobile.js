  const hamburgerBtn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('nav');
  const navLinks = nav.querySelectorAll('a');


  

  hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });




  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
