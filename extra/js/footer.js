const footerHTML = `
    <a href="https://github.com/TheSinotec" target="_blank">
        <img id="logo-redes" src="media/git.png" title="Github">
        <h1 id="logo-txt"> Github >>></h1>
    </a>
`;

// Función para cargar el footer
function loadFooter() {
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
}

// Llama a la función para cargar el footer cuando se cargue el script
loadFooter();