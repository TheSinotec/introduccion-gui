const navbarHTML = `<header class="site-header row">
            <div class="logo col-xs-10 col-s-11 col-m-11 col-l-11 col-xl-12">
                <img src="media/logo.png" alt="Infotec">
            </div>
            <div class="space-nav col-xs-2 col-s-1 col-m-1 col-l-1 col-xl-12"></div>
            <input type="checkbox" id="nav-toggle">
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav class="navbar col-xs-12 col-s-12 col-m-12 col-l-12 col-xl-12">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="portafolio.html">Portafolio</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li id="guion"></li>
                </ul>
            </nav>
        </header>`;
const footerHTML = `<div class="col-xs-12 col-s-12 col-m-12 col-l-12 col-xl-12">
                        <div class="redes row">
                            <a class="red col-xs-6 col-s-6 col-m-3 col-l-3 col-xl-3" href="mailto:jonatanfisico@gmail.com" target="_blank">
                                <img src="media/gmail.webp" alt="Gmail">
                                <p>Gmail</p>
                            </a>
                            <a class="red col-xs-6 col-s-6 col-m-3 col-l-3 col-xl-3" href="https://wa.me/5215514078010" target="_blank">
                                <img src="media/phone.png" alt="WhatsApp">
                                <p>WhatsApp</p>
                            </a>
                            <a class="red col-xs-6 col-s-6 col-m-3 col-l-3 col-xl-3" href="https://www.linkedin.com/in/jonatán-salgado-razo-58731a317" target="_blank">
                                <img src="media/lin.png" alt="Linkedin">
                                <p>Linkedin</p>
                            </a>
                            <a class="red col-xs-6 col-s-6 col-m-3 col-l-3 col-xl-3"  href="https://github.com/TheSinotec" target="_blank">
                                <img src="media/git.png" alt="GitHub">
                                <p>GitHub</p>
                            </a>
                        </div>
                    </div>
                    <div class="sign col-xs-12 col-s-12 col-m-12 col-l-12 col-xl-11">
                        © Jonatán Salgado Razo
                    </div>`;

function loadHTML(){
    const navbarContainer = document.getElementById("navbar-container");
    const footerContainer = document.getElementById("footer-container");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}


loadHTML();
