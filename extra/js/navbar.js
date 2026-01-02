const navbarHTML = `
    <a id="a-index" href="index.html">Inicio</a>
    <a id="a-registro" href="registro.html">Registrar Participante</a>
    <a id="a-participantes" href="participantes.html">Ver Participantes</a>
`;

// Función para cargar la navbar
function loadNavbar() {
  const navbarContainer = document.getElementById("nav-container");
  const url = window.location.href.split('/').pop().split('?').shift();
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
  switch (url) {
    case "registro.html":
      const aReg = document.getElementById("a-registro");
      aReg.style.backgroundColor = "rgb(33, 216, 152)";
      aReg.onmouseenter = function (e) {
        e.target.style.backgroundColor = "rgb(100, 255, 201)";
      }
      aReg.onmouseleave = function (e) {
          e.target.style.backgroundColor = "rgb(33, 216, 152)";
      }
      break;
    case "participantes.html":
      const aPart = document.getElementById("a-participantes");
      aPart.style.backgroundColor = "rgb(33, 216, 152)";
      aPart.onmouseenter = function (e) {
        e.target.style.backgroundColor = "rgb(100, 255, 201)";
      }
      aPart.onmouseleave = function (e) {
          e.target.style.backgroundColor = "rgb(33, 216, 152)";
      }
      break;
    default:
      const aIndex = document.getElementById("a-index");
      aIndex.style.backgroundColor = "rgb(33, 216, 152)";
      aIndex.onmouseenter = function (e) {
        e.target.style.backgroundColor = "rgb(100, 255, 201)";
      }
      aIndex.onmouseleave = function (e) {
          e.target.style.backgroundColor = "rgb(33, 216, 152)";
      }
      break;
  }
  
}

// Llama a la función para cargar la navbar cuando se cargue el script
loadNavbar();