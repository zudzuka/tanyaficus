// Determine the correct image folder based on the current folder
// var imgFolder = window.location.pathname === '/' ? 'img/' : '../img/';

// Inject Footer using insertAdjacentHTML
const footerHTML = `
    <footer class="footer">
        <ul class="social">
            <li class="social">
                <a class="social" href="https://www.instagram.com/tanyaficus/">
                    <img class="social" src="img/ig_logo.png">Instagram
                </a>
            </li>
            <li class="social">
                <a class="social" href="mailto:pianykh.tatiana@gmail.com">
                    <img class="social" src="img/email.png">pianykh.tatiana@gmail.com
                </a>
            </li>
            <li class="social">
                <a class="social" href="impressum" data-i18n="footer.impressum">
                    Impressum
                </a>
            </li>
            <li class="social">
                <img class="social" src="img/location.png">
                <div data-i18n="footer.location">Berlin, Germany</div>
            </li>
        </ul>
    </footer>
`;

// Insert footer at the bottom of the body
document.body.insertAdjacentHTML('beforeend', footerHTML);
