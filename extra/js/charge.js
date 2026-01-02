var dataDefault = {
    "ev-1": {
        "ponentes": [
            {
                "nombre": "Juan Sanchez Rodriguez",
                "email": "juan_rod@correo.com",
                "tel": "5517896531",
                "empresa": "INFOTEC",
                "pais": "México",
                "ponencia": "Introducción a la algoritmia",
                "duracion": 2,
                "bio": "Naci en 1990 y me doctoré en complejidad por el INFOTEC.",
                "redes": "http://facebook.com/u/juansanchez"
            },
            {
                "nombre": "Ernesto Guevara Martinez",
                "email": "elche@correo.com",
                "tel": "5517897787",
                "empresa": "Universidad de Cuba",
                "pais": "Cuba",
                "ponencia": "Algoritmos de busqueda en grafos",
                "duracion": 2,
                "bio": "Naci en 1981 en cuba y trabajé para Huawei 10 años",
                "redes": "http://facebook.com/u/elcheG"
            }
        ],
        "asistentes":[
            {
                "nombre": "Rodrigo Rodriguez Rayo",
                "email": "rorora@correo.com",
                "tel": "5518883587",
                "empresa": "UNAM",
                "pais": "México",
                "nivel": "Avanzado",
                "area": "Ciencia de Datos",
                "certificado": "No",
                "fecha": "01/01/2026"
            }
        ]
    },
    "ev-2": {
        "ponentes": [
            {
                "nombre": "Pedro Sanchez Rodriguez",
                "email": "pedro_rod@correo.com",
                "tel": "5517123581",
                "empresa": "INFOTEC",
                "pais": "México",
                "ponencia": "Vibe coding ¿amigo o enemigo?",
                "duracion": 1,
                "bio": "Naci en 1995 y me estudie en la universidad de la vida.",
                "redes": "http://facebook.com/u/pedrosanchez"
            }
        ],
        "asistentes":[
            {
                "nombre": "Paco Taibo Perez",
                "email": "pa_ler@correo.com",
                "tel": "5518883337",
                "empresa": "Fondo de cultura económica",
                "pais": "México",
                "nivel": "Principiante",
                "area": "IA",
                "certificado": "No",
                "fecha": "01/01/2026"
            }
        ]
    },
    "ev-3": {
        "ponentes": [
            {
                "nombre": "David Cho Hai",
                "email": "pelayo@correo.com",
                "tel": "5519988236",
                "empresa": "Xiaomi",
                "pais": "China",
                "ponencia": "Tendencias mundiales de la arquitectura de software.",
                "duracion": 1,
                "bio": "Naci en 1980 y me doctoré de la universidad de Shenzen",
                "redes": "http://facebook.com/u/DavidCho"
            }
        ],
        "asistentes":[
            {
                "nombre": "Sarahi Trump Perez",
                "email": "trumpsp@correo.com",
                "tel": "5583188587",
                "empresa": "INFOTEC",
                "pais": "México",
                "nivel": "Intermedio",
                "area": "Arquitectura de software",
                "certificado": "Si",
                "fecha": "01/01/2026"
            },
            {
                "nombre": "Marta Murillo Suarez",
                "email": "ma_mup@correo.com",
                "tel": "5566587318",
                "empresa": "INFOTEC",
                "pais": "México",
                "nivel": "Intermedio",
                "area": "IA, análisis de datos",
                "certificado": "Si",
                "fecha": "01/01/2026"
            }
        ]
    },
    "ev-4": {
        "ponentes": [
            {
                "nombre": "Juan Sanchez Rodriguez",
                "email": "juan_rod@correo.com",
                "tel": "5517896531",
                "empresa": "INFOTEC",
                "pais": "México",
                "ponencia": "Algoritmos de clasificación de datos",
                "duracion": 3,
                "bio": "Naci en 1990 y me doctoré en complejidad por el INFOTEC.",
                "redes": "http://facebook.com/u/juansanchez"
            }
        ],
        "asistentes":[
            {
                "nombre": "Marta Murillo Suarez",
                "email": "ma_mup@correo.com",
                "tel": "5566587318",
                "empresa": "INFOTEC",
                "pais": "México",
                "nivel": "Intermedio",
                "area": "IA, análisis de datos",
                "certificado": "Si",
                "fecha": "01/01/2026"
            }
        ]
    }
};
try {
    var data = JSON.parse(localStorage.getItem('data'));
    if (data === null){
        //Se carga data por defecto
        localStorage.setItem("data", JSON.stringify(dataDefault));
    }
} catch (error) {
    //Se recarga data por defecto
    localStorage.setItem("data", JSON.stringify(dataDefault));
}
