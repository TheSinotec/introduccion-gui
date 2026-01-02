function fechas(nameData, data){
    var fechas = {};
    for (let index = 0; index < data["ev-" + nameData]["asistentes"].length; index++) {
        if (data["ev-" + nameData]["asistentes"][index]["fecha"] in fechas){
            fechas[data["ev-" + nameData]["asistentes"][index]["fecha"]] ++;
        } else{
            fechas[data["ev-" + nameData]["asistentes"][index]["fecha"]] = 1;
        }
    }
    var total = 0;
    Object.entries(fechas).forEach(([clave, valor]) => {
        total = total + valor;
    });
    return total/Object.entries(fechas).length;
}

function nivel(nameData, data){
    var niveles = {"Principiante": 0, "Intermedio": 0, "Avanzado": 0};
    for (let index = 0; index < data["ev-" + nameData]["asistentes"].length; index++) {
        if (data["ev-" + nameData]["asistentes"][index]["nivel"] in niveles){
            niveles[data["ev-" + nameData]["asistentes"][index]["nivel"]] ++;
        } else{
            niveles[data["ev-" + nameData]["asistentes"][index]["nivel"]] = 1;
        }
    }
    var total = niveles["Principiante"] + niveles["Intermedio"] + niveles["Avanzado"];
    return [niveles["Principiante"]/total, niveles["Intermedio"]/total, niveles["Avanzado"]/total];
}


function ponenAsis(nameData, data){
    var total = data["ev-" + nameData]["asistentes"].length + data["ev-" + nameData]["ponentes"].length;
    var ratioPon = (data["ev-" + nameData]["ponentes"].length/total)*100;
    var ratioAsis = (data["ev-" + nameData]["asistentes"].length/total)*100;
    return [ratioAsis, ratioPon];
}

function lugares(nameData, data){
    var lugares = {};
    for (let index = 0; index < data["ev-" + nameData]["asistentes"].length; index++) {
        if (data["ev-" + nameData]["asistentes"][index]["pais"] in lugares){
            lugares[data["ev-" + nameData]["asistentes"][index]["pais"]] ++;
        } else{
            lugares[data["ev-" + nameData]["asistentes"][index]["pais"]] = 1;
        }
    }
    for (let index = 0; index < data["ev-" + nameData]["ponentes"].length; index++) {
        if (data["ev-" + nameData]["ponentes"][index]["pais"] in lugares){
            lugares[data["ev-" + nameData]["ponentes"][index]["pais"]] ++;
        } else{
            lugares[data["ev-" + nameData]["ponentes"][index]["pais"]] = 1;
        }
    }
    return lugares;
}

function loadData(nameData){
    var data = JSON.parse(localStorage.getItem('data'));
    var part = document.getElementById("ev-part");
    var pon = document.getElementById("ev-pon");
    var tablaAsis = document.getElementById("tabla-asis");
    var tablaPon = document.getElementById("tabla-pon");
    pon.innerText = data["ev-" + nameData]["ponentes"].length;
    part.innerText = data["ev-" + nameData]["asistentes"].length;
    if(data["ev-" + nameData]["ponentes"].length === "0"){
        tablaPon.innerHTML = `<tr>
                                <th>Nombre</th>
                                <th>Ponencia</th>
                                <th>Duración</th>
                                <th>Empresa</th>
                                <th>Biografía</th>
                            </tr>
                            <tr>
                                <td colspan="5">Sin registros...</td>
                            </tr>`;
    } else{
        var tablaEmpty =`<tr>
                            <th>Nombre</th>
                            <th>Ponencia</th>
                            <th>Duración</th>
                            <th>Empresa</th>
                            <th>Biografía</th>
                        </tr>`;
        for (let index = 0; index < data["ev-" + nameData]["ponentes"].length; index++) {
            tablaEmpty = tablaEmpty + `
                                <tr>
                                    <td>` + data["ev-" + nameData]["ponentes"][index]["nombre"] + `</td>
                                    <td>` + data["ev-" + nameData]["ponentes"][index]["ponencia"] + `</td>
                                    <td>` + data["ev-" + nameData]["ponentes"][index]["duracion"] + `</td>
                                    <td>` + data["ev-" + nameData]["ponentes"][index]["empresa"] + `</td>
                                    <td>` + data["ev-" + nameData]["ponentes"][index]["bio"] + `</td>
                                </tr>
                `;
        }
        tablaPon.innerHTML = tablaEmpty;
    }
    if(data["ev-" + nameData]["asistentes"].length === "0"){
        tablaAsis.innerHTML = `<td colspan="5">Sin registros...</td>`;
    } else{
        var tablaEmpty =`<tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Empresa</th>
                            <th>Nivel de experiencia</th>
                            <th>Fecha de registro</th>
                        </tr>`;
        for (let index = 0; index < data["ev-" + nameData]["asistentes"].length; index++) {

            tablaEmpty = tablaEmpty + `
                                <tr>
                                    <td>` + data["ev-" + nameData]["asistentes"][index]["nombre"] + `</td>
                                    <td>` + data["ev-" + nameData]["asistentes"][index]["email"] + `</td>
                                    <td>` + data["ev-" + nameData]["asistentes"][index]["empresa"] + `</td>
                                    <td>` + data["ev-" + nameData]["asistentes"][index]["nivel"] + `</td>
                                    <td>` + data["ev-" + nameData]["asistentes"][index]["fecha"] + `</td>
                                </tr>
                `;
        }
        tablaAsis.innerHTML = tablaEmpty;
    }
    var fechasD = fechas(nameData, data);
    const regPD = document.getElementById("id-registros");
    regPD.innerText = fechasD;
    var niveles = nivel(nameData, data);
    const lblP = document.getElementById("lbl-xp-p");
    lblP.title = (niveles[0]*100).toString() + "%";
    const lblI = document.getElementById("lbl-xp-i");
    lblI.title = (niveles[1]*100).toString() + "%";
    const lblA = document.getElementById("lbl-xp-a");
    lblA.title = (niveles[2]*100).toString() + "%";
    const inputP = document.getElementById("id-xp-p");
    inputP.title = (niveles[0]*100).toString() + "%";
    inputP.value = niveles[0]*100;
    const inputI = document.getElementById("id-xp-i");
    inputI.title = (niveles[1]*100).toString() + "%";
    inputI.value = niveles[1]*100;
    const inputA = document.getElementById("id-xp-a");
    inputA.title = (niveles[2]*100).toString() + "%";
    inputA.value = niveles[2]*100;
    var ratio = ponenAsis(nameData, data);
    const lblRA = document.getElementById("lbl-ratio-asis");
    lblRA.title = ratio[0].toString()+"%";
    const lblRP = document.getElementById("lbl-ratio-pon");
    lblRP.title = ratio[1].toString()+"%";
    const inputRA = document.getElementById("id-ratio-asis");
    inputRA.value = ratio[0]
    inputRA.title = ratio[0].toString()+"%";
    const inputRP = document.getElementById("id-ratio-pon");
    inputRP.value = ratio[1]
    inputRP.title = ratio[1].toString()+"%";
    var lugar = lugares(nameData, data);
    const ubicacion = document.getElementById("id-dist-ubicacion");
    var ubiHTML = ``;
    Object.entries(lugar).forEach(([clave, valor]) => {
        ubiHTML = ubiHTML + `<p>`+clave +`: `+ valor +`</p>`;
    });
    if(ubiHTML === ``){
        ubicacion.innerHTML = `<p>No hay datos...</p>`;
    } else{
        ubicacion.innerHTML = ubiHTML;
    }

}

var data = JSON.parse(localStorage.getItem('data'));
var slc = document.getElementById("id-evento-slc");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nombreEvento = urlParams.get('evento');
if(nombreEvento === "1" || nombreEvento === "2" || nombreEvento === "3" || nombreEvento === "4"){
    slc.value = "ev-" + nombreEvento;
    loadData(nombreEvento);
}
