
function prefersDarkMode() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('prefersDarkMode')) {
      return localStorage.getItem('prefersDarkMode') === 'true'
    }
    return (
      window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }
}

function isDarkMode() {
  return document.body.classList.contains('dark-mode');
}

function switchMode(el) {
  el.classList.toggle('active');
  document.body.classList.toggle('dark-mode');
  window.localStorage.setItem('prefersDarkMode', String(isDarkMode()));
}
