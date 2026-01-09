function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("active");
}


document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('active');
  });
});

