document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeStylesheet = document.getElementById('dark-mode-style');
    const darkModeIcon = darkModeToggle.querySelector('i');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        enableDarkMode();
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        if (darkModeStylesheet.disabled) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
    
    function enableDarkMode() {
        darkModeStylesheet.disabled = false;
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        darkModeStylesheet.disabled = true;
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});