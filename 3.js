// Optional: Add smooth accordion animation
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.accordion-button').forEach(btn => btn.classList.remove('active'));
    if (!expanded) button.classList.add('active');
  });
});
