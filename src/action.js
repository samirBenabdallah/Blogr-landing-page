document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('block');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
    menuIcon.src = isOpen ? './images/icon-hamburger.svg' : './images/icon-close.svg';
  });

  // Handle mobile dropdowns
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const dropdown = toggle.nextElementSibling;
      const arrow = toggle.querySelector('img');
      
      // Close other dropdowns
      dropdownToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          const otherDropdown = otherToggle.nextElementSibling;
          const otherArrow = otherToggle.querySelector('img');
          otherDropdown.classList.add('hidden');
          otherArrow.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('hidden');
      arrow.style.transform = dropdown.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('block');
      menuIcon.src = './images/icon-hamburger.svg';
    }
  });
});
