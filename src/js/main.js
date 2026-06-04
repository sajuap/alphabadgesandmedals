// Set the current year in the footer dynamically.
document.getElementById('current-year').textContent = new Date().getFullYear();

// The hero year (1856) is rendered statically in the HTML. A previous
// count-down animation was removed because updating the inline number every
// frame re-centered the heading and made the whole title jitter on load.
