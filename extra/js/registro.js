const generalHTML = `
                <b>General</b>
                <div class="form-section">
                    <p>
                        <label for="nombre"><b>Nombre completo:</b></label>
                        <input id="nombre" name="nombre-completo" type="text" placeholder="Nombre completo" required>
                        <br><br>
                        <label for="id-email"><b>Email:</b></label>
                        <input id="id-email" name="correo" type="email" placeholder="Correo electrónico" required>
                        <br><br>
                        <label for="id-phone"><b>Teléfono:</b></label>
                        <input id="id-phone" name="telefono" type="phone" pattern="[0-9]{10}" placeholder="Número telefónico" required>
                        <br><br>
                        <label for="id-institucion"><b>Empresa/Institución:</b></label>
                        <input id="id-institucion" name="institucion" type="text" placeholder="Institución" required>
                        <br><br>
                        <label for="id-direccion"><b>País/Ciudad:</b></label>
                        <input id="id-direccion" name="direccion" type="text" placeholder="¿De dónde eres?" required>
                    </p>
                </div>
`;

const asistentesHTML = `
                <b>Asistentes</b>
                <div class="form-section">
                    <p>
                        <label for="id-experiencia"><b>Nivel de experiencia:</b></label>
                        <select id="id-experiencia" name="experiencia" required>
                            <option value = "Principiante">Principiante</option>
                            <option value = "Intermedio">Intermedio</option>
                            <option value = "Avanzado">Avanzado</option>
                        </select>
                        <br><br>
                        <label for="id-intereses"><b>Áreas de interés:</b></label>
                        <textarea id="id-intereses" name="areas-interes" placeholder="Requerimientos técnicos" required></textarea>
                        <br>
                        <label><b>Requiere certificado:</b></label>
                        <br>
                        <label for="cert-si">Si</label>
                        <input id="cert-si" name="certificado" type="radio" value="Si" required>
                        <label for="cert-no">No</label>
                        <input id="cert-no" name="certificado" type="radio" value="No" required>
                    </p>
                </div>
`;

const ponentesHTML = `
                <b>Ponentes</b>
                <div class="form-section">
                    <p>
                        <label for="id-ponencia"><b>Título de la ponencia:</b></label>
                        <input id="id-ponencia" name="nombre-ponencia" type="text" placeholder="Título de la ponencia" required>
                        <br><br>
                        <label for="id-duracion"><b>Duración estimada:</b></label>
                        <input id="id-duracion" name="horas-ponencia" type="number" min="1" placeholder="Duración en horas" required>
                        <br><br>
                        <label for="id-requerimentos"><b>Requerimientos técnicos:</b></label>
                        <textarea id="id-requerimentos" name="requerimientos-ponencia" placeholder="Requerimientos técnicos" required></textarea>
                        <br>
                        <label for="id-biografia"><b>Biografía profesional:</b></label>
                        <textarea id="id-biografia" name="bio-ponente" placeholder="Biografía profesional" required></textarea>
                        <br><br>
                        <label for="id-redes"><b>Redes sociales/links:</b></label>
                        <input id="id-redes" name="redes-ponencia" placeholder="Redes sociales" type="url" multiple required>
                        <br><br>
                    </p>
                </div>
`;

function loadForms(){
    const tipoAsis = document.getElementById("tipo-asis");
    const tipoPon = document.getElementById("tipo-pon");
    const formAsis = document.getElementById("id-asistentes");
    const formPon = document.getElementById("id-ponentes");
    const formGen = document.getElementById("id-general");
    const formEve = document.getElementById("id-evento");
    const btnReg = document.getElementById("btn-register");
    formEve.style.backgroundColor = "rgb(255, 127, 240)";
    formAsis.innerHTML = ``;
    formPon.innerHTML = ``;
    formGen.innerHTML = ``;
    formAsis.hidden = true;
    formPon.hidden = true;
    formGen.hidden = true;
    if (tipoAsis.checked) {
        formAsis.innerHTML = asistentesHTML;
        formAsis.style.backgroundColor = "rgba(219, 116, 251, 1)";
        formEve.style.backgroundColor = "rgba(219, 116, 251, 1)";
        btnReg.disabled = false;
        formGen.innerHTML = generalHTML;
        formAsis.hidden = false;
        formGen.hidden = false;
        formGen.style.backgroundColor = "rgba(219, 116, 251, 1)";
    }
    if (tipoPon.checked) {
        formPon.innerHTML = ponentesHTML;
        formPon.style.backgroundColor = "rgba(102, 211, 254, 1)";
        formEve.style.backgroundColor = "rgba(102, 211, 254, 1)";
        btnReg.disabled = false;
        formGen.innerHTML = generalHTML;
        formPon.hidden = false;
        formGen.hidden = false;
        formGen.style.backgroundColor = "rgba(102, 211, 254, 1)";
    }
}

function resetForm(){
    const tipoAsis = document.getElementById("tipo-asis");
    const tipoPon = document.getElementById("tipo-pon");
    const btnReg = document.getElementById("btn-register");
    tipoAsis.checked = false;
    tipoPon.checked = false;
    btnReg.disabled = true;
    loadForms();
}

function verPart(){
    var slc = document.getElementById("id-evento-slc");
    if(slc.value === ""){
        window.location.href='participantes.html';
    } else{
        window.location.href='participantes.html?evento=' + slc.value.substring(3, slc.value.length);
    }
    
}

document.getElementById('formA').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    var register = {};
    if(confirm("¿Seguro que desea continuar? El registro no se podrá modificar.")){
        formData.forEach((value, key) => {
            register[key] = value;
        });
        alert("Se ha guardado la información exitosamente.");
        var finalReg = {};
        var dataDefault = JSON.parse(localStorage.getItem('data'));
        if(register["tipo"] === "Asistente"){
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var fecha = hoy.toLocaleDateString();
            finalReg["nombre"] = register["nombre-completo"];
            finalReg["email"] = register["correo"];
            finalReg["tel"] = register["telefono"];
            finalReg["empresa"] = register["institucion"];
            finalReg["pais"] = register["direccion"];
            finalReg["nivel"] = register["experiencia"];
            finalReg["area"] = register["areas-interes"];
            finalReg["certificado"] = register["certificado"];
            finalReg["fecha"] = fecha;
            dataDefault[register["evento"]]["asistentes"].push(finalReg);
        }
        if(register["tipo"] === "Ponente"){
            finalReg["nombre"] = register["nombre-completo"];
            finalReg["email"] = register["correo"];
            finalReg["tel"] = register["telefono"];
            finalReg["empresa"] = register["institucion"];
            finalReg["pais"] = register["direccion"];
            finalReg["ponencia"] = register["nombre-ponencia"];
            finalReg["duracion"] = register["horas-ponencia"];
            finalReg["bio"] = register["bio-ponente"];
            finalReg["redes"] = register["redes-ponencia"];
            dataDefault[register["evento"]]["ponentes"].push(finalReg);
        }
        localStorage.setItem("data", JSON.stringify(dataDefault));
        resetForm();
        
    }
});

loadForms();
var data = JSON.parse(localStorage.getItem('data'));
var slc = document.getElementById("id-evento-slc");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nombreEvento = urlParams.get('evento');
if(nombreEvento === "1" || nombreEvento === "2" || nombreEvento === "3" || nombreEvento === "4"){
    slc.value = "ev-" + nombreEvento;
}