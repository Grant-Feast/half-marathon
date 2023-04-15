const burgerIcon = document.getElementById('burger');

// when the burger icon is clicked on mobile screens, the hidden class is added or removed from the main nav
burgerIcon.addEventListener('click', () => {
  const mainNav = document.getElementById('nav');
  if (mainNav.classList.contains('hidden')) {
    mainNav.classList.remove('hidden');
  } else {
    mainNav.classList.add('hidden');
  }
})

