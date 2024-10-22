// Load language JSON file and update the page content
function loadLanguage(lang) {
    fetch(`languages/${lang}.json`)  // Load the selected language file
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const translationKey = element.getAttribute('data-i18n');
                const keys = translationKey.split('.');

                // Access nested properties in the JSON (e.g., "header.portfolio")
                let translation = translations;
                keys.forEach(key => {
                    if (translation && translation[key]) {
                        translation = translation[key];
                    } else {
                        translation = null;
                    }
                });

                // Log missing translations for debugging
                if (!translation) {
                    console.warn(`Missing translation for key: ${translationKey}`);
                }

                // If translation exists, update the element content
                if (translation) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translation; // For placeholders in input elements
                    } else {
                        element.innerHTML = translation; // For normal HTML content
                    }
                }
            });
        })
        .catch(error => console.error('Error loading language:', error));
}


// Inject Header with Language Switcher as Text Links
function injectHeader() {
    const headerHTML = `
        <nav class="navbar">
            <div class="navbar-logo">
                <a href="index">TANYA FICUS</a>
            </div>
            <div class="navbar-links">
                <a href="portfolio" data-i18n="header.portfolio">PORTFOLIO</a>
                <a href="contacts" data-i18n="header.contacts">CONTACTS</a>
                <a href="about" data-i18n="header.about">ABOUT</a>
            </div>
            <div id="languageSwitcher" class="language-switcher">
                <span class="language-option" data-lang="en">EN</span> | 
                <span class="language-option" data-lang="de">DE</span> | 
                <span class="language-option" data-lang="ru">RU</span>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML); // Insert header at the top of the body

    // Add event listeners to the language switcher
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);  // Save selected language to localStorage
            loadLanguage(selectedLang);  // Load the selected language
        });
    });
}

// Initialize language on page load
function initLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';  // Default to 'en' if no language is saved
    loadLanguage(savedLang);  // Load saved language or default
}

// Inject header and initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    initLanguage();
});
